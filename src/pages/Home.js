import useApiCall from "../hooks/useApiCall"
import { APIURL } from '../constants/APIURL';
import FavButton from "../components/FavButton";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LoadingWheel from "../components/LoadingWheel";

const StyledItem = styled.div`
margin: 10px auto;
display: flex;
flex-direction: column;
justify-content: center;
max-width: 90%;
width: 500px;
border: 1px solid black;
border-radius: 10px;
padding: 10px;

& a {
    margin: 10px;
    text-decoration: none;
    color: black;
}

`


const siteUrl = APIURL + "products/"

export default function Home() {
    const { data, isLoading, isError} = useApiCall(siteUrl)

    if(isLoading) {
        return <LoadingWheel />
    }

    if(isError) {
        return <StyledItem>{isError.message}</StyledItem>
    }


    if(data.length > 0) {
       return data.map((item, key) => (
            <StyledItem key={key}>
                <NavLink to={`/detail/${item.id}`}><h2>{item.title}</h2></NavLink>
                <NavLink to={`/detail/${item.id}`}><h3>{item.price}</h3></NavLink>
                <FavButton id={key} />
                <NavLink to={`/detail/${item.id}`}>View</NavLink>
            </StyledItem>
        )
        )
    }
}