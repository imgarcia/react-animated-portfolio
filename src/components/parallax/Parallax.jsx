import { motion, useScroll, useTransform } from 'framer-motion'
import './parallax.scss'
import { useRef } from 'react'

// const variants = {
//   initial: {
//     y: 10,
//     transition: { staggerChildren: 0.1 },
//   },
//   animate: {
//     y: 0,
//   },
// }

export const Parallax = ({ type }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // start of viewport and ends of start viewport
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '400%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '75%'])

  const isServices = type === 'services'

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background: isServices
          ? 'linear-gradient(180deg, #111132, #0c0c1d)'
          : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {isServices ? 'What We Do?' : 'What We Did?'}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${isServices ? '/planets.png' : 'sun.png'})`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  )
}
