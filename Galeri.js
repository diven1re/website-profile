import React from 'react';
import GaleriList from './GaleriList';
import {useEffect,useState} from 'react'
import albumAPI from '../m/albumAPI'
import { Footer, Navbar } from '../../components';

function Galeri()  {
    const [albums,setAlbums ] = useState([]);
   
    useEffect (() => {
    albumAPI.find().then((res) =>{
        console.log(res);
        setAlbums(res);
        
      })
    },[])
  return (
    <>
    <Navbar/>
    <GaleriList albums = {albums}/>
    <Footer/>   
    </>
  )
};

export default Galeri;
