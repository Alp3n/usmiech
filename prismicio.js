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
      return `/o-nas`;
    case 'pageTreatment':
      return `/leczenie`;
    case 'pageStories':
      return `/historie`;
    case 'pageClinics':
      return `/gabinety`;
    case 'pageOffer':
      return `/offer`;
    case 'pageHowItWorks':
      return `/jak-to-dziala`;
    case 'pageBooking':
      return `/gabinety`;
    default:
      return null;
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
