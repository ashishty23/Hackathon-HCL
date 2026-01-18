import React from 'react'
import { ShoppingCart, User, Shield, ChevronRight, LogOut, Zap, Sparkles, TrendingUp, Lock, Clock } from 'lucide-react';
// import Navbar from './Navbar.jsx';

const Home = () => {
  return  (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-100">
      
      {/* Navbar */}
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full border-2 border-cyan-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
              <span className="text-sm font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>New: Lightning Fast Delivery</span>
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              <span className="text-gray-800">
                Fresh Pizza, Cold Drinks & Bread
              </span>
              <br/>
              <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
                Delivered Hot
              </span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Experience the perfect blend of <span className="text-cyan-600 font-bold">technology</span> and <span className="text-teal-600 font-bold">taste</span>. 
              Order delicious pizzas, cold drinks and breads with real-time tracking.
            </p>

            <div className="flex space-x-4 pt-4">
              <a href="/menu" className="group relative px-8 py-4 rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 blur-xl opacity-50"></div>
                <span className="relative text-white font-bold text-lg flex items-center space-x-2">
                  <span>Explore Menu</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </a>

              <a href="/about" className="group px-8 py-4 rounded-2xl bg-white border-2 border-cyan-300 hover:border-cyan-400 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="text-cyan-700 font-bold text-lg flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Learn More</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
                alt="Pizza"
                className="rounded-3xl shadow-2xl w-full border-4 border-white"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-400 to-orange-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl animate-bounce">
                🔥 Hot Deal
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-400 to-teal-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl">
                ⚡ Fast Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">Built for the HCL Hackathon with cutting-edge tech</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="group bg-white rounded-3xl p-8 border-2 border-teal-200 hover:border-teal-400 transition-all hover:scale-105 hover:shadow-2xl shadow-lg">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-orange-400 to-rose-400 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <span className="text-4xl">🔥</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Freshly Baked</h3>
              <p className="text-gray-600 leading-relaxed">
                Made fresh with quality ingredients in our state-of-the-art kitchen.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:scale-105 hover:shadow-2xl shadow-lg">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Fast Orders</h3>
              <p className="text-gray-600 leading-relaxed">
                Smooth ordering with real-time inventory and lightning-fast checkout.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 border-2 border-sky-200 hover:border-sky-400 transition-all hover:scale-105 hover:shadow-2xl shadow-lg">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                  <Lock className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                OTP verification & secure APIs to protect your data and transactions.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Feedback Section */}
<section className="py-24 px-6 bg-gradient-to-br from-cyan-50 via-sky-50 to-teal-100">
  <div className="max-w-3xl mx-auto">
    <div className="bg-white rounded-3xl shadow-2xl border-2 border-cyan-200 p-10 md:p-14">

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-black mb-3">
          <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
            Get Feedback
          </span>
        </h2>
        <p className="text-gray-600">
          Share your thoughts to help us improve 🍕🥤
        </p>
      </div>

      {/* Textarea */}
      <textarea
        rows="5"
        placeholder="Write your feedback here..."
        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-cyan-400 focus:outline-none transition-all resize-none text-gray-700"
      ></textarea>

      {/* Button */}
      <div className="text-center pt-6">
        <button
          className="relative px-10 py-4 rounded-2xl font-bold text-white text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500"></span>
          <span className="relative">Send Feedback</span>
        </button>
      </div>

    </div>
  </div>
</section>


      {/* Footer */}
      {/* <footer className="py-12 px-6 bg-gradient-to-r from-teal-50 to-cyan-50 border-t-2 border-cyan-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-2xl font-black bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              PizzaHub
            </span>
          </div>
          <p className="text-gray-600 font-medium">
            © 2025 PizzaHub | Project By Darsh
                     </p>
        </div>
      </footer> */}

      {/* <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style> */}
    </div>
  );
}

export default Home