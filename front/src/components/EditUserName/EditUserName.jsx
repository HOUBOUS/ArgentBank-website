import { useState } from "react";
import "./EditUserName.css";
import { useDispatch, useSelector } from "react-redux";
import {userAccountUpdate} from "../../Redux/actions/action";


function EditUserName() {
    const dispatch = useDispatch();

    const {token} = useSelector((state) => state.userSignin)
    const {firstName} = useSelector((state) => state.userAccount);
    const {lastName} = useSelector((state) => state.userAccount);
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [editButton, setEditButton] = useState('');
    const {sucess} = useSelector((state) => state.userSignin)
    

    const editNameButton = (e) =>{
        e.preventDefault();
        setEditButton((current) => !current);
    }
     
    const submitHandler =(e) => {
        e.preventDefault();
        dispatch(userAccountUpdate(token, newFirstName, newLastName))
        if ({sucess}) {
            setEditButton((current) => current)
        }
   
    }

    return (
    <div className="EditName">
        
        {!editButton ? (
     //   <div className="Edit-header">EditUserName</div>
      <div className="editUserName-header">
        <h1>
          Welcome back,      
          {firstName} {lastName}!
        </h1>
        <button onClick={editNameButton} className="edit-button">
            Edit Name
            </button>
      </div>
    
      ):(
        <div className="editUserName-header">
        <h1>Welcome back</h1>
        <form className="editUserNameContent" onSubmit={submitHandler}>
          <div className="editUserNameInputs">

            <span  className="editUserNameInput">
               <p className="editUserNametext" > First name</p> 
          <input
           type='text'
           placeholder={firstName}
           onChange={(e) => setNewFirstName(e.target.value)}
          required
          />
          </span>
          <span className="editUserNameInput">
          <p className="editUserNametext"> Last Name</p> 
          <input
            type='text'
            placeholder={lastName}
            onChange={(e) => setNewLastName(e.target.value)}
           required
          />
          </span>
          </div>
          <div className="editUserNameButtons">
             <button className="editSaveButton" type="submit">
              Save
             </button>
             <button className="editCancelButton" onClick={editNameButton}>
              Cancel
             </button>
          </div>

         </form>
        
     </div>
     )}
     </div>
    )

}

export default EditUserName;
