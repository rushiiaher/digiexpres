import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const pageVariants: Variants = {
    initial: {
        scaleY: 0.002,
        scaleX: 0.2,
        opacity: 0,
    },
    animate: {
        scaleY: [0.002, 0.002, 1],
        scaleX: [0.2, 1, 1],
        opacity: [0, 1, 1],
        transition: {
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 0.4, 1],
        }
    },
    exit: {
        scaleY: [1, 0.002, 0.002, 0.002],
        scaleX: [1, 1, 0.2, 0.2],
        opacity: [1, 1, 1, 0],
        transition: {
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 0.4, 0.8, 1],
        }
    }
};

const contentVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { delay: 0.6, duration: 0.2 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.1 }
    }
};

export default function PageTransition({ children, bgColor = "#0b1f3a" }: { children: ReactNode; bgColor?: string }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ backgroundColor: bgColor, transformOrigin: "top center" }}
            className="w-full flex-col flex flex-grow overflow-hidden"
        >
            <motion.div variants={contentVariants} className="w-full flex-grow flex flex-col bg-white dark:bg-gray-900">
                {children}
            </motion.div>
        </motion.div>
    );
}
