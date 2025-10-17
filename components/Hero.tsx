
import React from 'react';
import { DownloadIcon, RatingStarIcon, SSLIcon, SuccessTickIcon } from './Icons';

function Hero() {
  const scrollToBooks = () => {
    document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-start justify-center relative overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+CjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAxMEwwIDAgTCAxMCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkQ3MDAiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-bold mb-6 opacity-0 animate-fade-in [animation-delay:100ms]">
          <span className="bg-gradient-to-r from-primary to-accent [-webkit-background-clip:text] [background-clip:text] text-transparent [text-shadow:0_2px_4px_rgba(255,215,0,0.3)]">Top Books That Built</span><br />
          <span className="text-text-primary">Millionaire Mindsets</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed opacity-0 animate-slide-up [animation-delay:300ms]">
          Discover the transformational books that successful entrepreneurs and high-achievers read to build wealth and winning mindsets. Get instant access to life-changing literature that shaped the world's most successful people.
        </p>
        
        <button onClick={scrollToBooks} className="bg-green-500 hover:bg-green-600 text-black font-poppins font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-250 ease-in-out transform hover:scale-105 animate-cta-glow-green opacity-0 animate-scale-in [animation-delay:500ms] mb-6">
          <DownloadIcon />
          Download Your Favorite Book Now — It's Free!
        </button>
        
        <div className="flex flex-wrap justify-center items-center gap-8 text-text-secondary text-sm opacity-0 animate-fade-in [animation-delay:700ms]">
          <div className="flex items-center">
            <SuccessTickIcon />
            <span>50,000+ Downloads</span>
          </div>
          <div className="flex items-center">
            <RatingStarIcon />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center">
            <SSLIcon />
            <span>SSL Secured</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
