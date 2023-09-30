// Define the initial state for the application's global state
export const initialState = {
    basket: [], // Initialize an empty basket array to hold items
    user: null, // Initialize the user to null as no user is logged in initially
};

// Define a function to calculate the total value of items in the basket
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

// Define the reducer function responsible for managing state changes
const reducer = (state, action) => {
    // Uncomment the next line to log the action for debugging purposes
    // console.log(action);

    switch (action.type) {
        case "ADD_TO_BASKET":
            // Add an item to the basket by creating a new state with the item added
            return {
                ...state, // Copy the current state
                basket: [...state.basket, action.item], // Add the new item to the basket
            };
        case "REMOVE_FROM_BASKET":
            // Find the index of the item to be removed in the basket
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket]; // Create a copy of the basket

            if (index >= 0) {
                // If the item is found, remove it from the basket
                newBasket.splice(index, 1);
            } else {
                // Log a warning if the item is not in the basket
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket!`
                );
            }

            // Return a new state with the updated basket
            return {
                ...state, // Copy the current state
                basket: newBasket, // Set the basket to the updated basket
            };
        case "SET_USER":
            // Set the user in the global state
            return {
                ...state, // Copy the current state
                user: action.user, // Update the user with the provided user data
            };
        default:
            // If the action type is not recognized, return the current state
            return state;
    }
};

// Export the reducer function for use in the application
export default reducer;
