import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './App.css'

function App(){
  const  [name,setname]= useState('');
  const [price,setprice] = useState('');
  const [products,setproducts]=useState([]);

const fetch = async () => { 
  const res = await axios.get('http://localhost:3000/api/product');
  setproducts(res.data);
}

  useEffect(()=> {
    fetch();
  },[])

  const handlesubmit = async (e) => {
    e.preventDefault();
    const items= {name,price}
   await axios.post('http://localhost:3000/api/product', items);
    
    setname('');
    setprice('');
    fetch();
  }

  return(
    <>
    <div>
      <h1>PRODUCTS</h1>

      <form onSubmit={handlesubmit}>
        <input type='text' placeholder='product' value={name} onChange={(e) => setname(e.target.value)}/>
        <input type='text' placeholder='price' value={price} onChange={(e) => setprice(e.target.value)}/>
        <button type='submit' className='b1' > SUBMIT</button>
      </form>

    </div>
    <div>
       <h2>LIST : </h2>
       <ul>
        {products.map((s,index)=> (
          <li key={index}>
            {s.name}-
            {s.price}
          </li>
        ))}
      </ul>
     </div>
    </>
  )
}
export default App

























// import React,{ useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import axios from 'axios';


// function App() {
//   //const [count, setCount] = useState(0)
//   const [name, setname] = useState('');
//   const [email, setemail] = useState('');
//   const [students, setstudents] = useState([]);

//   useEffect(() => {
//     const fetch= async () => {
//       const res= await axios.get('http://localhost:5000/api/students');
//       setstudents(res.data);

//       fetch();
//     }
//     },[]);

//   const handlesubmit =  async (e) => {
//     e.preventDefault();
//     const newstudents= {name,email};
//     try{
//       const res= await axios.post('http://localhost:5000/api/students',newstudents);

//     console.log("sent to backend", res.data );
//     setstudents([...students,newstudents]);
//     setname('');
//     setemail('');

//     }catch(error){
//       console.log(error);
//     }
//   };

//   return (
//     <>
//     <div>
//       <p>
//       <h1> STUDENT FORM</h1>
// </p>
//       <form onSubmit={handlesubmit}>
//         <input type='text' placeholder='enter name'
//         value = {name} 
//         onChange={(e)=> setname(e.target.value)}/>

//         <input type='text' placeholder='enter email'
//          value = {email} 
//          onChange={(e)=> setemail(e.target.value)}/>

//         <button type='submit'>SUBMIT</button>
//       </form>
//     </div>

//     <div>
//       <h2>LIST : </h2>
//       <ul>
//         {students.map((s,index)=> (
//           <li key={index}>
//             {s.name} - {s.email}
//           </li>
//         ))}
//       </ul>

//     </div>
//     </>
//   )
// }

// export default App
