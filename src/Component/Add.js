import React, { useEffect, useState } from 'react';
import './Add.css';
import axios  from 'axios';
import Card from './Card';
import Search from './Search';

export default function Add() {
    const[valueSearch,setValueSearch]=useState("")
    const[mydata,setData]=useState([])
    const handleClearClick = () => {
      setValueSearch("");
  };
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${valueSearch}&apikey=bd033a9d`)
          .then((res) => {
            setData(res.data.Search || []); // Ensure mydata is an array even if the response doesn't contain 'Search'
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, [valueSearch]);
   console.log(mydata)
  return (
    <>
    <div className='myForm'>
    <div className='box'>
        <div className='search-container'>
            {/* <input className='search-input' type='text' placeholder='search on any movies you like' value={valueSearch} onChange={(e)=>{setValueSearch(e.target.value)}}></input> */}
            <Search a={valueSearch} b={(e)=>{setValueSearch(e.target.value)}} onClearClick={handleClearClick}></Search>
        </div>
        </div>
        <div className='Lise'>
        {mydata.length > 0 ? (
          mydata.map((item) => {
            return (
              <Card id={item.imdbID} Title={item.Title} Poster={item.Poster} btns={true} ></Card>
            );
          })
          
        ) : (
          <p style={{"color":"#EA7FFB"}}>No movies found</p>
        )}
       </div>
       </div>
    </>
  )
}
