import React from 'react'
import {FaArrowCircleRight} from  'react-icons/fa';
import {NavLink} from 'react-router-dom'
const Home = () => {
  return (
      <>
    <div className="petbg overflow-y-hidden">
         <div className="col ">
         <img src='./img/home.jpg' alt="Golden-retriever" className="adoptimg " />
        </div>
    <h5 className="AdoptTop-left fw-bold ">AdoptPet</h5>
    <h1 className="text-dark fw-bold text-center pt-4 pb-3">Find Your dream Pet here</h1>
    <h6 className="text-center fw-lighter  p-2 pb-5"> sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium  ut perspiciatis </h6>
  <div className="text-center text-info pt-3 pb-5">  
  <NavLink to="/Product"> <FaArrowCircleRight className="fa-solid fa-circle-arrow-right fs-1" width="100"  id="home"/></NavLink>
  {/* <FaArrowCircleRight className="fa-solid fa-circle-arrow-right fa-3x" width="50px"  id="home"/> */}

    </div>
        
    </div>
    </>
  )
}

export default Home