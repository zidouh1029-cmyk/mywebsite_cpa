

export interface Book {
  title: string;
  imageUrl: string;
  downloadUrl: string;
  locker?: {
    variableName: string;
    variableValue: Record<string, any>;
    scriptUrl: string;
    functionName: string;
  };
}

export interface BookCategory {
  title: string;
  emoji: string;
  books: Book[];
}

export interface Testimonial {
  name: string;
  title: string;
  imageUrl: string;
  quote: string;
  rating: number; // 1-5
}