import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam obcaecati animi, possimus deserunt illum omnis earum a ullam magni nam sunt error dicta architecto odio veritatis vero. Reiciendis, aliquam saepe!',
  },
  {
    id: 2,
    title: 'Next.js Commerce',
    img: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam obcaecati animi, possimus deserunt illum omnis earum a ullam magni nam sunt error dicta architecto odio veritatis vero. Reiciendis, aliquam saepe!',
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    img: 'https://images.unsplash.com/photo-1570051008600-b34baa49e751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam obcaecati animi, possimus deserunt illum omnis earum a ullam magni nam sunt error dicta architecto odio veritatis vero. Reiciendis, aliquam saepe!',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://plus.unsplash.com/premium_photo-1682091872078-46c5ed6a006d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam obcaecati animi, possimus deserunt illum omnis earum a ullam magni nam sunt error dicta architecto odio veritatis vero. Reiciendis, aliquam saepe!',
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['end end', 'start start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-75, 75])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </section>
  )
}
