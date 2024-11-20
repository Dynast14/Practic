import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="border-4 border-t-blue-500 border-transparent rounded-full w-10 h-10 animate-spin"
      ></div>
    </div>
  );
};

export default Spinner;
