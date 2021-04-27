import React from 'react';

function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <p>we want to be seen</p>
      { children }
    </div>
  );
}

export default Wrapper;