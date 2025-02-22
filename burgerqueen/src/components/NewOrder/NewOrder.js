import React from "react";
import { useState } from 'react';
import ApiBreakfast from "../apiBreakfast/ApiBreakfast"
import ApiLunch from "../apiLunch/ApiLunch";
import Order from "../Order/Order";
import total from "../total";
import './NewOrder.css';

const NewOrder = (props) => {
  const [Breakfast, setBreakfast] = useState(true); 
  const [Lunch, setLunch] = useState(false); 

  const handlerBreakfast = () => {
    setBreakfast(!Breakfast);
  };

  const handlerLunch = () => {
    setLunch(!Lunch);
  };

  const handleAddItem = (item) => {
    props.setList({...props.list, items:[...props.list.items,item]})
  }

  return (
    <div>
      <div className="clientName"><label htmlFor="name">Name: Rosa Carranza</label></div>
        <input type="name" className="inputClient" />
        <div className="main-box">
          <div className="box-menus">
            <button className='button-box-menu' onClick={handlerBreakfast}><p>Morning</p></button>
            <button className='button-box-menu' id="button-box-menu" onClick={handlerLunch}><p>All day</p></button>
          </div>
          <div className="products-line">
            { (Breakfast === true) &&
              <ApiBreakfast breakfast={props.breakfast} handleAddItem={handleAddItem}/>
            }
            { (Lunch === true) &&
              <ApiLunch lunch={props.lunch} handleAddItem={handleAddItem}/>
            } 
          </div>
        </div>
        <div id="total">
          <Order setList={props.setList} list={props.list}/>
          <label htmlFor="value" className="totalLabel" value={props.list.length}>Total:</label>
          <input type="value" className="totalInput" value={total}/>
          <div className="box-send-waiter">
            <button type ="submit" className="button-send-waiter">Enviar</button>
          </div>
      </div>
    </div>
)
};
export default NewOrder;
