import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import Loader from "../../../assets/lotties/ButtonLoader.json";


export default function ButtonLoader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loader,
        rendererSettings: {},
    };


return <Container>
<Lottie options={defaultOptions} height={100} width={100}   />;
</Container>
}
const Container=styled.div`
  display: flex;
  justify-Content: center;
  align-items: center;
  height:50px;
  width:20%;
`;