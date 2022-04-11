import { createMedia } from '@artsy/fresnel';

const MediaQueries = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

// Generate CSS to be injected into the head
export const mediaStyle = MediaQueries.createMediaStyle();
export const { Media, MediaContextProvider } = MediaQueries;
