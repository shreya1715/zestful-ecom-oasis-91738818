
import { Package, Calendar, CreditCard, Truck } from "lucide-react";

const OrderHistory = () => {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "Delivered",
      total: "₹8,499",
      items: [
        { name: "Chanel No. 5 Eau de Parfum", price: "₹7,999", quantity: 1 },
        { name: "Shipping", price: "₹500", quantity: 1 }
      ]
    },
    {
      id: "ORD-2024-002", 
      date: "2024-01-20",
      status: "In Transit",
      total: "₹12,999",
      items: [
        { name: "Dior Sauvage", price: "₹6,499", quantity: 1 },
        { name: "Tom Ford Black Orchid", price: "₹6,500", quantity: 1 }
      ]
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-25", 
      status: "Processing",
      total: "₹5,999",
      items: [
        { name: "Versace Bright Crystal", price: "₹5,999", quantity: 1 }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "In Transit":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>
          
          {orders.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">No Orders Yet</h2>
              <p className="text-gray-500 mb-6">You haven't placed any orders yet. Start shopping to see your orders here!</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Order {order.id}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(order.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <CreditCard className="w-4 h-4 mr-1" />
                          {order.total}
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-3">Items</h4>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-700">{item.name} x {item.quantity}</span>
                          <span className="font-medium">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                    <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                      <Truck className="w-4 h-4 mr-1" />
                      Track Order
                    </button>
                    <div className="text-lg font-semibold">Total: {order.total}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
