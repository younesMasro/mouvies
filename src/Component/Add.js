import React, { useEffect, useState } from 'react';
import './Add.css';
import axios  from 'axios';
import Card from './Card';

export default function Add() {
    const[valueSearch,setValueSearch]=useState("")
    const[mydata,setData]=useState([])
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
    <div className='box'>
        <div className='search-container'>
            <input className='search-input' type='text' placeholder='search on any movies you like' value={valueSearch} onChange={(e)=>{setValueSearch(e.target.value)}}></input>
            <button className='search-button'>Search</button>
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
          <p>No movies found</p>
        )}
       </div>
    </>
  )
}
