import React from 'react'
import { fadeIn, staggerContainer } from '../../utils/motion';
import css from './Hero.module.scss';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
        className={`innerWidth ${css.container}`}>

            {/* upper elements */}
            <div className={css.upperElements}>
                <motion.span className='primaryText'
                variants={fadeIn("right","tween",0.2,1)}>
                    Hey There,<br/>I'm Sai Santosh
                </motion.span>
                <motion.span variants={fadeIn("left","tween",0.2,1)}
                 className='secondaryText'>
                    Am 3D Graphic Artist,<br/>And frontend developer.
                </motion.span>
            </div>
{/* person image */}
            <motion.div variants={fadeIn("up","tween",0.2,1)} className={css.person}>
                <img src='./person copy.png' alt=''/>
            </motion.div>
{/* email */}
        <motion.a variants={fadeIn("right","tween",0.2,1)} className={css.email} href="mailto:saisantoshn344@gmail.com">
          saisantoshn344@gmail.com
        </motion.a>
            {/* lower elements */}
            <div className={css.lowerElements}>
                <motion.div variants={fadeIn("right","tween",0.2,1)} className={css.experience}>
                    <div className='primaryText'>8</div>
                    <div className='secondaryText'>
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("left","tween",0.2,1)} className={css.certificate}>
                    <img src='./certificate.png' alt=''/>
                    {/* <span>CERTIFIED PROFESSIONAL</span> */}
                    <span className='secondaryText'>3D DEVELOPER</span>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero