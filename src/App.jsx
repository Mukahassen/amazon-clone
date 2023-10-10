// Import necessary CSS and components
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import Login from './pages/Login'

// Import React hooks and context
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider'
import Payment from './components/Payment'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './components/Orders'

const promise = loadStripe(
  "pk_test_51Nxnu9EmxlaDANOM9VeXaxGV2g1VHwSOYC7sR54PbJHdaTHPiBgpGEL1yQ9Heu42vqqPjpyF3BCT4nCWVKrmwVCL00QDpgRQX7");


function App() {
  // Access the global state and dispatch function from the context
  const [{ }, dispatch] = useStateValue();

  // Use the useEffect hook to listen for changes in the user's authentication state
  useEffect(() => {
    // This function is called whenever the authentication state changes
    auth.onAuthStateChanged((authUser) => {
      // Uncomment the next line to log user information for debugging
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // If the user is authenticated, update the global state with the user's information
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // If the user is not authenticated (logged out), set the user in the global state to null
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      {/* Render the Header component */}
      {}
      <Header />

      {/* Define routes for the application */}
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={ <Elements stripe={promise}>
          <Payment/>
        </Elements>}/>
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </>
  )
}

export default App
