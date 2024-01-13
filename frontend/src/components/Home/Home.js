import React, { useEffect } from "react";
import {  useDispatch,useSelector } from "react-redux";
import { AddToCart, SetProducts } from "../../redux/Actions/ProductAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Home = () => {

  const product = [
    {
      id: "dsjbfdjksfgbi",
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750",
      name: "T-Shirt",
      price: 1490,
      description: "Smooth 'AIRism' with the look of cotton.",
      category:"tshirt"
    },
    {
      id: "uyepioednm",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXJLkyIo-mRwH2EFgdkDY_1XlVY6C6QJi4y_LLJVyW8rnAl4YuxDriCNW3-damQJa0fvKkK93IQF6UG6sS_hxuaXRNOgkNO-YtecZ5nOX3AgL7e-wH3F1Wfw",
      name: "Jeans",
      price: 1399,
      description: "LEVI'S 512 Slim Tapered Fit Men Jeans",
      category:"jeans"
    },
    {
      id: "ijsdhiuic",
      img: "https://levi.in/cdn/shop/files/329080243_01_Style_Shot_24d15e34-407b-42ba-9cea-c2531cc737df.jpg?v=1695736392",
      name: "Shirt",
      price: 1290,
      description: "MEN'S CHECKERED SLIM FIT SHIRT.",
      category:"shirt"
    },
  ];
  
  const dispatch = useDispatch();
  const getproducts = async()=>{
  
    const {data} = await  axios.get("http://localhost:8000/api/v1/getallproduct");
    
    dispatch( SetProducts(data.product))
  }
  getproducts()
  const {allproduct} = useSelector((state)=>state.products)
  
  const notify = () => toast("Item Adden in Cart!");


    
  const config = { header: { "Content-Type": "application/json" } }

  


  const Addproduct = (productID) => {
    dispatch(AddToCart(productID));
  };


  return (
    <div className=" bg-home-grey h-screen border-t-4 mt-8 ">
      <div className="w-4/5 m-auto  "></div>
      <div className=" sm:flex-row flex  flex-col px-5   sm:px-0 justify-center mt-6 gap-6 ">
        {allproduct.map((el, index) => {
          return (
            <div key={index} className="bg-white p-4 shadow-lg rounded-md ">
              <div className=" ">
                <img
                  className="w-full h-64"
                  src={el.img}
                  alt="images"
                />
                <h2 className=" text-2xl font-bold ">{el.name}</h2>
                <h3 className=" text-xl font-bold">MRP Rs. {el.price}</h3>
                <h3 className=" text-gray-500">
                {el.description}
                </h3>
              </div>
              <button
                className=" bg-zinc-600 text-white p-2 rounded font-bold "
                onClick={() => {
                 
                  Addproduct(el);
                  notify();
                }}
              >
              {"ADD TO CART"}
              </button>
            </div>
          );
        })}
      </div>
<ToastContainer className=' mt-24' />
    </div>
  );
};

export default Home;
