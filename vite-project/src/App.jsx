import { useState, useEffect } from 'react'
import  './App.css'

function Tab({id, name, email, role}){
  return (
    <div>
      <table>
          <tr>
            <td className='id'>{id}</td>
            <td className='name'>{name}</td>
            <td className='email'>{email}</td>
            <td className='role'>{role}</td>
            </tr>  
      </table>
    </div>
  )

}
export default function App() {
  const countPerPage = 10;
  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1)

  useEffect(()=>{
      const fetchData = async () =>{
        try{
          const response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
          if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);

          }
          let data = await response.json();
          setCount(data);
          setLoading(false);
        }
        catch(error){
          setError(error.message);
          alert(`failed to fetch data ${count}`);
          console.error("failed to fetch data", error);
          setCount([]);
          }
          finally{
            setLoading(false);
          }
      };
      fetchData();
  },[])

  const totalpage = Math.ceil(count.length / countPerPage);
  const start = (page - 1)* countPerPage;
  const end = start + countPerPage;
  const curr = count.slice(start, end)
  function handleprevios(){
    if(page > 1){
      setPage(page - 1)
    }
  }
  function handlenext(){
     if(page < totalpage){
      setPage(page + 1)
    }
  }
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }

  return (
   <div>
    <div>
      <h1>Employee Data Table</h1>
    </div>
    <div>
      <table >
          <tr className='header'>
            <td className='id'>ID</td>
            <td className='name'>name</td>
            <td className='email'>email</td>
            <td className='role'>role</td>
            </tr>  
      </table>
    </div>
    { curr.length > 0 ? (curr.map(({id,name,email,role})=>
    (
      <Tab key={id} id={id} name={name} email={email} role={role} />  
    ))): ( <div> No data found</div> )}
    <div>
      <button onClick={handleprevios} disabled={page === 1}>Previous</button>
      <button >{page}</button>
      <button onClick={handlenext} disabled={page === totalpage}>Next</button>
    </div>

   </div>
  )
}

