import React from 'react';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className='ps-2'>
      <ol className="breadcrumb fw-light">
        <li className="breadcrumb-item">Cart</li>
        <li className="breadcrumb-item active" aria-current="page">Information</li>
        <li className="breadcrumb-item" aria-current="page">Shipping</li>
        <li className="breadcrumb-item" aria-current="page">Payment</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;