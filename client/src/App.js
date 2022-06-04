import React, {useState} from 'react';
import './App.css'
import StripeCheckout from 'react-stripe-checkout'



function App() {

    const[item,setItem] = useState({
        
    })
    return(
        <header>
        <div>
            <p>
                filler for now
            </p>
            
        </div>
        <StripeCheckout/>
        </header>
    )
}

export default App;