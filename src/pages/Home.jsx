import React,{useState,useEffect}from "react"
import axios from "axios"
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";
const Home = () => {
   
    // // to store the user data from the api:----
    const [userData,setuserData] = useState([ ]);
    // console.log(userData);



     useEffect(() => {
    //    fetch("http://localhost:5000/users")
    //    .then(res => res.json())
    //    .then(data =>{
    //      console.log(data);
    //    }).catch(err => alert(err));
       
    //  }, [setfirstName])

    axios.get("http://localhost:5000/users")
    .then(res =>{
      console.log(res.data)
      setuserData(res.data);
    }).catch(err => alert(err));
  }, []);
     


    
    return(
        <>
      <h1 className='text-center bg-dark text-white'>React,Node,Express,JS & Mongo DB CRUD APP</h1>
      <Link to="/Add-user" className='btn btn-success float-right mb-3'>Add User</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mob.No</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {
            userData.map((user) =>{
              return(
               <TableRow key={user._id} user={user}/>
              )
            })
          }
        </tbody>
      </table>
    </>
    )
}
export default Home;