import React from 'react'
import { useState } from 'react';
import {Form} from 'react-bootstrap';
import {AiFillHome} from 'react-icons/ai';
import {FaPaw} from 'react-icons/fa';
import {BsInfoCircle} from 'react-icons/bs';
import {AiOutlinePhone} from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
// import axios from 'axios';

const Product = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://62a6b5f7bedc4ca6d7b888ad.mockapi.io/Dog")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  const [users1, setUsers1] = useState([])
  const fetchData1 = () => {
    fetch("https://62a6b5f7bedc4ca6d7b888ad.mockapi.io/Cat")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers1(data)
      })
  }
console.log(users)

  return (
    <div className="  petbg overflow-hidden">
    <div className="sticky-top petbg">
    <h4 className="text-black ms-3 fw-bold pt-1">AdoptPet</h4>
      <Form className="m-3">
        <Form.Control type="search" placeholder="Search" className="me-5 p-2 text-center rounded-pill lh-1" />
      
      </Form>

      <div className=" d-flex justify-content-around petbg" >
        
       <button className="btn btn-primary rounded-pill dogps  col-3 ms-4 ps-4 text-end" onClick={fetchData} >Dog</button>  
      <img src="./img/dog1.jpg" alt="dog" className=" dog rounded-circle dogps-left"  /> 
        
       <button className="btn btn-secondary rounded-pill catps col-3  ms-3 text-end" type="button"  >Cats</button>  
       <NavLink to="/cat">  <img src="./img/cat1.jpg" alt="dog" className="dog rounded-circle catps-middle"/></NavLink>
        
        <button className="btn btn-secondary rounded-pill  rabbitps  col-4  ms-2 me-1 text-end" type="button">Rabbit</button>   
      <img src="./img/rabbit2.jpg" alt="dog" className="dog rounded-circle rabbitps-end"/>
     </div>
    </div>

     <div className="petbg"> 
     
     
        <div className="col-12">
     
        {users.map(user => (
              <div className='col-3' key={user.id}>
                <NavLink to={`/Details/${user.id}`} >
         <img src={user.url} alt="Golden-retriever" className="imgaes position-relative  p-2" width="100%" ></img> 
         {/* <p className="CatPosition-bottom p-3 text-danger  ">{user.name}{user.age}</p> */}
         </NavLink>
          {/* <p className="text-danger position-absolute top-50 start-50 translate-middle ">{user.name} </p> */}
          {/* <p className="col-12 "> {user.name}</p> */}
         
          </div>
  ))}
      </div>
    
{/* <div className="container"> */}
        <div className="col">
     
        {users1.map(user => (
              <div className='col-3' key={user.id}>
                <NavLink to={`/Details/${user.id}`} >
         <img src={user.url} alt="Golden-retriever" className="imgaes DogPosition  p-2" width="100%" ></img> </NavLink>
          <p className="DogPosition-left p-3 text-danger ">{user.name} </p>
          <p className="DogPosition-left p-3 text-danger pt-5 "> {user.age}</p>
       
          </div>
  ))}
      </div>
      {/* </div> */}

      <div className="container">
        <div className="col">
         <img src="./img/dog4.jpg" alt="Golden-retriever" class="image DogPosition  p-2  " />
         <p className="DogPosition-left p-3 text-danger  ">Golden Retriever  6 Months old</p>
        </div>
      </div>

      <div className="container">
        <div className="col">
         <img src="./img/dog5.jpg" alt="Golden-retriever" class="image DogPosition  p-2  " />
         <p className="CatPosition-bottom p-3 text-danger  ">Collie  6 Months old</p>
        </div>
      </div>

     
        <div className="bg-white   footer">
          <ul className="list-inline d-flex justify-content-between fa-lg  p-1 m-3 bg-white  ">
         <NavLink to ="/">
            <li className="list-inline-item text-dark fw-light"><AiFillHome size={20}></AiFillHome></li>
            </NavLink>
            <li className="list-inline-item text-info"><FaPaw size={20}></FaPaw></li>
            <li className="list-inline-item "><BsInfoCircle size={20}/></li>
            <li className="list-inline-item"><AiOutlinePhone size={20}/></li>
        </ul>
        </div>
        </div>
        </div>
  )
}

export default Product