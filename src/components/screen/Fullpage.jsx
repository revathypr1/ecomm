import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../include/Header";
import AddtoCart from "./AddtoCart";
import { GetContext } from "../routing/routers/AppRouter";

export default function Fullpage() {
  const { items, setItems } = useContext(GetContext);
  const [data, setData] = useState([]);

  console.log("---------------", data);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  function buy(bought) {
    setItems([...items, bought]);
  }
  console.log(items);

  useEffect(() => {
    axios

      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header items={items} setItems={setItems} />
      <BackContainer className="wrapper">
        <Overlay></Overlay>
        <Modal>
          <TopDiv>
            <LeftDiv>
              <ImageContainer>
                <ProductImage src={data.image} alt="images" />
              </ImageContainer>
              <ProductName>{data.title}</ProductName>
            </LeftDiv>

            <RightDiv>
              <DivContent>
                <Description>{data.description}</Description>
                <Price>{data.price}</Price>
                {/* <Rate>{data.rating}</Rate> */}
              </DivContent>

              <CartTotal>
                <DivOne>
                  <Span onClick={() => setCount(count - 1)}>-</Span>
                  <Small id>{count}</Small>
                  <Span onClick={() => setCount(count + 1)}>+</Span>
                </DivOne>
                <DivMiddle>
                  <CartButton onClick={() => buy(data)}>Add to cart</CartButton>
                </DivMiddle>
              </CartTotal>
              <BuyContainer>
                <BuyButton>Buy Now</BuyButton>
              </BuyContainer>
            </RightDiv>
          </TopDiv>
        </Modal>
      </BackContainer>
    </>
  );
}
const BuyContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin-top: 31px;
`;
const BackContainer = styled.div``;
const Overlay = styled.div``;
const Modal = styled.div`
  padding-top: 50px;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border: 1px solid #d0cccc;
  border-radius: 5px;
  padding: 40px;
`;
const LeftDiv = styled.div`
  width: 50%;
`;
const ImageContainer = styled.div`
  width: 55%;
  margin: 0 auto;
`;
const BuyButton = styled.div`
  height: 45px;
  width: 160px;
  display: flex;
  background: #e61010;
  font-size: 16px;
  color: #ffff;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #000;
  }
`;
const ProductImage = styled.img`
  width: 100%;
  display: block;
`;
const ProductName = styled.span`
  font-size: 19px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-weight: 500;
`;
const RightDiv = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const CrossContainer = styled.div`
  width: 20px;
  cursor: pointer;
  position: absolute;
  top: -27px;
  right: -43px;
`;
const Cross = styled.img`
  width: 100%;
  display: block;
`;
const Description = styled.p`
  font-size: 18px;
`;
const Price = styled.span`
  font-size: 18px;
`;
const Rate = styled.span`
  font-size: 18px;
`;
const DivContent = styled.div``;
const CartTotal = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 33px;
`;
const DivOne = styled.div`
  border: 1px solid #b7a9a954;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  width: 120px;
  display: flex;
  width: 120px;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-around;
`;
const Span = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;
const Small = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;
const DivMiddle = styled.div``;
const CartButton = styled.div`
  height: 45px;
  width: 145px;
  display: flex;
  background: #000;
  font-size: 16px;
  color: #ffff;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #e61010;
  }
`;
const DivLast = styled.div``;
const ImageLike = styled.div``;
const Like = styled.div``;
