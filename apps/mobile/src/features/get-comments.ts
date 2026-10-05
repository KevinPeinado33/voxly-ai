//POST https://jsonplaceholder.typicode.com/comments

import Axios from "axios";
import { CommentsAPI } from "./comments";



const url = "https://jsonplaceholder.typicode.com/comments";
export const getComments = async () => {
    const response = await Axios.get<CommentsAPI[]>(url);
    console.log("consumo comments", response)

    return response.data

}