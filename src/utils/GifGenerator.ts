import * as Quotations from '../data/quotations.json';
const getEmotionGif = (id: any) => {
  switch (id) {
    case 100: return require('../assets/images/animated/Breath.gif');
    case 200: return require('../assets/images/animated/BeHappy.gif');
    case 300: return require('../assets/images/animated/Calm.gif');
    default: return;
  }
};
export default getEmotionGif;