import React from 'react';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Cart</a></li>
        <li className="breadcrumb-item active" aria-current="page">Information</li>
        <li className="breadcrumb-item" aria-current="page">Shipping</li>
        <li className="breadcrumb-item" aria-current="page">Payment</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;