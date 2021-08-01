import React from "react";
import Product from "../Product";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__images"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="OPPO F19 Pro+ 5G (Space Silver, 8GB RAM, 128GB Storage) "
            price={25990.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71uXmoBZpOL._SL1500_.jpg"
            rating={5}
          />
          <Product
            title="New Apple Mac Mini with Apple M1 Chip "
            price={65499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71pcTYT%2BICL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Fossil Gen 5 Carlyle Stainless Steel Touchscreen Men`s Smartwatch"
            price={22995.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71XWG48C-NL._UL1500_.jpg"
            rating={4}
          />
          <Product
            title="Adidas Men`s CRI Hase Cricket Shoes"
            price={2995.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81y%2BeV-5YXL._UL1500_.jpg"
            rating={4}
          />
          <Product
            title="Allen Solly Men`s Polo"
            price={589.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81L9f1n4pGL._UL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1"
            price={80994.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
