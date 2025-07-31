import axios from "axios";

export const api = axios.create({
    baseURL: `https://jocosehead-us.backendless.app/api/data/company-profile`,
    headers: {
        "Content-Type": "application/json"
    }
})