'use client'

import { motion } from 'framer-motion';

const HeaderText = () => {
    const text = 'INDULGE IN ELEGANCE: Free Shipping on All Orders!'
  return (
    <motion.div
        animate={{ x: [200, -200] }} // Adjust -1000 to the actual width of the text
        transition={{
        x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20, // Duration of the full animation loop
            ease: 'linear',
        },
        }}
    >
        {text}
    </motion.div>
  )
}

export default HeaderText
