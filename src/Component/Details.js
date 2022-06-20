import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaPaw} from 'react-icons/fa';
import {BsInfoCircle} from 'react-icons/bs';
import {AiOutlinePhone} from 'react-icons/ai';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Details = () => {
  const [users, setUsers] = useState([])
const petid=useParams();
     useEffect ( () => {
      axios.get(`https://62a6b5f7bedc4ca6d7b888ad.mockapi.io/Dog/${petid.id}`)

        .then(response => {
         setUsers(response.data)
        })
       
     },[petid.id])

     const [users1, setUsers1] = useState([])
     const petid1=useParams();
          useEffect ( () => {
           axios.get(`https://62a6b5f7bedc4ca6d7b888ad.mockapi.io/Dog/${petid1.id}`)
     
             .then(response => {
              setUsers1(response.data)
             })
            
          },[petid1.id])
  return (
    <div className="petbg" >
    <div className="pb-5">
      <h5 className="pt-2 ms-3  fixed-top petbg fw-bold">AdoptPet</h5> 
     </div>
    <div className="container">
    <div className="col">
     <img src={users.url} alt="Golden-retriever" className="image RetrieverDogPosition p-2" />
      <p className="RetrieverDogPosition-left p-3 text-danger ">{users.name}  </p>
      <p className="RetrieverDogPosition-left p-3 pt-5 text-danger "> {users.age}</p>
    </div>
  </div>
   
   <div className=" pb-3 ms-3">
  <ul className="list-inline ">
    <div>
    <li className="list-inline-item ms-3 fw-light "><small>Brand</small></li>
    <li className="list-inline-item ms-4 ps-1"><small>{users.name}</small></li>
    </div>
    <div>
    <li className="list-inline-item ms-3 fw-light "><small>Gender</small></li>
    <li className="list-inline-item ms-3 ps-1"><small>Male</small></li>
    </div>
    <div>
  <li className="list-inline-item ms-3 fw-light"><small>Age</small></li>
    <li className="list-inline-item ms-3 ps-4 text-center"><small>{users.age}</small></li>
    </div>
    
    </ul>
    
    
    <p className="m-3 lh-1 pb-5 "><small>{users.Description}</small></p>
  </div>
  
    <NavLink to={`/Submit/${users.id}`} > <div className="d-grid gap-2 pb-5 col-10 mx-auto ">
   <button className="btn btn-primary rounded-pill px-5 mx-5" type="button">Adopt Now</button>
    
      </div>
      </NavLink>
   
   

    <div className="bg-white   footer">
          <ul className="list-inline d-flex justify-content-between fa-lg  p-1 m-3 bg-white  ">
        <NavLink to="/Product">
            <li className="list-inline-item text-dark fw-light"><AiFillHome size={20}></AiFillHome></li>
            </NavLink>
            <li className="list-inline-item text-info"><FaPaw size={20}></FaPaw></li>
            <li className="list-inline-item "><BsInfoCircle size={20}/></li>
            <li className="list-inline-item"><AiOutlinePhone size={20}/></li>
        </ul>
        </div>
</div>
  )
}

export default Details