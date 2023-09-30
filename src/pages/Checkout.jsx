// Import necessary components and context
import CheckoutProducts from "../components/CheckOutProduct";
import { useStateValue } from "../components/StateProvider";
import SubTotal from "../components/SubTotal"

// Define the Checkout component
const Checkout = () => {
    // Access the global state and dispatch function from the context
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <>
            {/* Amazon banner */}
            <img className="w-full h-[90px]" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg " alt="" />

            {/* Checkout page content */}
            <div className="bg-[#c8c2c2] pt-7 h-[270px] md:block lg:flex">
                {/* Subtotal section */}
                <div className="absolute shadow-md h-[220px] w-[370px] lg:w-[450px] mt-[30px] lg:mt-0 ml-5 bg-[#f3f3f3] lg:mx-[20px]  right-4 top-[150px] lg:top-[180px] lg:pl-[60px]">
                    {/* Render the SubTotal component to display the total price */}
                    <SubTotal />
                </div>

                {/* Shopping cart section */}
                {basket.length ? (
                    <div className="shadow-xl md:w-[520px] p-8 lg:w-[70%] h-[220px] text-[20px] bg-white ml-5">
                        <p className="text-3xl font-semibold">Hello,</p>
                        <p className="text-[35px] font-normal">Your shopping Cart List</p>
                        <hr className="mt-5" />
                        {/* Map through items in the basket and render CheckoutProducts component */}
                        {basket.map((item) => (
                            <CheckoutProducts
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                ) : (
                    // Empty cart message when basket is empty
                    <div className="shadow-xl p-8 md:w-[520px] lg:w-[70%] h-[220px] justify-center items-center text-[20px] bg-white rounded ml-5">
                        <p className="text-[35px] mb-33">Your Amazon Cart is empty.</p>
                        <p className="text-2xl">Please add some products :)</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Checkout
