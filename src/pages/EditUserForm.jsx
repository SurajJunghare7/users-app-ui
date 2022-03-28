import axios from "axios";
import { useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";

const EditUserForm = () =>{

    // const [userData,setUserData] = useState({});
    const navigate = useNavigate();
    const{ userId }= useParams();



    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("") ;
    const [mobNumber, setmobNumber] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${userId}`)
        .then(res => {
            // console.log(res.data[0]);

            setfirstName(res.data[0].firstName);
            setlastName(res.data[0].lastName);
            setemail(res.data[0].email);
            setmobNumber(res.data[0].mobNumber);

      }).catch(err=> alert(err))
    },[]);
    

    const updateUserFormHandler = (e) =>{
        alert("Inside updateUserFormHandler ")
        e.preventDefault();

    }
    const data = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        mobNumber:mobNumber

    }
    console.log(data)

    axios.put("http://localhost:5000/users/62228c842bd87ff203169f00",data)
    .then(res => {
        alert("User details updated successfully!")
        navigate("/");
    })
    
    .catch(err => alert(err));

    return(
        <div>
        <h2 className="text-center m-3">EDIT USER INFO</h2>
        <form onSubmit={updateUserFormHandler} >
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
              <input type="email" className="form-control" placeholder="Enter Your Email"     required
               value = {email}  onChange={(e) => setemail(e.target.value)}/>
         </div>
         <div className="form-group">
              <label>Contact Number</label>
              <input type="number" className="form-control"placeholder="Enter Mobile Number" required value = {mobNumber}  onChange={(e) => setmobNumber(e.target.value)}/>
         </div>
         <input type="submit" value="SAVE CHANGES"
          className="btn btn-success" />
    
        </form>
        </div>
    )
}

  export default EditUserForm;