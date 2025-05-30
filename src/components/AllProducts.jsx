import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useGetCategoriesQuery, useGetProductsQuery } from '../redux/api/apiSlice';

const AllProducts = () => {
  const { data: categoryData, isLoading: categoryLoading } = useGetCategoriesQuery();
  const { data: productData, isLoading: productLoading } = useGetProductsQuery();

  const [categorySelect, setCategorySelect] = useState('');
  const [showAll, setShowAll] = useState(false);

  const categories = categoryData?.data || [];
  const products = productData?.data || [];

  useEffect(() => {
    if (categories.length > 0 && !categorySelect) {
      setCategorySelect(categories[0].id);
    }
  }, [categories]);

  const selectCategory = (category) => {
    setCategorySelect(category.id);
    setShowAll(false);
  };

  const filteredProducts = categorySelect
    ? products.filter((product) => product?.categoryId === categorySelect)
    : products;

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  if (categoryLoading || productLoading) return <p className='text-center'>Loading...</p>;

  return (
    <div className='my-8'>
      <div className='flex justify-center flex-wrap gap-2'>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => selectCategory(category)}
            className={`btn btn-soft ${
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
