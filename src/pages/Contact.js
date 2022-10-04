import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver} from "@hookform/resolvers/yup"
import HeadingH1 from './../components/HeadingH1';
import ErrorMessage from "../components/ErrorMessage";
import styled from "styled-components";

const StyledForm = styled.form`
margin: 0 auto;
display: flex;
flex-direction: column;
width: 300px;
max-width: 90vw;
justify-content: center;
align-items: center;

& input {
    width: 100%;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
}
`

export default function Contact() {
    const schema = yup.object().shape({
        firstname: yup.string().required("Please enter your first name").min(3, "Needs to be atleast 3 characters"),
        lastname: yup.string().required("Please enter your last name").min(4, "Needs to be atleast 4 characters"),
        email: yup.string().email("Enter a valid email: example@mail.com").required("Enter your email"),
        subject: yup.string().required("Choose subject"),
        message: yup.string().required("Enter your message").min(10, "Message needs to be atleast 10 characters")
    })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmit(data) {
        console.log(data)
      }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <HeadingH1>Contact</HeadingH1>
        <input {...register("firstname")} placeholder="First name..." />
        {errors.firstname && <ErrorMessage>{errors.firstname.message}</ErrorMessage> }
        <input {...register("lastname")} placeholder="Last name..." />
        {errors.lastname && <ErrorMessage>{errors.lastname.message}</ErrorMessage> }
        <input {...register("email")} placeholder="Email..." />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage> }
        <h3>Subject</h3>
        <select {...register("subject")}>
            <option value="">Choose..</option>
            <option value="hire">Hire me</option>
            <option value="coffee">Coffee date</option>
        </select>
        {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage> }
        <textarea {...register("message")} placeholder="Message..." />
        {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage> }
        <button>SEND</button>
    </StyledForm>
  )
}