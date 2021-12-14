
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './ContextAPI/StateProvider';
import Payment from './Components/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Components/Orders';



const promise = loadStripe('pk_test_51K1DHWLhOHYOsVTesrIBCqJLop0wIko6iIPfUQnnGfy65Pv5Jq8YbJFGAN2XBflvCBGC9J8eSa47PVRkVSFb8b5p00oZkNGqjy');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged(authUser =>{
      console.log('The User is >>>>', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      }else{
        dispatch({
          type: "SET_USER",
          user: null, 
        })

      }
    })

  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
            

          <Route path="/checkout" exact>
            <Header />
            <Checkout />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/payment" exact>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
            

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
