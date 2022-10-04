import styled from "styled-components"

const StyledHeading = styled.h1`
font-size: 50px;
text-shadow: 2px 2px lightgreen;
text-align: center;
`

export default function HeadingH1(props) {
  return (
    <StyledHeading {...props}>{props.children}</StyledHeading>
  )
}