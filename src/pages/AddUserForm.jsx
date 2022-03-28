import {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
      const Navigate = useNavigate();

    const [firstName, setfirstName] = useState("");
     const [lastName, setlastName] = useState("");
     const [email, setemail] = useState("") ;
     const [mobNumber, setmobNumber] = useState("");


    const submitFormHandler = (e) =>{
        e.preventDefault(); // it simply stops the reloading page..!
        // alert("Inside submitFormHandler")
    }
    // console.log(firstName,lastName,email,mobNumber)
    const data = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        mobNumber:mobNumber

    }
    console.log(data)

    axios.post("http://localhost:5000/users",data)
    .then(res => {
        alert("User added successfully!");
        Navigate("/");
    })
    .catch(err => alert(err));



    return(
        <div>
            <h2 className="text-center m-3">ADD NEW USER</h2>
            <form onSubmit={submitFormHandler}>
              <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control"placeholder="Enter First Name" required value = {firstName}  onChange={(e) => setfirstName(e.target.value)}/>
             </div>
             <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control"placeholder="Enter Last Name" required value = {lastName} onChange={(e) => setlastName(e.target.value)}/>
             </div>
             <div className="form-group">
                  <label>Email ID</label>
                  <input type="email" className="form-control"placeholder="Enter Your Email"required value = {email}  onChange={(e) => setemail(e.target.value)}/>
             </div>
             <div className="form-group">
                  <label>Contact Number</label>
                  <input type="number" className="form-control"placeholder="Enter Mobile Number" required value = {mobNumber}  onChange={(e) => setmobNumber(e.target.value)}/>
             </div>
             <input type="submit" value="Add User" 
              className="btn btn-success" />
        
            </form>
        </div>
        
    )
}

export default AddUserForm;