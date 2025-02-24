import EmotionalType from "../models/EmotionalType"
import SessionDetail from "../models/SessionDetail"

export const EMOTIONSTYPE = [
    new EmotionalType('e1', 'Meditation for Happy and Joyful Emotion', 'The Joy and Happiness'),
    new EmotionalType('e2', 'Meditation for Sadness and Depression', 'Relieving Stress '),
    new EmotionalType('e3', 'Meditation for Fear and Anxiety', 'Overcoming Anxiety and Fear')
]
// SAn - Session Audio number
export const SESSIONDETAIL = [
    new SessionDetail('SAn001', '../assets/images/dummy/List1.jpg', 'Happiness Meditation', 'Guided', '5 min'),
    new SessionDetail('SAn002', '../assets/images/dummy/List2.jpg', 'Joy Meditation', 'Guided', '5 min'),
    new SessionDetail('SAn003', '../assets/images/dummy/List3.jpg', 'Equanimity Meditation (Find Calm)', 'Guided', '6 min'),
    new SessionDetail('SAn004', '../assets/images/dummy/List4.jpg', 'Gratitude Meditation', 'Guided', '5 min'),
    new SessionDetail('SAn005', '../assets/images/dummy/List5.jpg', 'OM Chant Meditation', 'Music', '5 min')
]