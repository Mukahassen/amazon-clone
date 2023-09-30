// Import necessary dependencies and components
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

// Define the SubTotal component
const SubTotal = () => {
    // Access the 'basket' and 'dispatch' function from the global state
    const [{ basket }, dispatch] = useStateValue();

    // Calculate the total price of items in the basket
    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0);

    return (
        <div className='pt-[50px] pl-6'>
            {/* CurrencyFormat component to format and display the subtotal */}
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        {/* Display the subtotal amount */}
                        <p className='text-2xl'>
                            Subtotal (0 items): <strong>{value}</strong>
                        </p>
                        {/* Checkbox option for gift */}
                        <small className="text-2xl px-[10px]">
                            <input className='cursor-pointer' type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Total value derived from the basket
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'} // Prefix for the currency
            />
            {/* Proceed to checkout button */}
            <button className='bg-yellow-300 p-2 rounded mt-[30px] w-[300px] text-[20px]'>Proceed to Checkout</button>
        </div>
    );
}

export default SubTotal;
