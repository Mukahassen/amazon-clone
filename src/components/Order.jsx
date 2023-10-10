import moment from "moment";
import CheckoutProducts from "./CheckOutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
    return (
        <div className="p-[40px] mx-[20px] my-[20px] relative bg-white border border-gray-300">
            <h2 className="text-2xl"> order</h2>
            <p className="text-2xl">{moment.unix(order.data.created).format("MMM Do YYYY, h:ma")}</p>
            <p className="absolute top-[40px] right-[20px] text-[20px]">
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map((item) => (
                <CheckoutProducts
                    key={item.id} // Add a unique key prop here
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="font-semibold text-center text-3xl mt-4">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>

    )
}

export default Order