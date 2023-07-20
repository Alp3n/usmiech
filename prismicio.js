import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from './sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

export function linkResolver(doc) {
  const prefix = doc.lang !== 'pl' ? `/${doc.lang}` : '/pl';
  switch (doc.type) {
    case 'homepage':
      return `${prefix}`;
    case 'story':
      return `${prefix}/stories/${doc.uid}`;
    case 'page':
      return `${prefix}/${doc.uid}`;
  }
}
/** @type {prismic.ClientConfig['routes']} **/
// export const routes = [
//   // homepage
//   {
//     type: 'homepage',
//     lang: 'pl',
//     path: '/pl/',
//   },
//   {
//     type: 'homepage',
//     lang: 'en-eu',
//     path: '/en/',
//   },
//   {
//     type: 'homepage',
//     lang: 'uk-ua',
//     path: '/uk/',
//   },
//   {
//     type: 'homepage',
//     lang: 'ru',
//     path: '/ru/',
//   },
//   //page
//   {
//     type: 'page',
//     lang: 'pl',
//     path: '/pl/:uid',
//   },
//   {
//     type: 'page',
//     lang: 'en-eu',
//     path: '/en/:uid',
//   },
//   {
//     type: 'page',
//     lang: 'uk-ua',
//     path: '/uk/:uid',
//   },
//   {
//     type: 'page',
//     lang: 'ru',
//     path: '/ru/:uid',
//   },
//   //story
//   {
//     type: 'story',
//     lang: 'pl',
//     path: '/pl/historie/:uid',
//   },
//   {
//     type: 'story',
//     lang: 'en-eu',
//     path: '/en/stories/:uid',
//   },
//   {
//     type: 'story',
//     lang: 'uk-ua',
//     path: '/uk/stories/:uid',
//   },
//   {
//     type: 'story',
//     lang: 'ru',
//     path: '/ru/stories/:uid',
//   },
// ];

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    routes,
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
