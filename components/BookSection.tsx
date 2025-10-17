
import React from 'react';
import type { Book } from '../types';
import BookCard from './BookCard';

interface BookSectionProps {
  title: string;
  emoji: string;
  books: Book[];
}

function BookSection({ title, emoji, books }: BookSectionProps) {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-center mb-12">
        <span className="text-3xl font-bold mr-2">{emoji}</span>
        <span className="bg-gradient-to-r from-primary to-accent [-webkit-background-clip:text] [background-clip:text] text-transparent">{title}</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookSection;
