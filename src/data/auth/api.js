import { post, get } from "common/request"

export const loginRequest = data => post("auth/login", data)

export const registerRequest = data => post("auth/register", data)

export const userRequest = () => get("auth/info")
