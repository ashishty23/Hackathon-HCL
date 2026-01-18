import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-sky-100">

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-gray-800">About</span>{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-sky-500 bg-clip-text text-transparent">
              RetailPortal
            </span>
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            RetailPortal is a modern food ordering platform where{" "}
            <span className="font-bold text-orange-600">fresh pizzas</span>,{" "}
            <span className="font-bold text-amber-600">refreshing beverages</span>{" "}
            and <span className="font-bold text-sky-600">cold drinks</span> come
            together with smart technology to deliver happiness at your door.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-orange-200 hover:shadow-2xl transition-all">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To simplify food ordering by combining{" "}
              <span className="font-semibold">speed</span>,{" "}
              <span className="font-semibold">quality</span>, and{" "}
              <span className="font-semibold">security</span>. We aim to deliver
              freshly prepared pizzas and chilled beverages with unmatched
              reliability.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-sky-200 hover:shadow-2xl transition-all">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the most loved retail food platform by delivering
              delightful experiences powered by real-time systems, smart
              logistics, and customer-first design.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-sky-600 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Crafted for taste lovers & tech enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pizza */}
            <div className="group bg-white rounded-3xl p-8 border-2 border-orange-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-5xl mb-6">🍕</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                Fresh Pizzas
              </h3>
              <p className="text-gray-600">
                Hand-crafted pizzas baked fresh with premium ingredients and
                customizable toppings.
              </p>
            </div>

            {/* Beverages */}
            <div className="group bg-white rounded-3xl p-8 border-2 border-amber-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-5xl mb-6">🥤</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                Beverages
              </h3>
              <p className="text-gray-600">
                A wide range of hot and cold beverages to perfectly complement
                your meals.
              </p>
            </div>

            {/* Cold Drinks */}
            <div className="group bg-white rounded-3xl p-8 border-2 border-sky-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-5xl mb-6">❄️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                Cold Drinks
              </h3>
              <p className="text-gray-600">
                Ice-cold soft drinks and refreshers delivered chilled and ready
                to enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Built With Modern Technology
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            RetailPortal is powered by secure APIs, real-time order tracking,
            OTP-based authentication, and scalable architecture — designed for
            speed, reliability, and security.
          </p>
        </div>
      </section>
    </div>
  )
}
export default About