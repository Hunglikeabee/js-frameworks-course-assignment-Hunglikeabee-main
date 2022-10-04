import styled from "styled-components"

const StyledLoading = styled.div`
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border: 2px solid white;
    border-top: 2px solid black;
    animation: circlerotate 2s forwards infinite linear;
    border-radius: 100%;

    @keyframes circlerotate {
        0% {
            transform: rotate(0deg);
            border-top: 2px solid black;
            border-right: 2px solid white;
        }
        50% {
            border-top: 5px solid gray;
            border-right: 5px solid orange;
            border-left: 5px solid orange;
        }
        100% {
            transform: rotate(360deg);
            border-top: 2px solid black;
            border-right: 2px solid white;
        }
    }
`

export default function LoadingWheel() {
  return (
    <StyledLoading />
  )
}