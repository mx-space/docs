'use client';
 
import { OramaClient } from '@oramacloud/client';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-orama';
 
const client = new OramaClient({
  endpoint: 'https://cloud.orama.run/v1/indexes/mxspace-no50lj',
  api_key: 'HHIpRwosmxFfAs7l2gsJv5m5A3ew2PRB',
});
 
export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog {...props} client={client} showOrama />;
}