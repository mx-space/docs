import { createFromSource } from 'fumadocs-core/search/server';
import { source } from '@/lib/source';

export const revalidate = false;

const searchApi = createFromSource(source);

export const GET = searchApi.staticGET;
