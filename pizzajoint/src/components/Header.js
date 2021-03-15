import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img id="frikandel-logo" src="hotdog.png" alt="hotdog logo, supposed to be a frikandelbroodje" />
        
      </div>
      <motion.div className="title"
        initial={{ y: -250}}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <h1>Broodjeszaak Bommel</h1>
      </motion.div>
    </header>
  )
}

export default Header;