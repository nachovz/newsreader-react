import ReactHtmlParser from 'react-html-parser';
import { DEVICE_WIDTH } from 'styles/constants';

export default (ren) => 
  ReactHtmlParser(ren.replace(/style="text-align: justify;"/g, '')
    .replace(/&#171;/g, '“<em>')
    .replace(/&#187;/g,'</em>”')
    .replace(/<p><iframe/g,'<iframe')
    .replace(/\/iframe><\/p>/g,'/iframe>')
    .replace(/width="[0-9]*"/g, `width="${DEVICE_WIDTH}"`)
    .replace(/height="[0-9]*"/g, ``)
  )