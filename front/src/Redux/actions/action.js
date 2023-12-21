import axios from "axios";
export const GET_POSTS = "GET_POSTS";



export const getPosts = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3001/api-docs/#/User%20Module/post").then((res) => {

     console.log(res);
    });
  };
};