
import React from 'react';
import type { Testimonial } from '../types';
import TestimonialCard from './TestimonialCard';

interface ReviewsSectionProps {
  testimonials: Testimonial[];
}

function ReviewsSection({ testimonials }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent [-webkit-background-clip:text] [background-clip:text] text-transparent">What Our Readers Say</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Join thousands of successful professionals who have transformed their lives with these powerful books.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-secondary rounded-lg p-6">
            <div className="text-3xl font-poppins font-bold text-primary mb-2">50,000+</div>
            <div className="text-text-secondary">Books Downloaded</div>
          </div>
          <div className="bg-secondary rounded-lg p-6">
            <div className="text-3xl font-poppins font-bold text-primary mb-2">4.9/5</div>
            <div className="text-text-secondary">Average Rating</div>
          </div>
          <div className="bg-secondary rounded-lg p-6">
            <div className="text-3xl font-poppins font-bold text-primary mb-2">98%</div>
            <div className="text-text-secondary">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
