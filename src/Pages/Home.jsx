import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import AllProducts from '../components/AllProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className='mt-34'>
                <Heading subTitle={'Our Products'} title={'Our Fresh Products'} description={'We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.'}></Heading>

                {/* All Products */}
                <div>
                    <AllProducts></AllProducts>
                </div>
            </section>
        </div>
    );
};

export default Home;