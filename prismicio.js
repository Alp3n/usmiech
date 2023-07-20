import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from './sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

export function linkResolver(doc) {
  const prefix = doc.lang !== 'pl' ? `/${doc.lang}` : '';
  switch (doc.type) {
    case 'homepage':
      return `${prefix}`;
    case 'story':
      return `${prefix}/stories/${doc.uid}`;
    case 'page':
      return `${prefix}/${doc.uid}`;
  }

  // if (doc.uid === 'homepage') {
  //   return `/`;
  // } else if (doc.type === 'story') {
  //   return `/stories/${doc.uid}`;
  // } else if (doc.type === 'page') {
  //   return `/${doc.uid}`;
  // }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
