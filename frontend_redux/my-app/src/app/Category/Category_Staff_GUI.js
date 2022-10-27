import React, { useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryList, getCategoryAsync, addCategoryAsync, delCategoryAsync, updCategoryAsync } from './categorySlice'
import {  selectToken} from '../Login/loginSlice'



const Category_Staff_GUI = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryList);
  const [desc, setDesc] = useState("");
  const token = useSelector(selectToken);

  const [change1, setChange1] = useState("false");
  const [change2, setChange2] = useState("0");

  useEffect(() => {
    dispatch(getCategoryAsync())

  }, [])


  useEffect(() => {
    dispatch(getCategoryAsync())
  }, [change1, change2])

  
  return (
    <div>

      <h3 className="mt-4"><i>Our Categories</i></h3>
      <div>
        <h5 className="mt-4"><i>fields to update</i></h5>
        <i>Desc: </i>
        <input onChange={(e) => setDesc(e.target.value)} />
        <br />
        <br />
      </div>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          {categories.map((cat) => (

            <Link className="nav-link" key={cat._id} to={`/staffGUI/delete_update/${cat._id}`}>{cat.desc}{" "}(Category ID:{" "} {cat._id} )
            <button onClick={() => {
                dispatch(delCategoryAsync({ id: cat._id, token: token }))
                setChange2(cat._id)
              }
              }>Delete</button>

            <button
            onClick={() => {
              dispatch(updCategoryAsync({ cat: {desc: desc}, id: cat._id, token: token })) 

              setChange1( desc)
            }

            }>Update</button>
            
            </Link>
            
          ))}
        </li>
      </ul>
      {/* <hr className="d-sm-none" /> */}
      {/* <Outlet></Outlet> */}
      <div>
      <Outlet></Outlet>
      </div>
    

    </div>

  )
}

export default Category_Staff_GUI