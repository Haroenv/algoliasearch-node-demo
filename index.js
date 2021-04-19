import algoliasearch from 'algoliasearch';

const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

client
  .search([{ indexName: 'instant_search' }])
  .then(console.log)
  .catch(console.warn);
