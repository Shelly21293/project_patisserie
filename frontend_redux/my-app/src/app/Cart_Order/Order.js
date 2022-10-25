import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustomerProdList, getDataAsync, delDataAsync } from '../customerSlice';
import { addOrderAsync, selectCartList } from './orderSlice';



export function Order() {
  const prodList = useSelector(selectCustomerProdList);
  // prodList name can be changed
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getDataAsync());
  }, []);


  return (
    <div style={{backgroundColor:"yellow"}}>
      <h1>Orders</h1>

      {prodList.map((prod) => (
        <div>
          Desc: {prod.desc} {", "} Price: {prod.price}
          <button onClick={() => dispatch(delDataAsync(prod.id))}>
            Remove
          </button>

        </div>
      ))}

      <button >
        <h2 onClick={() => dispatch(addOrderAsync(prodList))}>Check out</h2>
      </button>
    </div>
  );
}
export default Order
