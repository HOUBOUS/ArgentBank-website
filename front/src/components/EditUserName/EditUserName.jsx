import React, { useEffect, useState } from "react";
import "./EditUserName.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfile,
  updateUserProfile,
} from "../../Redux/Slices/userSlice";

function EditUserName() {
  const dispatch = useDispatch();
  const { lastName, firstName } =
    useSelector((state) => state.getUserProfile) || {};
  const user = useSelector((state) => state.userProfile.user);
// On déstructure la valeur du state dans {userName}


  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const [editButton, setEditButton] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const editNameButton = (e) => {
    e.preventDefault();
    setEditButton(!editButton);
    setNewUserName(user.userName? user.userName : '')
    setNewFirstName(user.firstName? user.firstName : '')
    setNewLastName(user.lastName? user.lastName : '')
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let credentials = {
      newUserName,
      newFirstName,
      newLastName,
    };

    dispatch(updateUserProfile(credentials));
  };

  return (
    <div className="EditName">
      {!editButton ? (
        //   <div className="Edit-header">EditUserName</div>
        <div className="editUserName-header">
          <h1>
            Welcome back <br />
            {`${user?.firstName}`} {`${user?.lastName}`} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="editUserName-header">
          <h1>Welcome back</h1>
          <form className="editUserNameContent" onSubmit={submitHandler}>
            <div className="editUserNameInputs">
              <span className="editUserNameInput">
                <p className="editUserNametext"> User Name</p>
                <input
                  type="text"
                  placeholder={newUserName}
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  required
                />
              </span>

              <span className="editUserNameInput">
                <p className="editUserNametext"> First name</p>
                <input
                  type="text"
                  placeholder={newFirstName}
                  value={newFirstName}
                  onChange={(e) => setNewFirstName(e.target.value)}
                  required
                />
              </span>
              <span className="editUserNameInput">
                <p className="editUserNametext"> Last Name</p>
                <input
                  type="text"
                  placeholder={newLastName}
                  value={newLastName}
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
  );
}

export default EditUserName;