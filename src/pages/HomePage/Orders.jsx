import { useState } from "react";
import { useCart } from "../../hook/useCart";

const Orders = () => {
  const { orders } = useCart();
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Order History
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders placed yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full table-zebra">
            <thead className="bg-gray-100">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total Items</th>
                <th>Total Amount</th>
                <th>Order Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.fullName}</td>
                  <td>{order.items.length}</td>
                  <td>
                    $
                    {order.items
                      .reduce((acc, item) => acc + item.price, 0)
                      .toFixed(2)}
                  </td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => setSelectedOrder(order)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for viewing full order */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded max-w-xl w-full relative">
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setSelectedOrder(null)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">
              Order #{selectedOrder.id}
            </h2>
            <p>
              <strong>Name:</strong> {selectedOrder.fullName}
            </p>
            <p>
              <strong>Phone:</strong> {selectedOrder.phone}
            </p>
            <p>
              <strong>Address:</strong> {selectedOrder.address}
            </p>
            <p className="mt-3 font-bold">Items:</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              {selectedOrder.items.map((item, idx) => (
                <li key={idx}>
                  {item.title} - ${item.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
