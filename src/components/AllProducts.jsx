import React, { useEffect, useState } from 'react';
import Product from './Product';

const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  const [categorySelect, setCategorySelect] = useState('');
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const selectCategory = (category) => {
    setCategorySelect(category.id);
    setShowAll(false); // reset showAll 
  };

  // Fetch categories and initialize selected category
  useEffect(() => {
    fetch('https://code-commando.com/api/v1/category')
      .then(res => res.json())
      .then(data => {
        if (data?.data) {
          setCategories(data.data);
          if (data.data.length > 0) {
            setCategorySelect(data.data[0].id); 
          }
        }
      });
  }, []);

  // Fetch products
  useEffect(() => {
    fetch('https://code-commando.com/api/v1/products')
      .then(res => res.json())
      .then(data => {
        if (data?.data) {
          setProducts(data.data);
        }
      });
  }, []);
  // console.log(products);
  // console.log(categorySelect);

  // Case-insensitive filtering
  const filteredProducts = categorySelect
    ? products.filter(
        (product) =>
          product?.categoryId === categorySelect
      )
    : products;

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  // console.log('Selected category:', categorySelect);
// console.log('Filtered products:', filteredProducts);

  return (
    <div className='my-8'>
      <div className='flex justify-center'>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => selectCategory(category)}
            className={`btn btn-soft md:mx-4 ${
              category.id === categorySelect ? 'bg-[#749b3f] text-white' : ''
            }`}
          >
            {category.categoryName}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p className='text-center col-span-full mt-10'>No products found in this category.</p>
        )}
      </div>

      {!showAll && filteredProducts.length > 8 && (
        <div className='text-center mt-6'>
          <button
            onClick={() => setShowAll(true)}
            className='btn btn-neutral btn-outline'
          >
            See All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
