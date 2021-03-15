import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const [meal, setMeal] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setMeal({ ...meal, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!meal.toppings.includes(topping)){
      newToppings = [...meal.toppings, topping];
    } else {
      newToppings = meal.toppings.filter(item => item !== topping);
    }
    setMeal({ ...meal, toppings: newToppings });
  }

  return (
    <>
      <Header />

      <Modal showModal={showModal} />

      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} meal={meal} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} meal={meal} />
          </Route>
          <Route path="/order">
            <Order meal={meal} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;