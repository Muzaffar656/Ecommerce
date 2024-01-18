import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import axios from "axios";
import { SetProducts } from "../../redux/Actions/ProductAction";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const AddProducts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handelsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);


    const config = { header: { "Content-Type": "application/json" } }

    const { data } = await axios.post("http://localhost:8000/api/v1/createproduct", formData, config);
    dispatch(SetProducts(data.product))
    navigate('/')

  };

  return (
    <div className=" bg-home-grey  border-t-4 mt-8 flex justify-center ">
      <form
        onSubmit={handelsubmit}
        className="flex flex-col bg-white  text-xl font-medium my-10 px-10 py-5 gap-4 rounded-md  shadow-md"
      >

        <label className=" text-base">Product Name</label>
        <input
          // name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          className=" text-gray-500 text-lg border px-4 py-2 rounded"
          placeholder="Product Name"
          required
        />

        <label className=" text-base">Product Description</label>
        <input
          // name="description"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className=" text-gray-500 text-lg border px-4 py-2 rounded"
          placeholder="Product Description"
          required
        />

        <label className=" text-base">Product Price</label>
        <input
          // name="price"
          onChange={(e) => setPrice(e.target.value)}

          type="number"
          required
          className=" text-gray-500 text-lg border px-4 py-2 rounded"
          placeholder="Product Price"
        />

        <TextField
          label="Category"
          select
          fullWidth
          variant="outlined"
          size="small"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >

          <MenuItem value="shirt" >Shirt</MenuItem>
          <MenuItem value="jeans" >Jeans</MenuItem>
          <MenuItem value="tshirt" >T-Shirt</MenuItem>

        </TextField>

        <label className="text-base">Choose Product Image</label>
        <input
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          required
          className="border px-4 py-2 rounded text-gray-500 text-lg "
          placeholder="Choose File..."
        />

        <button type="submit" className=" bg-gray-600 text-white px-4 py-2 text-xl rounded ">
          Add
        </button>

      </form>
    </div>
  );
};

export default AddProducts;
