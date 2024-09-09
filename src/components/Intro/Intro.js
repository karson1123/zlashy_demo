'use client'

import intro from './intro.module.scss';

import BackgroundDesktop from '../../assets/images/Background_Desktop.png';
import Livingyour8alance from '../../assets/images/Living_your_8alance.svg';
import Bubble1 from '../../assets/images/Bubble1.png';
import Bubble2 from '../../assets/images/Bubble2.png';
import Bubble3 from '../../assets/images/Bubble3.png';
import Bubble4 from '../../assets/images/Bubble4.png';
import Bubble5 from '../../assets/images/Bubble5.png';
import Mobile1 from '../../assets/images/Mobile1_EN.png';
import Mobile2 from '../../assets/images/Mobile2_EN.png';
import Grass from '../../assets/images/Grass.png';
import Ecosystem from '../../assets/images/Eco_system.png';

import { motion } from 'framer-motion';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const container = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const bub1Ref = useRef(null);
  const bub2Ref = useRef(null);
  const bub3Ref = useRef(null);
  const bub4Ref = useRef(null);
  const bub5Ref = useRef(null);
  const bgRef = useRef(null);
  const mobileref = useRef(null);

  const slogan2ref = useRef(null);
  const phone1ref = useRef(null);
  const grassref = useRef(null);
  const graphref = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
        },
      })

      if (window.innerWidth > 768) {
        tl.to(bub1Ref.current,
          {
            y: 700,
            x: 100,
            scale: 0.7,
            opacity: 0,
            scrollTrigger: {
              trigger: bub1Ref.current,
              start: "top top",
              end: "150% top",
              scrub: 1,
            },
          }).to(bub2Ref.current,
            {
              y: 700,
              x: -280,
              scale: 0.7,
              opacity: 0,
              scrollTrigger: {
                trigger: bub2Ref.current,
                start: "20% top",
                end: "150% top",
                scrub: 1,
              },
            }).to(bub3Ref.current,
              {
                y: 700,
                x: 320,
                scale: 0.7,
                opacity: 0,
                scrollTrigger: {
                  trigger: bub3Ref.current,
                  start: "10% top",
                  end: "150% top",
                  scrub: 1,
                },
              }).to(bub4Ref.current,
                {
                  y: 600,
                  x: -10,
                  scale: 0.7,
                  opacity: 0,
                  scrollTrigger: {
                    trigger: bub4Ref.current,
                    start: "top top",
                    end: "150% top",
                    scrub: 1,
                  },
                }).to(bub5Ref.current,
                  {
                    y: 500,
                    x: 120,
                    scale: 0.7,
                    opacity: 0,
                    scrollTrigger: {
                      trigger: bub5Ref.current,
                      start: "top top",
                      end: "150% top",
                      scrub: 1,
                    },
                  }).to(bgRef.current,
                    {
                      y: 1500,
                      opacity: 0,
                      scale: 0,
                      scrollTrigger: {
                        trigger: bgRef.current,
                        start: "90% top",
                        scrub: 1,
                      },
                    }).to(mobileref.current,
                      {
                        x: -100,
                        // y: 100,
                        rotate: -45,
                        opacity: 0,
                        scrollTrigger: {
                          trigger: mobileref.current,
                          start: "top 20%",
                          end: "400% bottom",
                          scrub: 1,
                          pin: true,
                        },
                      })
      } else {
        tl.to([section1.current],
          {
            y: 650,
            opacity: 0,
            scale: 0,
            scrollTrigger: {
              trigger: section1.current,
              start: "65% top",
              end: "82% top",
              scrub: 1,
              pin: true,
            },
          }).to(mobileref.current,
            {
              x: -100,
              // y: 100,
              rotate: -45,
              opacity: 0,
              scrollTrigger: {
                trigger: mobileref.current,
                start: "top 38%",
                end: "400% bottom",
                scrub: 1,
                pin: true,
              },
            })
      }


      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
        },
      })

      if (window.innerWidth > 768) {
        tl2.fromTo(slogan2ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: slogan2ref.current,
              start: "20% 90%",
              end: "top 50%",
              scrub: 1,
            },
          }, 0).fromTo(phone1ref.current,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: phone1ref.current,
                start: "top 90%",
                end: "20% 90%",
                scrub: 1,
              },
            }, 0).fromTo(graphref.current,
              {
                opacity: 0,
              },
              {
                opacity: 1,
                scrollTrigger: {
                  trigger: graphref.current,
                  start: "top 90%",
                  end: "40% 90%",
                  scrub: 1,
                },
              }, 0)
      } else {
        tl2.fromTo([slogan2ref.current, phone1ref.current, grassref.current, graphref.current],
          {
            opacity: 0,
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: slogan2ref.current,
              start: "20% 90%",
              end: "top 50%",
              scrub: 1,
            },
          }, 0)
      }


    })
    return () => context.revert();
  }, [])


  const handleClick = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <div ref={container} className={intro.container}>
      <div ref={section1}>
        <div className={intro.imageContainer}>
          <img ref={bgRef} src={BackgroundDesktop} alt="Background Desktop" />
        </div>

        <div className={intro.sloganContainer}>
          <img src={Livingyour8alance} alt="Living your 8alance" />
          <div
            onClick={handleClick}
            style={{
              position: 'absolute',
              bottom: 0,
              left: '35%',
              width: '30%',
              height: '20%',
              cursor: 'pointer',
              backgroundColor: 'rgba(0, 0, 0, 0)',
            }}
          />
        </div>

        <motion.div
          className={intro.bubbles}>
          <motion.div
            initial={{ rotate: -3 }}
            animate={{ rotate: 6 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", ease: 'backInOut' }}
            className={intro.bubbleContainer}>
            <motion.img
              ref={bub1Ref} src={Bubble1} alt={`bubbles`} />
          </motion.div>
        </motion.div>

        <motion.div
          className={intro.bubbles}>
          <motion.div
            initial={{ rotate: 3 }}
            animate={{ rotate: -6 }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse", ease: 'backInOut' }}
            className={intro.bubbleContainer}>
            <motion.img
              ref={bub2Ref} src={Bubble2} alt={`bubbles`} />
          </motion.div>
        </motion.div>

        <motion.div
          className={intro.bubbles}>
          <motion.div
            initial={{ rotate: -3 }}
            animate={{ rotate: 6 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: 'backInOut' }}
            className={intro.bubbleContainer}>
            <motion.img
              ref={bub3Ref} src={Bubble3} alt={`bubbles`} />
          </motion.div>
        </motion.div>

        <motion.div
          className={intro.bubbles}>
          <motion.div
            initial={{ rotate: 3 }}
            animate={{ rotate: -6 }}
            transition={{ repeat: Infinity, duration: 1.3, repeatType: "reverse", ease: 'backInOut' }}
            className={intro.bubbleContainer}>
            <motion.img
              ref={bub4Ref} src={Bubble4} alt={`bubbles`} />
          </motion.div>
        </motion.div>


        <motion.div
          className={intro.bubbles}>
          <motion.div
            initial={{ rotate: -3 }}
            animate={{ rotate: 6 }}
            transition={{ repeat: Infinity, duration: 2.2, repeatType: "reverse", ease: 'backInOut' }}
            className={intro.bubbleContainer}>
            <motion.img
              ref={bub5Ref} src={Bubble5} alt={`bubbles`} />
          </motion.div>
        </motion.div>
      </div>


      <div className={intro.phone}>
        <img ref={mobileref} src={Mobile1} alt="Mobile1" />
      </div>


      <div ref={section2}>
        <div className={intro.slogan2Container}>
          <h1 ref={slogan2ref}>Dive into our wellness community of rewards</h1>
          <div className={intro.imageContainer}>
            <img ref={phone1ref} src={Mobile2} alt="Mobile2" />
          </div>
          <div className={intro.imageContainer}>
            <img ref={grassref} src={Grass} alt="Grass" />
          </div>
          <div className={intro.imageContainer}>
            <img ref={graphref} src={Ecosystem} alt="Ecosystem" />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Intro;
