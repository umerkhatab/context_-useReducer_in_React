import React, {useContext} from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let countValue = useContext(counterContext)
    return(
        <div>
            <h2>This is first child Using counterContext</h2>
    <h4>Counter Value is : {countValue[0]}</h4>
    <button onClick= {()=> {countValue[1](++countValue[0])}}>Increment Context</button>
        </div>

    )
}
export default Child;