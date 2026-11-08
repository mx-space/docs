import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import test from 'node:test';
import { parse } from 'yaml';
import { formatEnvVariables } from '../src/components/env-variable-format.mts';

test('YAML output is a string-valued mapping with quoted special values', () => {
  const values = ['false', '00123', 'a: b # value', 'quote" slash\\\nnext line'];
  const variables = values.map((_, index) => ({ key: `KEY_${index}` }));
  const result = parse(formatEnvVariables(variables, values, 'yaml'));
  assert.equal(Array.isArray(result), false);
  values.forEach((value, index) => assert.equal(result[`KEY_${index}`], value));
});

test('Compose preserves literal dollar signs in copied secrets', { skip: spawnSync('docker', ['image', 'inspect', 'alpine:latest']).status !== 0 }, () => {
  const environment = formatEnvVariables([{ key: 'JWT_SECRET' }], ['literal$secret${UNSET}'], 'yaml');
  const compose = `services:\n  app:\n    image: alpine:latest\n    pull_policy: never\n    network_mode: none\n    environment:\n${environment.split('\n').map((line) => `      ${line}`).join('\n')}\n`;
  const result = execFileSync('docker', ['compose', '-f', '-', 'run', '--rm', '--no-deps', 'app', 'printenv', 'JWT_SECRET'], { input: compose, encoding: 'utf8', env: { PATH: process.env.PATH, HOME: process.env.HOME, COMPOSE_PROJECT_NAME: `mx-docs-test-${process.pid}` } });
  assert.equal(result.trim(), 'literal$secret${UNSET}');
});

test('existing env output and caller values remain unchanged', () => {
  const values = Object.freeze(['test-value']);
  assert.equal(formatEnvVariables([{ key: 'KEY' }], values, 'env'), 'KEY=test-value');
});
