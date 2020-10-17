import React from 'react';
import { motion } from 'framer-motion';

import Loader from './Loader';

const Cards = ({jokes, isLoading}) => {
  return (
    <div className="cards">
      {
        jokes &&
        jokes.map((joke, i) => (
            <motion.div 
              className="card" key={i}
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{ delay: (1 + i) / 4 }}
            >
                {joke.setup && <p><strong>Question: </strong> {joke.setup}</p>}
                {joke.delivery && <p><strong>Ans: </strong> {joke.delivery}</p>}
                {joke.joke && <p>{joke.joke}</p>}

                <img src={joke.joke ? './images/lightbulb.svg' : './images/question.svg'}  alt=""/>
            </motion.div> 
        ))
      }

      {
        isLoading &&
        <Loader />
      }
    </div>
  )
}

export default Cards;