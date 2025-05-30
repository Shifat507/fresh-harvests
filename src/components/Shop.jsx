import React from 'react';
import AllProducts from './AllProducts';
import Heading from './Heading';



const Shop = () => {
    return (
        <div className='my-16'>
            <Heading
                subTitle={'Our Products'}
                title={'Our Fresh Products'}
                description={
                    'We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.'
                }
            />
            <AllProducts></AllProducts>
        </div>
    );
};

export default Shop;