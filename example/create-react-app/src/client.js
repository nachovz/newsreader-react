import Client from '@wp-headless/client';
//import FetchTransport from '@wp-headless/transport-fetch';

export default new Client('https://www.elnacional.com/wp-json');
/*
export default new Client({
  transport: new FetchTransport(),
  endpoint: 'https://www.elnacional.com/wp-json/wp/v2'
});*/