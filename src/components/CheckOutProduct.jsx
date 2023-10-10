// Import necessary dependencies
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "./Stateprovider";

// Define the CheckoutProducts component
function CheckoutProducts({ id, image, title, price, rating, hideButton }) {
    // Access the global state and dispatch function from the context
    const [{ basket }, dispatch] = useStateValue();

    // Function to remove an item from the basket
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="flex mt-[120px]">
            {/* Product image */}
            <img className="object-contain w-[380px] h-[180px] px-[10px] " src={image} />

            {/* Product details */}
            <div className="pl-[20px]">
                {/* Product title */}
                <p className="text-[20px] lg:text-[40px] font-semibold">{title}</p>

                {/* Product price */}
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong className="text-[25px] lg:text-[40px]">{price}</strong>
                </p>

                {/* Product rating */}
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            // Display rating stars using GradeIcon
                            <GradeIcon className="text-[#f0c14b]" key={i} />
                        ))}
                </div>

                {/* Remove from Basket button */}
            
                    {!hideButton && (
                        <button className="bg-[#f0c14b] p-2 rounded mt-4 md:w-[200px]" onClick={removeFromBasket}>Remove from Basket</button>
                    )}{""}
            </div>
        </div>
    );
}

export default CheckoutProducts;


