import React, { useState,useEffect } from 'react'
import './NewCollection.css';
// import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

export const NewCollection = () => {

  const [new_collection,setNew_collection]=useState([]);
  useEffect(() => {
    fetch("https://e-commerce-backend-jwbc.onrender.com/newcollections")
      .then(res => res.json())
      .then(data => setNew_collection(data))
      .catch(err => console.log("Error fetching new collections:", err));
  }, []);
  return (
    <div className='newCollection'>
        <h1>Collection In My Store</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
                return<Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            })}
        </div>
    </div>
  )
}
