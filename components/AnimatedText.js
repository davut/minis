import { motion } from "framer-motion";

export const AnimatedText = ({ text, direction }) => {
  const textVariants = {
    initial: {
      opacity: 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
    },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <motion.span variants={textVariants} initial="initial" animate="animate">
      {text}
    </motion.span>
  );
};
