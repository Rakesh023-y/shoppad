import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Details_header from "../component/Details_header";
import { Context} from "../context/Cart_index";
const Product_details = () => {

  const [product_data, setProduct_data] = useState([]);
  const {addToCart}  = useContext(Context);


  const history = useNavigate();

  const params = useParams();
  const id = params.id;
  // console.log(params)

  const handleAddToCart = () => {
    history("/Cart")
  }

  useEffect(() => {
    axios.get("http://localhost:3000/Data.json")
      .then(res => {
        if (res.data) {
          let final_data = res.data.product_data.filter((d, index) => d.id == id)
          // console.log(final_data)
          setProduct_data(final_data)
        }
        // console.log(res.data.product_data)
      })
  }, []);
  // console.log(product_data)
  return (
    <div className="container-fluid main_container">
      <Details_header />
      <h2 className="text-center mt-3"><u>Product Details</u></h2>
      <div className="container-fluid">
        {
          product_data.map((item, index) => {
            return (

              <div className="container d-flex" key={index}>
                <div className="row mt-5">
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card pd_card">
                      <div className="card-body">
                        <img className="pd_image" src={item.primaryImage.jpegImages.lImage} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card card_data ">
                      <div className="card-body card_body_data">
                        <div className="text mt-2"><span className="name mx-2">Name:</span>{item.name}</div>
                        <div className="supplier mt-2"><span className="name mx-2">Supplier:</span>{item.supplierName}</div>
                        <div className="description mt-2"><span className="name mx-2">Details:</span>{item.description}</div>
                        <div ><span className="mrp mt-5"><span className="name mx-2">Price:</span>Rs.{item.listingPrice}</span>
                          <span className="listprice">Rs.{item.mrp}</span>
                          <span className="text-danger mx-3">({item.discount}% OFF)</span></div>
                        <div className="available"><span className="name mx-2">Available:</span>{item.availableQty}</div>
                        <div className="button mt-3">
                          <button className="btn btn-outline-primary mx-3 cart_btn"
                            onClick={()=>addToCart(item)}>Add to Cart</button>
                          <button className="btn btn-warning buy_btn">Buy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Product_details;