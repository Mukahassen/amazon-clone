import { Link, useNavigate } from "react-router-dom"
import { useStateValue } from "./StateProvider"
import CheckoutProducts from "./CheckOutProduct"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import axios from "../components/axios"
const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    const stripe = useStripe()
    const element = useElements()

    const Navigate = useNavigate()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [clientSecret, setClientSecret] = useState(true);

    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer...the stripe to be able to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);

    console.log('the secret is ', clientSecret);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: element.getElement(CardElement),
                },
            })
            .then( ({ paymentIntent }) => {
                try {
                    db.collection('users')
                        .doc(user?.uid)
                        .collection('orders')
                        .doc(paymentIntent.id)
                        .set({
                            basket: basket,
                            amount: paymentIntent.amount,
                            created: paymentIntent.created,
                        });
                    setSucceeded(true);
                    setError(null);
                    setProcessing(false);
                    dispatch({
                        type: 'EMPTY_BASKET',
                    });
                    Navigate("/orders");
                } catch (error) {
                    console.error("Error writing to Firestore:", error);
                    // Handle the error here, e.g., set an error state
                }
            });

    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };
    return (
        <div className="bg-white">
            <div className="payment_container">
                <h1 className="text-center p-[10px] font-[400] bg-[rgb(234, 237, 237)] border-b border-gray-300 text-[26px] ">
                    CheckOut <span className="text-blue-400"> {<Link to={"/CheckOut"}>
                        ( {basket?.length} items)
                    </Link>}</span>
                </h1>

                <div className="flex p-[20px] my-[20px] border-b border-gray-300">
                    <div className="flex-[0.2] text-[27px] md:text-[30px]">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="flex-[0.8] text-[20px] lg:text-[26px]">
                        <p>{user?.email}</p>
                        <p>123 React lane</p>
                        mokadisho
                    </div>
                </div>

                <div className="flex p-[20px] my-[20px] border-b border-gray-300">
                    <div className="flex-[0.2] text-[27px]">
                        <h3>Review items and Delivery</h3>
                    </div>

                    <div className="flex-[0.8]">
                        {basket.map((item) => (
                            <CheckoutProducts
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex p-[20px] my-[20px] border-b border-gray-300">
                    <div className="flex-[0.2] text-[23px]">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="flex-[0.8] h-[160px]">
                        <form onSubmit={handleSubmit}>
                            <CardElement
                                onChange={handleChange} />
                            <div className="text-[35px]">
                                <CurrencyFormat
                                    renderText={(value) => <h3>order Total: {value}</h3>}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    className="cursor-pointer text-[25px] bg-[#f0c14b] w-[60%] h-[50px] border font-bold mt-[10px] border-t-a88734 border-r-9c7e31 border-b-a846a29 border-l-a846a29 text-[#111] rounded-lg"

                                    disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>processing</p> : "Buy Now"}
                                    </span>
                                    {error && <div className="text-[20px] mt-4 text-red-600">{error}</div>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment