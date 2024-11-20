import React from 'react';

interface ProductSearchProps {
  onSearch: (query: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      onChange={handleSearch}
      className="w-full p-2 border rounded mb-4"
    />
  );
};

export default ProductSearch;
