import type { LoginResponse } from "../dtos/login.dto";
import type { LoginModelRequest } from "../models/login.model";

async function postLogin(loginData: LoginModelRequest) {

    try {

        const response = await fetch('https://google.com/v1/login', {
            method: 'POST',
            body: JSON.stringify(loginData) // request que se envia a la api
        }).then((res) => res.json());

        return response as LoginResponse;

    } catch (error: unknown) {
        console.error('Error in postLogin:', error);
        throw error;
    }
}
