import { SITE_URL } from 'data/constants';

export const urlCleaner = (url) => url.replace(SITE_URL, '');
export const slugFinder = (url) => {
  console.log(url)
  const splitted = url.pathname.split('/');
  console.log(splitted[splitted.length-2])
  return splitted[splitted.length-2];
}