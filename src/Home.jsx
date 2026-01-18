import React from 'react'
import { ShoppingCart, User, Shield, ChevronRight, LogOut, Zap, Sparkles, TrendingUp, Lock, Clock } from 'lucide-react';
// import Navbar from './Navbar.jsx';

const Home = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                New: Lightning Fast Delivery
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Fresh Pizza, Cold Drinks & Bread
              <br />
              <span className="text-primary">Delivered Hot</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Experience the perfect blend of <span className="font-semibold text-primary">technology</span> and taste.
              Order pizzas, drinks and breads with real-time tracking.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="/menu"
                className="px-7 py-3 rounded-full bg-primary text-white font-medium shadow-sm hover:opacity-90 transition"
              >
                Explore Menu
              </a>

              <a
                href="/about"
                className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-primary hover:text-primary transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"
              alt="Pizza"
              className="w-full max-w-md rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
            <p className="text-gray-600 mt-3">
              Built for the HCL Hackathon with clean, reliable tech
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm
                hover:bg-primary transition-all duration-300 text-gray-600">

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6
                  group-hover:bg-white/20 transition-colors">
                <span className="text-2xl group-hover:text-white transition-colors">🔥</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2
                 group-hover:text-white transition-colors">
                Freshly Baked
              </h3>

              <p className="group-hover:text-white transition-colors">
                Made fresh with quality ingredients in our kitchen.
              </p>
            </div>


            <div className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm 
                text-gray-700 hover:bg-primary hover:text-white 
                transition-all duration-300">

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6
                  group-hover:bg-white/20 transition-colors">
                <Clock className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white transition-colors">
                Fast Orders
              </h3>

              <p className="group-hover:text-white transition-colors">
                Smooth ordering with quick checkout and tracking.
              </p>
            </div>



            <div className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm
                hover:bg-primary transition-all duration-300 text-gray-600">

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6
                  group-hover:bg-white/20 transition-colors">
                <Lock className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2
                 group-hover:text-white transition-colors">
                Secure
              </h3>

              <p className="group-hover:text-white transition-colors">
                OTP verification & secure APIs for safe transactions.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Feedback Section */}
      {/* <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10">

            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Get <span className="text-primary">Feedback</span>
              </h2>
              <p className="text-gray-600">
                Share your thoughts to help us improve
              </p>
            </div>

            <textarea
              rows="5"
              placeholder="Write your feedback here..."
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-primary focus:outline-none resize-none"
            />

            <div className="text-center pt-6">
              <button className="px-9 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition">
                Send Feedback
              </button>
            </div>

          </div>
        </div>
      </section> */}

    </div>

  );
}

export default Home