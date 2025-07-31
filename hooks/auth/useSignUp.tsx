import { api } from "@/utils/api";
import { useState } from "react";

interface ISignUpPayload {
  name: string;
  email: string;
  password: string;
}

const useSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);

    const signUp = async (payload: ISignUpPayload) => {
        try {
            setIsLoading(true);

            const response = await api.post("/users", payload);
            return response.data;
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, signUp };
}

export default useSignUp;

