import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { useNavigate, useParams } from "react-router";
import Bottom_header from "../component/Bottom_header";
import Top_header from "../component/Top_header";
import axios from "axios";

const Product = () => {
    const [data, setData] = useState([]);
    const [product_data, setProduct_data] = useState([])
    const [selected_data, setSelected_data] = useState();

   
    useEffect(()=>{
      axios.get("./Data.json")
      .then(res=>{
        if(res.data){
            setProduct_data(res.data.product_data)
        }
        // console.log(res.data)
      })
      
    },[]);

    const history = useNavigate("");
    useEffect(()=>{
        setData(product_data)
        if(selected_data){
            setSelected_data(product_data)
        }
    },[])

    const handleImage = (product_data) => {
        // console.log(product_data)
        setSelected_data(product_data)
        history("/Product_details/"+product_data.id)
    }
    // console.log(product_data);
    // console.log(selected_data)

    return (
        <div className="container-fluid">
            <div className="d-none d-md-block d-lg-block">
                <Header />
            </div>
            <div className="d-sm-block d-md-none d-lg-none">
                <Top_header />
            </div>
            <div className="row product_row">
                {
                    product_data && product_data.length > 0 && product_data.map((data, index) => {
                        return (
                            <div className="col-6 col-xs-6 col-md-6 col-lg-3 mt-2">
                                <div className="card _card">
                                    <div className="card-body">
                                        <img className="image" onClick={() => handleImage(data)}
                                            src={data.primaryImage.jpegImages.lImage} />
                                        <div className="mrp">{data.supplierName}</div>
                                        <div className="">{data.name}</div>
                                        <div ><span className="mrp">Rs.{data.listingPrice}</span>
                                            <span className="listprice">Rs.{data.mrp}</span>
                                            <span className="text-danger mx-2">({data.discount}% OFF)</span></div>
                                    </div>
                                    <div className="d-sm-block d-md-none d-lg-none">
                                        <Bottom_header />
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
export default Product;