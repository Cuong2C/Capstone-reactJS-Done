import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Header/Navbar'
import { getAllProductApi } from ".././redux/reducers/productReducer";


const HomeTemplate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductApi);
  }, []);
  return (
    <div>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeTemplate