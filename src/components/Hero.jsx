import { motion } from 'framer-motion'; 

import { styles } from "../styles";
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div /*circle*/ className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div /*line*/ className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Robert</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            EDIT THIS: About Me I develop games and web applications.  
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev /* using framer-motion to animate scroll button */
              animate={{
                y: [0, 24, 0] /* move circle 24 pixels up and down */
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop' /* infinitly looped */
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero