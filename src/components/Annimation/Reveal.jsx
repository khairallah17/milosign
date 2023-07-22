import { motion } from "framer-motion"

const Reveal = ({ children, delay }) => {

    const animation = {
        hidden: {
            opacity: 0,
            y: 75
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    const tranistion = {
        duration: 0.5,
        delay: delay
    }

  return (
    <motion.div
        variants={animation}
        initial="hidden"
        animate="visible"
        transition={tranistion}
    >
        { children }
    </motion.div>
  )
}

export default Reveal