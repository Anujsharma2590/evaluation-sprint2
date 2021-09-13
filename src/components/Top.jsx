import './Button.css'
import './Top.css'
import React, { useState} from 'react'
import { v4 as uuid } from 'uuid';
import { Button } from './Button'
import {Input} from './Input'

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
    const handleChange = (eve) => {
        setQuery(eve.target.value);
    }

    
    return (
      <>
        <div className="Parent">
          <Input query={query} handleChange={handleChange} />
          <Button title={"add tofinal list"} handleAdd={handleFinalAdd} />
          <Button title={"wishlist"} handleAdd={handleWishListAdd} />
        </div>
        {wishlist.map((item) => {
          return <ListItem key={item.id} {...item} />;
        })}
          
        {finallist.map((item) => {
            return <ListItem  key={item.id} {...item} />;
        })}
      </>
    );
}

export {Top}