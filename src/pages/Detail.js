import {useParams} from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import { APIURL } from "../constants/APIURL"
import { useState, useEffect } from "react"
import HeadingH1 from './../components/HeadingH1';

const StyledItem = styled.div`
text-align: center;
max-width: 90%;
width: 500px;
margin: 0 auto;
`


export default function Detail() {

  const {param} = useParams()

  const url = APIURL + `products/${param}`

  const [details, setDetails] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getDetail() {
      try {
        const apiRequest = await axios.get(url)
        setDetails(apiRequest.data)
      }
      catch (e) {
        setError(e.toString())
      }
    }
    getDetail();
  }, [url])

  return (
    <StyledItem>
      <HeadingH1>{details.title}</HeadingH1>
      <h2>{details.price}</h2>
      <h3>{details.description}</h3>
    </StyledItem>
  )
}
