import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateUserProfile } from "../redux/userSlice";
import Accounts from "../components/Accounts/Accounts";
import { useState } from "react";

export default function User() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
// local stata to manage Edition
  const [isEditing, setIsEditing] = useState(''); 
  // Edit new userName
  const [editedUsername, setEditedUsername] = useState(''); 

  // Edit Activation when clic buton "Edit Name"
  const handleEditClick = () => {
    setIsEditing(true); 
  };

  const handleSaveClick = () => {
    dispatch(updateUserProfile({ userName: editedUsername })).then(() => {
      // Si la mise à jour a réussi, mettre à jour l'userName dans l'état local
      // Note : Si nécessaire, utilisez l'action setUsername pour mettre à jour l'userName dans l'état Redux
      setEditedUsername(user ? user.userName : "");
      setIsEditing(false);
    });
  };

  const handleCancelClick = () => {
    setIsEditing(false); // Annuler l'édition sans sauvegarder les modifications
    setEditedUsername(user ? user.userName : ""); // Réinitialiser le champ d'édition avec l'ancien nom d'utilisateur
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user && user.userName) {
      setEditedUsername(user.userName);
    }
  }, [user]);

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? <h1>Edit user info</h1> : <h1>Welcome back</h1>}
        {isEditing ? (
            <h2>

          <div className="edit-form">
            
              <label htmlFor="userName">
                User name:
                <input
                  className="InputForm"
                  type="text"
                  value={editedUsername}
                  onChange={(e) => setEditedUsername(e.target.value)}
                />
              </label>
            
            <div>
              <label>
                First name:
                <input
                  type="text"
                  value={user ? user.firstName: ''}
                  className="edit-input"
                  readOnly
                />
              </label>
            </div>
            <div>
              <label htmlFor="lastName">
                Last name:
                <input
                  type="text"
                  value={user.lastName}
                  className="edit-input"
                  readOnly
                />
              </label>
            </div>
          </div>

          </h2>

        ) : (
          <h2>{user && user.userName}</h2>
        )}
        {isEditing ? (
          <div>
            <button
              className="edit-button save-button"
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              className="edit-button cancel-button"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        )}
      </div>
      <Accounts />
    </main>
  );
}
