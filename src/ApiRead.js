import React, { useEffect, useState } from "react";
import axios from 'axios';


const ApiRead =()=>{
    const [data,setData]= useState([])
    
    useEffect(()=>{
             fetchdata();
    },[]);

    async function fetchdata(){
        try{
            const response =await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);

        }catch(error){
            console.error('Error fetching data:',error);
        }
    }

    return(
        <>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
    { data.map((item) =>(
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.address.street},{item.address.city},</td>
    </tr>
    ))}
  </tbody>
</table>
        </>
    )
};
export default ApiRead;