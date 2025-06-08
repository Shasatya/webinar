import React, { useState } from "react";
import {
  CheckCircle,
  X,
  TrendingUp,
  Calculator,
  Eye,
  AlertTriangle,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";

const LandingPage = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });

  const handleRegister = () => {
    setShowRegistrationModal(true);
  };

  const validateFormData = () => {
    const { name, email, phone, business } = formData;

    if (!name.trim()) return "Name is required.";
    if (!email.trim()) return "Email is required.";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      return "Email is invalid.";
    if (!phone.trim()) return "Phone number is required.";
    if (!/^\d{10}$/.test(phone)) return "Phone number must be 10 digits.";
    if (!business.trim()) return "Business type is required.";

    return null; // all good
  };

  const handleSubmit = () => {
    const error = validateFormData();

    if (error) {
      alert(error);
      return;
    }

    alert(
      "Registration submitted! You will receive confirmation details soon."
    );
    setShowRegistrationModal(false);
    setFormData({ name: "", email: "", phone: "", business: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">
              Modilipi Accounting
            </div>
            <div className="text-sm bg-red-600 text-white px-4 py-2 rounded-full font-medium">
              Limited Seats
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
              If You Don't Know These
              <span className="text-blue-600"> 10 Business Numbers</span>,
              You're Running Your Business Blind
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Learn the 10 Numbers That Can Save You{" "}
              <strong className="text-gray-900">
                ₹50,000 to ₹5,00,000 per Year
              </strong>{" "}
              — For Just <strong className="text-blue-600">₹1199</strong>
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                Practical
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                Real-Life Examples
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                No Jargon
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                No Upsell
              </span>
            </div>

            <button
              onClick={handleRegister}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-12 inline-flex items-center gap-2"
            >
              Register Now - ₹1199 <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Subheadline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              "Aapka product toh perfect hai, par kya business bhi healthy hai?"
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Pata chalega jab yeh 10 numbers samjhenge — warna lagta rahega
              'Sab Theek Hai', jabki andar se sab leak ho raha hoga.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              What You'll Learn in This 2-Hour Workshop
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Sales Trend Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  How to check if your sales trend is actually growing or
                  silently falling
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Calculator className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Turnover vs Profit
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Why high turnover doesn't mean high profit (and how to fix it)
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Hidden Expenses
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  How to identify and control your biggest hidden expenses
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Inventory Cash Trap
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Why your stock/inventory may be your biggest cash trap
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Customer Profitability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  How to track if your customers are profitable — or draining
                  you
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  Monthly Monitoring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A simple monthly method to monitor all 10 critical business
                  signals
                </p>
              </div>
            </div>

            <div className="text-center bg-blue-50 p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Bonus Benefit
              </h3>
              <p className="text-xl text-gray-700">
                Stop being dependent on your consultants or gut feeling for
                business decisions
              </p>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={handleRegister}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Secure Your Seat Now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Who Should Attend?
            </h2>

            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 mb-12">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">
                If You Are:
              </h3>
              <div className="space-y-6 text-lg">
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    A business owner (retail, manufacturing, service, or
                    trading)
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Tired of wondering{" "}
                    <strong className="text-gray-900">
                      "paise jaa kahan rahe hain?"
                    </strong>
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Confused by numbers, but hungry for control
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Managing ₹10L to ₹10Cr+ turnover but still feel lost with
                    your books
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Want clarity without boring theory or big MBA words
                  </span>
                </div>
              </div>
              <div className="text-center mt-10">
                <span className="text-2xl font-bold text-blue-600">
                  This workshop is for YOU.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              What This Is NOT
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                <h3 className="font-bold text-2xl mb-6 text-gray-900">
                  What We DON'T Do:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <X className="text-red-600" size={20} />
                    <span className="text-gray-700">
                      No upselling after registration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="text-red-600" size={20} />
                    <span className="text-gray-700">
                      No templates or freebies to trap you
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="text-red-600" size={20} />
                    <span className="text-gray-700">
                      No GST/audit/tax class
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                <h3 className="font-bold text-2xl mb-6 text-gray-900">
                  What You GET:
                </h3>
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-green-600 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-xl font-semibold text-gray-800">
                    Just pure, practical business clarity in your language
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <button
                onClick={handleRegister}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Register Now - ₹1199 <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              What Makes This Different?
            </h2>

            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 mb-12">
              <p className="text-2xl mb-6 text-gray-900 font-semibold">
                Because yeh koi "free lead magnet" nahi hai.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Yeh ₹1199 ki investment aapke ₹5,00,000 se bhi jyada ke business
                leaks band karne ke liye hai.
              </p>
            </div>

            <div className="bg-blue-50 p-10 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Delivered by Abhijit Patil
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founder of Modilipi Accounting, who's helped 100s of Indian
                businesses fix their numbers, reduce stress, and regain control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              What Others Say
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-lg mb-6 text-gray-700 italic leading-relaxed">
                  "After this session, I realised my expenses were 30% above
                  ideal. Adjusted next month and saved ₹75,000 monthly!"
                </p>
                <div className="font-semibold text-gray-900">
                  — Sameer, ERP Developer
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-lg mb-6 text-gray-700 italic leading-relaxed">
                  "Finally understood why I was always in cash crunch despite
                  good sales. This is gold for ₹1199."
                </p>
                <div className="font-semibold text-gray-900">
                  — Aashlesh, Web Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-white">
              Stop Guessing. Start Knowing.
            </h2>

            <p className="text-2xl mb-12 font-semibold text-blue-100">
              ₹1199 to fix the leaks, save lakhs, and take control of your
              business.
            </p>

            <button
              onClick={handleRegister}
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-300 shadow-lg hover:shadow-xl mb-8 inline-flex items-center gap-3"
            >
              Register Now - ₹1199 <ArrowRight size={24} />
            </button>

            <div className="space-y-4 text-lg text-blue-100">
              <p>Seats are limited. No replay sales. No upsell.</p>
              <p className="font-semibold text-white">
                You pay once. You learn once. You gain for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Register for Workshop
              </h3>
              <button
                onClick={() => setShowRegistrationModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <input
                  type="text"
                  name="business"
                  placeholder="e.g., Retail, Manufacturing, Service"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Complete Registration - ₹1199 <ArrowRight size={20} />
              </button>

              <p className="text-sm text-gray-500 text-center">
                You will receive workshop details and payment instructions via
                email.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
