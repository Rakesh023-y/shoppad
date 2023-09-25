import React from "react";
import { Context, useContext } from "../context/Cart_index";

const CartItem = (props) => {
  const { product } = props;
  const { increase, decrease, removeItem } = useContext(Context);

  return (
    <div className="contianer-fluid">
      <div className="row d-flex">
        <div className="col-sm-6 col-md-4 col-lg-3 item_card">
          <img className="list-item-image item_image" src={product.primaryImage.jpegImages.lImage} alt={product.name} />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 col_data">
          <div className="row btn_row">
            <button type="button" className="btn-close"  aria-label="Close"
              onClick={() => removeItem(product.id)}></button>
          </div>
          <div className="list-item-info mt-3">
            <span>
              <h3>{product.supplierName}</h3>
              <p>{product.name}</p>
            </span>
            <span style={{ display: 'flex' }}>
              <span>
                <div ><span className="mrp mt-5"><span className="name mx-2">Price:</span>Rs.{product.listingPrice}</span>
                          <span className="listprice">Rs.{product.mrp}</span>
                          <span className="text-danger mx-3">({product.discount}% OFF)</span></div>
              </span>
              {product.count > 1 && (
                <>
                  <span style={{ marginLeft: '1rem' }}>
                    <b>Count: </b>x{product.count}
                  </span>
                  <span style={{ marginLeft: '1rem' }}>
                    <b>Total:</b> ₹ {(product.mrp * product.count).toFixed(2)}
                  </span>
                </>
              )}
            </span>
            <div>
              <button onClick={() => decrease(product)} className="cart-btn">
                {' '}
                -{' '}
              </button>
              <b  className="text m-3"> Quantity</b>
              <button className="cart-btn" onClick={() => increase(product)} >
                {' '}
                +{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default CartItem;

