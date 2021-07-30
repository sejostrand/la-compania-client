import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith(
    'https://la-compania-strapi.herokuapp.com/'
  )
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}
