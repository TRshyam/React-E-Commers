import React, { useState } from 'react';
import axios from "axios";

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [ProductPrice, setProductPrice] = useState('');
  const [ProductDiscount, setProductDiscount] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [highlights, setHighlights] = useState(['', '', '', '', '', '', '']);
  const [description, setDescription] = useState('');
  const [specifications, setSpecifications] = useState([
    { key: 'General', values: [{ subKey: '', subValue: '' }] },
  ]);

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...highlights];
    newHighlights[index] = value;
    setHighlights(newHighlights);
  };

  const handleAddSpecification = () => {
    setSpecifications([...specifications, { key: '', values: [{ subKey: '', subValue: '' }] }]);
  };

  const handleRemoveSpecification = (index) => {
    const newSpecifications = [...specifications];
    newSpecifications.splice(index, 1);
    setSpecifications(newSpecifications);
  };

  const handleSpecificationChange = (index, subIndex, subKey, subValue) => {
    const newSpecifications = [...specifications];
    newSpecifications[index].values[subIndex] = { subKey, subValue };
    setSpecifications(newSpecifications);
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert highlights array to a string
    const highlightsString = highlights;

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('ProductPrice', ProductPrice);
    formData.append('ProductDiscount', ProductDiscount);
    formData.append('category', category);
    
    // Append each image to the formData
    images.forEach((image) => {
        formData.append('images', image);
    });

    formData.append('highlights', JSON.stringify(highlights));
    formData.append('description', description);
    formData.append('specifications', JSON.stringify(specifications));
    console.log(formData);
    console.log(formData);
    console.log(formData);
    console.log(formData);

    try {
        const response = await axios.post('http://127.0.0.1:5000/api/add_product', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log('Server Response:', response.data);
        // Reset form fields after successful submission
        setProductName('');
        setProductPrice('');
        setProductDiscount('');
        setCategory('');
        setImages([]);
        setHighlights(['', '', '', '', '', '', '']);
        setDescription('');
        setSpecifications([{ key: 'General', values: [{ subKey: '', subValue: '' }] }]);
    } catch (error) {
        console.error('Error:', error);
    }
};


  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Product Price:</label>
          <input
            type="text"
            value={ProductPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Product Discount:</label>
          <input
            type="text"
            value={ProductDiscount}
            onChange={(e) => setProductDiscount(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select Category</option>
            {['Electronics', 'Appliance', 'Furniture', 'Clothing', 'Grocery'].map((categoryOption, index) => (
              <option key={index} value={categoryOption}>{categoryOption}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Images:</label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages([...images, ...e.target.files])}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Highlights:</label>
          {highlights.map((highlight, index) => (
            <input
              key={index}
              type="text"
              value={highlight}
              onChange={(e) => handleHighlightChange(index, e.target.value)}
              className="w-full border rounded px-3 py-2 mb-2"
              placeholder={`Highlight ${index + 1}`}
            />
          ))}
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Specifications:</label>
          {specifications.map((spec, index) => (
            <div key={index}>
              <input
                type="text"
                value={spec.key}
                onChange={(e) => {
                  const newSpecifications = [...specifications];
                  newSpecifications[index].key = e.target.value;
                  setSpecifications(newSpecifications);
                }}
                placeholder="Key"
                className="w-full border rounded px-3 py-2 mb-2"
              />
              {spec.values.map((value, subIndex) => (
                <div key={subIndex} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={value.subKey}
                    onChange={(e) => handleSpecificationChange(index, subIndex, e.target.value, value.subValue)}
                    placeholder="Sub Key"
                    className="border rounded px-3 py-2 w-1/2"
                  />
                  <input
                    type="text"
                    value={value.subValue}
                    onChange={(e) => handleSpecificationChange(index, subIndex, value.subKey, e.target.value)}
                    placeholder="Sub Value"
                    className="border rounded px-3 py-2 w-1/2"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  const newSpecifications = [...specifications];
                  newSpecifications[index].values.push({ subKey: '', subValue: '' });
                  setSpecifications(newSpecifications);
                }}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-2"
              >
                Add Subspecification
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddSpecification}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-2"
          >
            Add Specification
          </button>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
