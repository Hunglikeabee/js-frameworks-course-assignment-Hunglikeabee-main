import { useState, useContext } from "react"
import HeadingH1 from "../components/HeadingH1"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver} from "@hookform/resolvers/yup"
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { APIURL } from './../constants/APIURL';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorMessage from "../components/ErrorMessage";

const StyledField = styled.fieldset`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& input {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
}

& button {
    padding: 10px 20px;
    margin: 10px;
    background-color: lightgreen;
}
`


export default function Login() {

    const navigate = useNavigate();
    const loginUrl = APIURL + "auth/local"
    const schema = yup.object().shape({
        username: yup.string().required("Enter username"),
        password: yup.string().required("Enter password")
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    const [loggingInn, setLoggingInn] = useState(false)
    const [error, setError]  = useState(null)
    const [auth, setAuth] = useContext(AuthContext)

    const tryLogin = async (data) => {
    setLoggingInn(true)
    setError(null)

        try {
            const response = await axios.post(loginUrl, {
                identifier: data.username,
                password: data.password,
            })

            if(response.statusText === "OK") {
                setAuth(response.data.jwt)
                navigate("/")
            }
        }
        catch(e) {
            setError(e.message)
        }
        finally {
            setLoggingInn(false)
        }
    }


  return (
    <form onSubmit={handleSubmit(tryLogin)}>
        <HeadingH1>Login</HeadingH1>
        {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
        <StyledField disabled={loggingInn}>
            <input {...register("username")} placeholder="Username..." />
            {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            <input {...register("password")} type="password" placeholder="Password..." />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <button>LOGIN</button>
        </StyledField>
    </form>
  )
}