import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, DecreaseQty, RemovePro } from "../../redux/Actions/ProductAction";

const Cart = () => {
//  const product = {
//   name:"T-Shirt",
//   price:"1,490.00",
//   description:"Smooth 'AIRism' with the look of cotton.",
//   qty:"1"
//  }
const [price,setPrice] = useState("")
const dispatch = useDispatch()

const {cart} = useSelector((state)=>state.products)

const increaseqty = (product,qty)=>{
  const newqty = qty + 1
    dispatch(AddToCart(product,newqty))
}

const decreaseqty = (product,qty)=>{
 
  const newqty = qty - 1
  
  dispatch(DecreaseQty(product,newqty))
}

let vale = 0
const totalqty = cart.reduce((initial,current)=>   initial + current.qty , vale)




  const totalPrice = cart.reduce((initial,current)=>initial+(current.qty * current.price),vale)


  return (
    <div className="h-screen border-t-4 mt-8 ">
    { cart.length === 0 ? (
        <div className="flex justify-center items-center">
          <h1 className=" font-bold text-xl mt-10">Your Cart is Empty : 0</h1>
        </div>
    ) :
      <div className="w-4/5 m-auto  ">
        <h1 className=" font-bold text-3xl mt-5">Shopping Cart</h1>

          <div className=" mt-5  border-t-2 flex ">
          <div className="flex flex-col ">
{

cart.map((el,index)=>{

        return(
<div key={index} className="flex" >

<div className=" flex items-center gap-7 mt-6">


  <img
    className=" h-48"
    src={el.img}
    alt=""
  />
  <div>
    <h2 className=" text-2xl font-bold ">{el.name}</h2>
    <h3 className=" text-xl font-bold">MRP Rs. {el.price}</h3>
    <h3 className=" text-gray-500">{el.description}</h3>
  </div>
</div>

<div className="flex gap-1 items-center">


  <span
  onClick={()=>{
    decreaseqty(el,el.qty)
  }}
   className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer">
    <p>-</p>
  </span>
  <input
    className="w-11 border outline-none text-center rounded-sm py-0.5 text-gray-700 font-medium text-sm qtyInput"
    value={el.qty}
    disabled
  />
  <span onClick={()=>{
    increaseqty(el,el.qty)
  }} className="w-7 h-7 text-xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer">
    +
  </span>
<button onClick={()=>{
  dispatch(RemovePro(el))
}} className="border px-4 py-2 rounded font-medium">
  Remove
</button>





</div>

</div>

        )
 })

}


</div>
<div className="flex flex-col bg-home-grey justify-center gap-4 px-4 w-2/6 m-8 rounded-lg ">
  <div className="flex justify-between border-b-2 py-2 ">
    <h2 className=" font-bold text-xl ">Quantity</h2>
    <h3  className=" font-bold text-xl ">{totalqty}</h3>
  </div>
  <div className="flex justify-between border-b-2 py-2">
    <h2  className=" font-bold text-xl ">Subtotal</h2>
    <h3  className=" font-bold text-xl ">Rs. {totalPrice}</h3>
  </div>
  <button className=" bg-black text-white text-2xl py-3 rounded-md font-semibold">Continue</button>
</div>
</div>
       




      </div>
    }
    </div>
  );
};

export default Cart;
