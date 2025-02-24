import * as Quotations from '../data/quotations.json';
const getEmotionImages = (id: any) => {
  switch (id) {
    //happy
    case 1: return require('../assets/images/media/happy/Happiness.jpg');
    case 2: return require('../assets/images/media/happy/Joy.jpg');
    case 3: return require('../assets/images/media/happy/Equanimity.jpeg');
    case 4: return require('../assets/images/media/happy/Gratitude.jpg');
    case 5: return require('../assets/images/media/happy/OM.jpg');
    case 6: return require('../assets/images/media/happy/Flute.jpeg');
    //sad
    case 7: return require('../assets/images/media/sad/Sadness.jpeg');
    case 8: return require('../assets/images/media/sad/SittingSadness.jpeg');
    case 9: return require('../assets/images/media/sad/Alone.jpeg');
    case 10: return require('../assets/images/media/sad/Gried.jpeg');
    case 11: return require('../assets/images/media/sad/Frustation.jpeg');
    case 12: return require('../assets/images/media/sad/Stress.jpeg');
    case 13: return require('../assets/images/media/sad/Anxiety.jpeg');
    case 14: return require('../assets/images/media/sad/SocialAnxiety.jpeg');
    case 15: return require('../assets/images/media/sad/Flute.jpeg');
    //calm
    case 16: return require('../assets/images/media/calm/Calm.jpeg');
    case 17: return require('../assets/images/media/calm/Nature.jpeg');
    case 18: return require('../assets/images/media/happy/Equanimity.jpeg');
    case 19: return require('../assets/images/media/calm/Krishna.jpeg');
    case 20: return require('../assets/images/media/happy/OM.jpg');
    case 21: return require('../assets/images/media/calm/CalmCartoon.jpeg');
    case 22: return require('../assets/images/media/calm/Healing.jpeg');
    default: return;
  }
};
export default getEmotionImages;