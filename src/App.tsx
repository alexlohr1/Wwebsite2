const reviews = [
  {
    quote: "Best Pokémon selection in Miami. Always something new.",
    name: "Alex M.",
  },
  {
    quote: "Feels like a real collector community, not just a store.",
    name: "Jordan T.",
  },
  {
    quote: "Fair pricing and honest staff every time I visit.",
    name: "Chris R.",
  },
  {
    quote: "Insane sports card selection and amazing slabs.",
    name: "Daniel K.",
  },
  {
    quote: "The staff actually knows the hobby and cares.",
    name: "Sophia L.",
  },
  {
    quote: "Best Pokémon selection in Miami. Always something new.",
    name: "Alex M.",
  },
  {
    quote: "Feels like a real collector community, not just a store.",
    name: "Jordan T.",
  },
  {
    quote: "Fair pricing and honest staff every time I visit.",
    name: "Chris R.",
  },
  {
    quote: "Insane sports card selection and amazing slabs.",
    name: "Daniel K.",
  },
  {
    quote: "The staff actually knows the hobby and cares.",
    name: "Sophia L.",
  },
  {
    quote: "Best Pokémon selection in Miami. Always something new.",
    name: "Alex M.",
  },
  {
    quote: "Feels like a real collector community, not just a store.",
    name: "Jordan T.",
  },
  {
    quote: "Fair pricing and honest staff every time I visit.",
    name: "Chris R.",
  },
  {
    quote: "Insane sports card selection and amazing slabs.",
    name: "Daniel K.",
  },
  {
    quote: "The staff actually knows the hobby and cares.",
    name: "Sophia L.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <img
              src="/Logo.png"
              alt="Elite Cards and Collects"
              className="h-12 w-auto object-contain"
            />

            <div className="leading-tight">
              <p className="font-black text-lg text-[#004c97]">
                Elite Cards
              </p>

              <p className="text-xs tracking-[0.3em] text-gray-500">
                AND COLLECTS
              </p>
            </div>
          </div>


    {/* LINKS */}
    <div className="hidden md:flex gap-6 text-sm font-medium">

      <a href="#home" className="hover:text-[#004c97] transition">
        Home
      </a>

      <a href="#about" className="hover:text-[#004c97] transition">
        About Us
      </a>

      <a href="#products" className="hover:text-[#004c97] transition">
        Products
      </a>

      <a href="#instagram" className="hover:text-[#004c97] transition">
        Community
      </a>

      <a href="#reviews" className="hover:text-[#004c97] transition">
        Reviews
      </a>

      <a href="#visit" className="hover:text-[#004c97] transition">
        Visit Us
      </a>

      <a href="#contact" className="hover:text-[#004c97] transition">
        Contact
      </a>

    </div>
    </div>
    </nav>


      {/* HERO */}
<section
  id="home"
  className="relative min-h-screen flex items-center px-6 overflow-hidden"
>

  {/* BACKGROUND */}
  <div className="absolute inset-0">
    <img
      src="/Back.png"
      alt="Background"
      className="w-full h-full object-cover"
    />
    {/* BACKGROUND */}
<div className="absolute inset-0">
  <img
    src="/Back.png"
    alt="Background"
    className="w-full h-full object-cover scale-105 blur-sm"
  />

  {/* DARK OVERLAY FOR READABILITY */}
  <div className="absolute inset-0 bg-black/60" />
</div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-7xl mx-auto">

    <div className="grid md:grid-cols-2 items-center gap-16">

      {/* LEFT: LOGO */}
      <div className="flex justify-center md:justify-end">
        <img
          src="/Logo.png"
          alt="Elite Cards and Collects"
          className="w-[320px] md:w-[420px] object-contain"
        />
      </div>

      {/* RIGHT: TEXT */}
      <div className="flex flex-col text-left">

        <p className="uppercase tracking-[0.4em] text-sm text-[#ffc801] font-semibold mb-4">
          Miami's Premier Trading Card Destination
        </p>

        <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
          Built For Collectors
          <span className="block text-[#ffc801]">
            Powered By Community
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-xl leading-relaxed">
          Pokémon, NBA, NFL, MLB, sealed product, slabs, singles,
          and Miami’s fastest growing collector hub.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap">

          <a href="#visit">
            <button className="bg-[#004c97] hover:opacity-90 transition text-white px-8 py-4 rounded-2xl font-semibold shadow-lg">
              Visit Store
            </button>
          </a>

          <a href="#products">
            <button className="bg-white hover:bg-gray-100 transition text-black px-8 py-4 rounded-2xl font-semibold shadow-lg">
              View Collection
            </button>
          </a>

        </div>

      </div>

    </div>
  </div>

</section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[#004c97] font-semibold mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Built For Collectors.
              <span className="block text-[#004c97]">
                Powered By Community.
              </span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Elite Cards and Collects is a Miami-based hobby destination
              built around real collectors and real community.
            </p>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              From Pokémon to premium sports cards and sealed product,
              we focus on fair pricing, authenticity, and creating
              an atmosphere people actually want to come back to.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute inset-0 bg-[#004c97]/10 rounded-[2rem] rotate-3" />

            <div className="relative bg-white border border-gray-200 rounded-[2rem] p-10 shadow-2xl">

              <div className="space-y-8">

                <div>
                  <h3 className="text-xl font-bold text-[#004c97] mb-2">
                    Real Community
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Built around collectors instead of just transactions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#ffc801] mb-2">
                    Transparent Pricing
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Fair market value without inflated nonsense.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Constant Inventory
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    New slabs, sealed product, and singles arriving daily.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-28 px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">
              What We Carry
            </h2>

            <p className="text-[#ffc801] text-lg">
              Everything collectors are hunting for
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">

              <img
                src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=1974&auto=format&fit=crop"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-3">
                  Pokémon
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Booster boxes, ETBs, graded cards, modern hits,
                  vintage singles, and collector favorites.
                </p>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">

              <img
                src="/sports.jpg"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-3">
                  Sports Cards
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  NBA, NFL, MLB rookies, slabs, autos, and premium
                  sports inventory.
                </p>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">

              <img
                src="/seal.png"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-3">
                  Sealed Product
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Restocks, limited drops, exclusive inventory,
                  and hard-to-find collector boxes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section
        id="instagram"
        className="py-28 bg-[#EDEDED] overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-6 mb-14 text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#ffc801] font-semibold mb-4">
            Community
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Latest Drops & Pulls
          </h2>

          <p className="text-gray-400 text-lg">
            Follow the newest inventory, collector moments,
            and live hits.
          </p>
        </div>

        <div className="overflow-hidden">

          <div className="flex gap-6 w-max animate-instagram px-6">

            <iframe
              src="https://www.instagram.com/p/DV8_M9VPDgT/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXr1lpxET5J/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXmrb7ukUN3/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXkDYPyEek7/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            {/* DUPLICATES */}
            <iframe
              src="https://www.instagram.com/p/DXhdrEPBR7O/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXe8T1JEfZP/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXPzcJ2EUos/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DV8_M9VPDgT/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXr1lpxET5J/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXmrb7ukUN3/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXkDYPyEek7/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            {/* DUPLICATES */}
            <iframe
              src="https://www.instagram.com/p/DXhdrEPBR7O/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXe8T1JEfZP/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXPzcJ2EUos/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DV8_M9VPDgT/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXr1lpxET5J/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXmrb7ukUN3/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXkDYPyEek7/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            {/* DUPLICATES */}
            <iframe
              src="https://www.instagram.com/p/DXhdrEPBR7O/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXe8T1JEfZP/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

            <iframe
              src="https://www.instagram.com/p/DXPzcJ2EUos/embed"
              className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white"
              loading="lazy"
            />

          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="py-28 bg-gray-50 overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-6 mb-14 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Collector Reviews
          </h2>

          <p className="text-gray-600 text-lg">
            Trusted by Miami’s hobby community.
          </p>
        </div>

        <div className="overflow-hidden">

          <div className="flex gap-6 w-max animate-reviews px-6">

            {reviews.concat(reviews).map((review, index) => (
              <div
                key={index}
                className="min-w-[350px] bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm"
              >

                <div className="text-[#ffc801] text-xl mb-4">
                  ★★★★★
                </div>

                <p className="text-gray-700 italic leading-relaxed text-lg">
                  “{review.quote}”
                </p>

                <div className="mt-6 font-semibold text-[#004c97]">
                  — {review.name}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      
    {/* VISIT */}
    <section
      id="visit"
      className="py-28 px-6 bg-white"
    >

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Visit The Store
        </h2>

        <p className="text-lg text-gray-600 mb-12">
          7175 SW 8th St #218, Miami, FL 33144
        </p>

        <div className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-200 mb-12">

          <iframe
            className="w-full h-[420px]"
            loading="lazy"
            src="https://www.google.com/maps?q=7175+SW+8th+St+Miami+FL+33144&output=embed"
          />

        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">

            <p className="font-bold mb-2">
              Hours
            </p>

            <p className="text-gray-600">
              Mon–Sat: 11AM – 7PM
            </p>

            <p className="text-gray-600">
              Sun: 12PM – 6PM
            </p>

          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">

            <p className="font-bold mb-2">
              Phone
            </p>

            <p className="text-gray-600">
              +1 (786) 238-7114
            </p>

          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">

            <p className="font-bold mb-2">
              Community
            </p>

            <p className="text-gray-600">
              Trades • Drops • Events
            </p>

          </div>

        </div>
      </div>
    </section>

    {/* CONTACT */}
    <section
      id="contact"
      className="py-28 px-6 bg-gray-50"
    >

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[0.3em] text-sm text-[#004c97] font-semibold mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-600">
            Questions about inventory, trades, sealed product,
            or upcoming drops? Send us a message.
          </p>

        </div>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#004c97]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-[#004c97]"
          />

          <textarea
            placeholder="Message"
            className="w-full border border-gray-300 rounded-2xl p-4 h-40 outline-none focus:border-[#004c97]"
          />

          <button
            type="submit"
            className="w-full bg-[#004c97] hover:opacity-90 transition text-white py-4 rounded-2xl font-semibold shadow-lg"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>


      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">

        <p>
          © {new Date().getFullYear()} Elite Cards and Collects • Miami, Florida
        </p>

      </footer>
    </div>
  );
}
