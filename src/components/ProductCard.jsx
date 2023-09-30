// Import the useStateValue hook from the StateProvider module
import { useStateValue } from "./StateProvider";

// Define the ProductCard component with props (id, title, price, rating, image)
const ProductCard = ({ id, title, price, rating, image }) => {
  // Access the global state and dispatch function using the useStateValue hook
  const [{ basket }, dispatch] = useStateValue();

  // Function to add the product to the shopping basket
  const addToBasket = () => {
    // Dispatch an action to add the item to the data layer (shopping basket)
    console.log(basket);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  // Render the ProductCard component
  return (
 <div className="flex flex-col items-center justify-start m-[5px] p-[5px] w-[100%] max-h[400px]  bg-white z-1[00] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.75)] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1"> 
      <div className="h-[100px] mb-[15px]">
        {/* Display the product title */}
        <p className="lg:text-[25px] font-medium md:text-[20px]">{title}</p>
        {/* Display the product price */}
        <p className="mt-[5px] text-[18px]">
          <small>$</small>
          <strong className="lg:text-[35px] md:text-[25px]">{price}</strong>
        </p>
        {/* Display product rating as stars */}
        <div className="flex lg:text-[25px] md:text-[15px]">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <div className="product_image">
        {/* Display the product image */}
        <img
          className="max-h-[190px] md:w-[200px] "
          src={image}
          alt={title}
        />
        {/* Button to add the product to the shopping basket */}
        <button
          onClick={addToBasket}
          className="rounded bg-[#f0c14b] mt-[10px] ml-[60px] p-[6px] border text-[#111]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
