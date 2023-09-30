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
      <Header />

      {/* Define routes for the application */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
