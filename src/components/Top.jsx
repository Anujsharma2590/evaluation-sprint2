import './Button.css'
import './Top.css'
import React, { useState} from 'react'
import { v4 as uuid } from 'uuid';
import {Button} from './Button'

import { ListItem } from './ListItem';
function Top() {
    const [query, setQuery] = useState("")
    const [finallist, setFinalList] = useState([])
    const [wishlist, setWishList] = useState([]);

    const handleFinalAdd = () => {
        const payload = {
            title: query,
            status: false,
            id: uuid()
        };
        setFinalList([...finallist, payload]);
        setQuery("");
      
  }
    const handleWishListAdd = () => {
                const payload = {
                  title: query,
                  status: false,
                  id: uuid(),
                };
                setWishList([...wishlist, payload]);
                setQuery("");       
    }


    console.log(finallist);
    console.log(wishlist);
    return (
      <>
        <div className="Parent">
          <div className="Inp">
            <input
              value={query}
              onChange={(eve) => setQuery(eve.target.value)}
              type="text"
              placeholder="Add Items"
            />
          </div>
          <Button title={"add tofinal list"} handleAdd={handleFinalAdd} />
          <Button title={"wishlist"} handleAdd={handleWishListAdd} />
        </div>
        {wishlist.map((item) => {
          return <ListItem key={item.id} {...item} />;
        })}
        {finallist.map((item) => {
          return <ListItem key={item.id} {...item} />;
        })}
      </>
    );
}

export {Top}