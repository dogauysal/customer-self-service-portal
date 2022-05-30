import axios, { AxiosResponse } from "axios";
import IDummyJsonResponse from "../models/IDummyJsonResponse";
import IUser from "../models/IUser";


axios.defaults.baseURL = "https://dummyjson.com";

const responseBody = (response: AxiosResponse) => response.data;

const Users = {
    getAll: (): Promise<IUser[]> => axios.get<IDummyJsonResponse>("/users").then((res) => res.data.users),
    getById: (id: number): Promise<IUser> => axios.get(`/users/${id}`)
}

export default {
    Users
}