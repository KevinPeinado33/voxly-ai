export interface LoginResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}

interface User {
    id: string;
    email: string;
    name: string;
    createdAt: string;
}

interface LoginResponseError {
    code: string;
    message: string;
}

export interface LoginResponseUnauthorizedError extends LoginResponseError { }

export interface LoginResponseUnprocessableError extends LoginResponseError {
    errors: {
        field: string;
        message: string;
    }[];
}

export interface LoginResponseInternalError extends LoginResponseError { }

