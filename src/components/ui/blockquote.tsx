"use client"

interface BlockQuoteProps {
  quoteText: string;
  quoter: string;
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ quoteText, quoter }) => {
  return (
    <blockquote className="p-4 my-4 border-l-4 border-gray-500 bg-gray-800">
      <p className="text-xl italic font-medium leading-relaxed">{quoteText}</p>
      <footer>
        <cite className="text-sm text-gray-400">{quoter}</cite>
      </footer>
    </blockquote>
  );
}

export { BlockQuote };