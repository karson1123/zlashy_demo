'use client'

import features from './features.module.scss';
import switchs from './switch.module.scss';

import CurveBG from '../../assets/images/Beige_CurveBG.svg';
import ColouredDots from '../../assets/images/ColouredDots.png';

import feat1bg from '../../assets/images/stepcounter-1.png';
import feat1phone from '../../assets/images/stepcounter-3.png';
import feat1dec1 from '../../assets/images/stepcounter-2.png';
import feat1dec2 from '../../assets/images/stepcounter-4.png';

import feat2bg from '../../assets/images/Vitalscan-1.png';
import feat2phone from '../../assets/images/Vitalscan-4.png';
import feat2dec1 from '../../assets/images/Vitalscan-2.png';
import feat2dec2 from '../../assets/images/Vitalscan-3.png';

import feat3bg from '../../assets/images/Button1_1.png';
import feat3phone from '../../assets/images/Screen1_EN.png';
import feat3dec1 from '../../assets/images/Button1_3.png';
import feat3dec2 from '../../assets/images/Button1_2.png';

import feat4bg from '../../assets/images/Button2_1.png';
import feat4phone from '../../assets/images/Screen0_EN.png';
import feat4dec1 from '../../assets/images/Button2_2.png';
import feat4dec2 from '../../assets/images/Button2_3.png';

import feat5bg from '../../assets/images/Button3_1.png';
import feat5phone from '../../assets/images/Screen2_EN.png';
import feat5dec1 from '../../assets/images/Button3_2_m.png';
import feat5dec2 from '../../assets/images/Button3_3.png';

import feat6bg from '../../assets/images/moodplaylist-1.png';
import feat6phone from '../../assets/images/Screen0_EN.png';
import feat6dec1 from '../../assets/images/Button4_2.png';
import feat6dec2 from '../../assets/images/Button4_3.png';

import { motion } from 'framer-motion';

const Features = () => {

    return (
        <div className={features.container}>
            <div className={features.imageContainer}>
                <img src={CurveBG} alt="Mobile2" />
            </div>
            <div className={features.intro}>
                <h1>Unlock the power of balance</h1>
                <img src={ColouredDots} alt="ColouredDots" />
                <label class={switchs.switch}>
                    <input type="checkbox" />
                    <span class={switchs.slider}></span>
                    <h3>To Prosper</h3>
                    <h3>To Learn & Earn</h3>
                </label>
            </div>

            <div className={features.rightfeat}>
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat1bg} alt="feat1bg" className={features.featbg} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat1dec1} alt="feat1dec1" className={features.featdec1} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat1dec2} alt="feat1dec2" className={features.featdec1} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat1phone} alt="feat1phone" className={features.phone} />

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={features.desc}>
                    <div className={features.cat}>Fitness</div>
                    <h1>Step Challenges</h1>
                    <p>Embark on a GPS-based ESG adventure with Adventure Hunt (and the soon-to-come Eco Hunt) around Hong Kong. Track your daily steps using Step Counter to achieve your health goals.</p>
                </motion.div>
            </div>

            <div className={features.leftfeat}>
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                     src={feat2bg} alt="featbg" className={features.featbg} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat2dec1} alt="featdec1" className={features.featdec1} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat2dec2} alt="featdec2" className={features.featdec2} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat2phone} alt="featphone" className={features.phone} />

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={features.desc}>
                    <div className={features.cat}>Monitor</div>
                    <h1>Daily vital scan</h1>
                    <p>Keep track of your health score every day to improve
                        wellness over time.</p>
                </motion.div>
            </div>

            <div className={features.rightfeat}>
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                     src={feat3bg} alt="featbg" className={features.featbg} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat3dec1} alt="featdec1" className={features.featdec1} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat3dec2} alt="featdec2" className={features.featdec2} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat3phone} alt="featphone" className={features.phone} />

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={features.desc}>
                    <div className={features.cat}>Stretch</div>
                    <h1>Deskercise</h1>
                    <p>Take your pocket stretch trainer with you anywhere to bid farewell to tight shoulders and neck.</p>
                </motion.div>
            </div>

            <div className={features.leftfeat}>
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                     src={feat4bg} alt="featbg" className={features.featbg} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat4dec1} alt="featdec1" className={features.featdec1} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat4dec2} alt="featdec2" className={features.featdec2} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat4phone} alt="featphone" className={features.phone} />

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={features.desc}>
                    <div className={features.cat}>Hydration</div>
                    <h1>Water tracker</h1>
                    <p>Receive periodic reminders for hydration breaks to stay active throughout the day.</p>
                </motion.div>
            </div>

            <div className={features.rightfeat}>
                <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                     src={feat5bg} alt="featbg" className={features.featbg} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat5dec1} alt="featdec1" className={features.featdec2} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat5dec2} alt="featdec2" className={features.featdec1} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat5phone} alt="featphone" className={features.phone} />

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={features.desc}>
                    <div className={features.cat}>Breathe</div>
                    <h1>Mindful Pause                    </h1>
                    <p>Take conscious control of your breath to regulate your mind and alleviate stress.</p>
                </motion.div>
            </div>

            <div className={features.leftfeat}>
                <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                     src={feat6bg} alt="featbg" className={features.featbg} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat6dec1} alt="featdec1" className={features.featdec1} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat6dec2} alt="featdec2" className={features.featdec2} />
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={feat6phone} alt="featphone" className={features.phone} />

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={features.desc}>
                    <div className={features.cat}>Booster</div>
                    <h1>Feel-good playlists</h1>
                    <p>Listen to mood-boosting playlists tailored to your emotions to stay motivated and inspired.</p>
                </motion.div>
            </div>

            <div className={features.outro}>
                <h1>Find your balance now
                </h1>
                <img src={ColouredDots} alt="ColouredDots" />
                <h2>Embrace a balanced life by joining the 8alance community.
                </h2>
                <a href='#'>Download user guide</a>
            </div>


        </div>
    );
};

export default Features;
