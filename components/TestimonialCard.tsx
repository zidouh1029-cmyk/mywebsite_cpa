
import React from 'react';
import type { Testimonial } from '../types';
import { RatingStarIcon } from './Icons';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: rating }, (_, i) => (
        <RatingStarIcon key={i} className="w-5 h-5 text-primary" />
      ))}
    </div>
  );
};

// FIX: Changed component definition to React.FC to correctly type component props and allow for React's `key` prop without causing a TypeScript error.
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-secondary rounded-xl p-6 border border-secondary-700 shadow-testimonial animate-on-scroll opacity-0">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.imageUrl}
          alt={`${testimonial.name} - ${testimonial.title}`}
          className="w-12 h-12 rounded-full object-cover mr-4" 
          loading="lazy" 
        />
        <div>
          <h4 className="font-poppins font-semibold text-text-primary">{testimonial.name}</h4>
          <p className="text-text-secondary text-sm">{testimonial.title}</p>
        </div>
      </div>
      <div className="mb-4">
        <RatingStars rating={testimonial.rating} />
      </div>
      <p className="text-text-secondary">"{testimonial.quote}"</p>
    </div>
  );
}

export default TestimonialCard;