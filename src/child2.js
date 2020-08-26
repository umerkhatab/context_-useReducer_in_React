import React, {useReducer} from 'react';
import counterReducer from './CounterReducer.js';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer,10);

    
    return(
        <div>
           <h2>This is child 2 Using Reducer value : {state} </h2>
           <button onClick= {()=> dispatch('INCREMENT')}>
               Increment Reducer
           </button>
        </div>

    )
}
export default Child2   ;