import logo from './logo_en.png';
import logoR from './logo_en@2x.png';
export const retinaDevice = window.devicePixelRatio > 1;

export const logoSize = () =>{
  return retinaDevice ? logoR : logo;
}