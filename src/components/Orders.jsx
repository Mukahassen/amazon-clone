import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{  user }] = useStateValue();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        if (user) {
            db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot((snapshot) =>
                    setOrders(
                        snapshot.docs.map((doc) => {
                            console.log("doc", doc);
                            return {
                                id: doc.id,
                                data: doc.data(),
                            }
                        })
                    )
                );
        } else {
            setOrders([]);
        }
    }, [user]);

    console.log("orders", orders);
    return (
        <div className="px-[20px] py-[80px]">
            <h1 className='mx-[30px] mb-4 text-2xl'>Your Orders</h1>
            <div className="orders__order">
                {orders?.map((order) => (
                    <Order order={order} key={order.id} />
                ))}
            </div>
        </div>
    );

}

export default Orders;
