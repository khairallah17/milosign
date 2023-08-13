import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import { RxCross1 } from "react-icons/rx"

const Modal = ({ handleClose, children, className, title }) => {

    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500,
                delayChildren: 0.5
            }
        },
        exit: {
            y: "100vh",
            opacity: 0
        },
    }

  return (
    <Backdrop onClick={handleClose}>
        <motion.div
            className={`${className} m-auto p-5 rounded-md flex bg-white flex-col`}
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="top-modal flex items-center justify-between p-2">
                <h1 className="font-bold text-lg capitalize">
                    {title || ""}
                </h1>
                <motion.button 
                    className="w-fit exit-modal"
                    onClick={handleClose}
                    initial={{ scale: 0 }}
                    animate={{ rotate: 180, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3
                    }}
                >
                    <RxCross1/>
                </motion.button>
            </div>
            { children }
        </motion.div>
    </Backdrop>
  )
}

export default Modal