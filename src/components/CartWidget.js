import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget({ itemCount }) {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      {itemCount > 0 && (
        <span className="badge badge-pill badge-danger">{itemCount}</span>
      )}
    </div>
  );
}

export default CartWidget;
