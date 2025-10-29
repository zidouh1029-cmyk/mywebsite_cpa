import React from 'react';
import type { Book } from '../types';
import { DownloadIconSimple } from './Icons';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const handleLockerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const locker = book.locker;
    if (!locker) {
      console.error('Locker configuration is missing for this book.');
      alert('Download configuration is not available. Please try again later.');
      return;
    }

    // Clean up previous locker scripts to prevent conflicts
    document.getElementById('locker-variable-script')?.remove();
    document.getElementById('locker-main-script')?.remove();

    // 1. Create and append the variable definition script
    const variableScript = document.createElement('script');
    variableScript.id = 'locker-variable-script';
    variableScript.type = 'text/javascript';
    
    variableScript.innerHTML = `var ${locker.variableName} = ${JSON.stringify(locker.variableValue)};`;
    document.head.appendChild(variableScript);

    // 2. Create and append the main locker script
    const mainScript = document.createElement('script');
    mainScript.id = 'locker-main-script';
    mainScript.src = locker.scriptUrl;
    mainScript.async = true;
    
    // 3. Set up the onload callback to execute the locker function
    mainScript.onload = () => {
      if (typeof (window as any)[locker.functionName] === 'function') {
        (window as any)[locker.functionName]();
      } else {
        console.error(`Locker function "${locker.functionName}" not found after loading script: ${locker.scriptUrl}`);
        alert('Download script could not be initialized. Please try again later.');
      }
    };
    
    // 4. Handle script loading errors
    mainScript.onerror = () => {
      console.error(`Failed to load locker script: ${locker.scriptUrl}`);
      alert('Failed to load the download script. Please check your connection and try again.');
    };
    
    document.head.appendChild(mainScript);
  };

  const commonButtonClasses = "w-full bg-green-500 hover:bg-green-600 text-black font-poppins font-semibold px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-lg transition-all duration-200 inline-flex items-center justify-center text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";

  const buttonContent = (
    <>
      <DownloadIconSimple />
      <span className="ml-2 text-left leading-tight">
        <span>Download</span>
        <br />
        <span className="font-medium">Free</span>
      </span>
    </>
  );

  return (
    <div className="group bg-secondary/50 rounded-xl p-3 md:p-4 border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-book-card-hover transform hover:-translate-y-2 animate-on-scroll opacity-0">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        <img 
          src={book.imageUrl}
          alt={`${book.title} book cover`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h4 className="text-base md:text-lg font-poppins font-semibold mb-3 bg-gradient-to-r from-primary to-accent [-webkit-background-clip:text] [background-clip:text] text-transparent text-center line-clamp-2 h-12 md:h-14 flex items-center justify-center">
        {book.title}
      </h4>
      {book.locker ? (
        <button 
          onClick={handleLockerClick}
          className={commonButtonClasses}
        >
          {buttonContent}
        </button>
      ) : (
        <a 
          href={book.downloadUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={commonButtonClasses}
        >
          {buttonContent}
        </a>
      )}
    </div>
  );
}

export default BookCard;