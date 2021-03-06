import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from './sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'pageHome':
      return '/';
    case 'pageAboutUs':
      return `/about`;
    case 'pageTreatment':
      return `/treatment`;
    case 'pageStories':
      return `/stories`;
    case 'pageClinics':
      return `/clinics`;
    case 'pageOffer':
      return `/offer`;
    case 'pageHowItWorks':
      return `/how-it-works`;
    case 'pagePrivacy':
      return `/privacy`;
    case 'pageTerms':
      return `/terms`;
    case 'story':
      return `/stories/${doc.uid}`;
    default:
      return '/';
  }
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
