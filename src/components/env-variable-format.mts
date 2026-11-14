/** Compose environment mappings contain strings; dollar escaping prevents interpolation. */
export function formatEnvVariables(
  variables: ReadonlyArray<{ key: string }>,
  values: readonly string[],
  format: 'yaml' | 'env',
): string {
  return variables.map((variable, index) => {
    const value = values[index] ?? '';
    return format === 'yaml'
      ? `${variable.key}: ${JSON.stringify(value.replaceAll('$', () => '$$'))}`
      : `${variable.key}=${value}`;
  }).join('\n');
}
