
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is Cash on Delivery (COD)?",
      answer: "COD allows you to pay for your order when it is delivered to your doorstep. You can pay in cash to our delivery partner upon receiving your perfume order."
    },
    {
      question: "What is your return and replacement policy?",
      answer: "We offer a 7-day replacement policy for products. If you are not satisfied with your purchase or received a damaged item, you can request a replacement within 7 days of receiving your order. The product should be in its original condition and packaging."
    },
    {
      question: "How can I pay online?",
      answer: "We accept various online payment methods including credit cards (Visa, MasterCard, American Express), debit cards, UPI payments (PhonePe, Google Pay, Paytm), net banking, and digital wallets for a secure checkout experience."
    },
    {
      question: "What is the quality of your products?",
      answer: "We ensure high-quality, authentic branded perfumes from renowned international and domestic brands. All our products are genuine, properly stored, and come with authenticity guarantees. We source directly from authorized distributors."
    },
    {
      question: "When will my order be dispatched?",
      answer: "Orders are typically dispatched within 3 business days from the date of order confirmation. You will receive a tracking number via SMS and email once your order is shipped."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes, we offer free shipping on orders above ₹5,000. For orders below this amount, standard shipping charges apply based on your location."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery usually takes 5-7 business days for metro cities and 7-10 business days for other locations after dispatch. Express delivery options are also available."
    },
    {
      question: "Are the perfumes authentic?",
      answer: "Yes, all our perfumes are 100% authentic and sourced directly from authorized distributors. We guarantee the authenticity of every product we sell."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Find answers to common questions about our luxury perfume collection, orders, and services.
          </p>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  {openItem === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openItem === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Our customer support team is here to help you with any other questions or concerns.
            </p>
            <button 
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
