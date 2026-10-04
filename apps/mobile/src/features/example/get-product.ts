//[GET] https://dummyjson.com/products

import Axios from "axios";
import { ProductsAPI } from "./products";

const url = "https://dummyjson.com/products";

//ASYNC - AWAIT

export const getProducts = async () => {
    const response = await Axios.get<ProductsAPI>(url);

    console.log("pruebita", response);

    return response.data.products;


}