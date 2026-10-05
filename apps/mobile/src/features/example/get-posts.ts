
//[GET] https://jsonplaceholder.typicode.com/posts

import Axios from "axios";
import { PostsAPI } from "./posts";


const url = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
    const response = await Axios.get<PostsAPI[]>(url);

    console.log("consumo api post", response.data);

    return response.data;
}