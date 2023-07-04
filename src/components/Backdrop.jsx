import { motion } from "framer-motion"

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
        className="absolute top-0 left-0 h-full w-full flex bg-[#00000030] items-center justify-center"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {children}
    </motion.div>
  )
}

export default Backdrop