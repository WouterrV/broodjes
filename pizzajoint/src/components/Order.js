import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    } 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    }
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = ({ meal, setShowModal }) => {
  // useEffect lifecycle hook, array with only setShowModal as dep 
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <h2>Bedankt voor je bestelling!</h2>
        <motion.p variants={childVariants} >Je hebt een {meal.base} besteld {meal.toppings.length > 0? "met:" : "zonder toppings."}</motion.p>
        <motion.div variants={childVariants}>
          {meal.toppings.map(topping => <div key={topping} >{topping}</div>)}
        </motion.div>    
    </motion.div>
  )
}

export default Order;