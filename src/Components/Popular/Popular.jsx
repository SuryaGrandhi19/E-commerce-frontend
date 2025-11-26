import React, { useEffect, useState } from 'react';
import './popular.css';
import Item from '../Item/Item';

export const Popular = () => {
  const [popularWomen, setPopularWomen] = useState([]);
  const [popularMen, setPopularMen] = useState([]);

  useEffect(() => {
    
    // Women API
    fetch("https://e-commerce-backend-jwbc.onrender.com/popularwomen")
      .then((response) => response.json())
      .then((data) => setPopularWomen(data));

    // Men API
    fetch("https://e-commerce-backend-jwbc.onrender.com/popularmen")
      .then((response) => response.json())
      .then((data) => setPopularMen(data));
  }, []);

  return (
    <>
      {/* Popular in Women */}
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
          {popularWomen.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>

      {/* Popular in Men */}
      <div className="popular">
        <h1>POPULAR IN MEN</h1>
        <hr />
        <div className="popular-item">
          {popularMen.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
