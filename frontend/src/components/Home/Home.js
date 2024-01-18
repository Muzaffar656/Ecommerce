import React from "react";
import {  useDispatch,useSelector } from "react-redux";
import { AddToCart } from "../../redux/Actions/ProductAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

const Home = () => {
const {allproduct} = useSelector((state)=>state.products)


  
  const dispatch = useDispatch();

  const notify = () => toast("Item Adden in Cart!");

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
