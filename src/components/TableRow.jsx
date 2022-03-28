import axios from "axios"
import { Link } from "react-router-dom";

const TableRow = ( {user} ) => {

    const deleteUserHandler =  () =>{
        // alert("The row will be deleted..!" + user._id)

        axios.delete(`http://localhost:5000/users/${user._id}`)
        .then( res => { 
            // alert("user deleted successfully..!")
            window.location.reload();
    })
    .catch(err => alert(err));
  }

    return(
  
        <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.mobNumber}</td>
        <td>
          <Link to="/Edit-user/:userId" className='btn btn-primary'>Edit</Link>
        </td>
        <td>
        <button className='btn btn-danger' onClick={deleteUserHandler}>Delete</button>
        </td>
      </tr>



    )
}

export default TableRow;