// Import necessary React hooks and components for global state management
import { createContext, useContext, useReducer } from "react";

// Create a context for managing global state
// This context will be used to share state information with components.
export const StateContext = createContext();

// Wrap our app and provide the Data layer
// This component serves as a context provider for global state management.
// It encapsulates the state and reducer, making it available to all child components.
export const StateProvider = ({ reducer, initialState, children }) => (
    // Use the createContext and useReducer functions to create a state management context.
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* Render the children components within the context provider */}
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
// This custom hook allows components to access the global state defined in the context.
// It provides a convenient way to access and modify the state.
export const useStateValue = () => useContext(StateContext);
