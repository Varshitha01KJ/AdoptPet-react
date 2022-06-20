import React from 'react'
import { useState ,useEffect,useRef} from 'react'
import { NavLink, useParams } from 'react-router-dom'
 import axios from 'axios'
//  import { Form,Button } from 'react-bootstrap'
 import emailjs from "@emailjs/browser";
 import {AiFillHome} from 'react-icons/ai';
import {FaPaw} from 'react-icons/fa';
import {BsInfoCircle} from 'react-icons/bs';
import {AiOutlinePhone} from 'react-icons/ai';

const Submit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the email change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handleEmail = (e) => {
   setEmail(e.target.value);
    setSubmitted(false);
  };
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm(
              "service_dlm4zrk",
              "template_wcj27wd",
              form.current,
              "YCRkRGFP7FpFcm33B"
            )
            .then(
              (result) => {
                console.log(result.text);
                console.log("message sent");
              },
              (error) => {
                console.log(error.text);
              }
            );
            if ( name === '' &&  email === '') {
              // setError(true);
              setError("Enter the required details");
              return false;
            }
            else if(name===""){
              setError(" name is required");
              return false;
            }
            else if(email ===""){
              setError(" email  is required");
              return false;
            }
             else {
              axios.post(`https://62a6b5f7bedc4ca6d7b888ad.mockapi.io/Dog`, {
                name,
                email 
              })
              
                
            
         setSubmitted(true);
              setError(false);
            
             
             }
            alert("message sent");
        };
    
    const [users, setUsers] = useState([])
const petid=useParams();
     useEffect ( () => {
      axios.get(`https://62a6b5f7bedc4ca6d7b888ad.mockapi.io/Dog/${petid.id}`)

        .then(response => {
         setUsers(response.data)
        })
       
     },[petid.id])
  return (
    <>
    <div className="petbg">
     <div className="pb-5">
   <h5 className="pt-2 ms-3  fixed-top petbg fw-bold">AdoptPet</h5> 
  </div>
   <div className="container">
    <div className="col">
     <img src={users.url} alt="Golden-retriever" className="image RetrieverDogPosition p-2" />
     <p className="RetrieverDogPosition-left p-3 text-danger ">{users.name}   </p>
     <p className="RetrieverDogPosition-left p-3 pt-5 text-danger ">  {users.age} </p>
    </div>
  </div>

     <div >
      <form className="petbg pb-5" >
        <div className="d-grid col-10 mx-auto">
          <label  className="form-label">Your Name</label>
          <input type="text" className="form-control rounded-pill"  />
        
        </div>
        <div className="d-grid p-1 col-10 mx-auto ">
          <label  className="form-label">Email </label>
          <input type="email" className="form-control rounded-pill " />
        </div>
        <div className="d-grid p-1 col-10 mx-auto pb-3">
            <label  className="form-label">Phone/Mobile Number </label>
            <input type="password" className="form-control rounded-pill" />
          </div>

        <div className="d-grid gap-2  mb-5 pt-4 col-10 mx-auto">
            <button className="btn btn-primary rounded-pill" type="button">Submit</button>
          </div>
      </form>   

</div>
</div>

 <div className="bg-white   footer">
          <ul className="list-inline d-flex justify-content-between fa-lg  p-1 m-3 bg-white  ">
         
        <NavLink to="/Product">    <li className="list-inline-item text-dark fw-light"><AiFillHome size={20}></AiFillHome></li>
        </NavLink>
            <li className="list-inline-item text-info"><FaPaw size={20}></FaPaw></li>
            <li className="list-inline-item "><BsInfoCircle size={20}/></li>
            <li className="list-inline-item"><AiOutlinePhone size={20}/></li>
        </ul>
        </div>
    </>
  )
}


export default Submit