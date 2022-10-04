import styled from "styled-components"

const StyledError = styled.div`
width: 500px;
max-width: 90%;
border: 1px solid red;
background-color: lightcoral;
font-size: 26px;
text-align: center;
margin: 20px auto;
`

export default function ErrorMessage(props) {
  return (
    <StyledError>{props.children}</StyledError>
  )
}
