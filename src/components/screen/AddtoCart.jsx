import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import Header from "../include/Header";
import { GetContext } from "../routing/routers/AppRouter";

function AddtoCart() {
  const [drop, setDrop] = useState([]);
  const { items, setItems } = useContext(GetContext);
  const deleteitem = (id) => {
    let remainingItems = items.filter((product) => product.id !== id);
    setItems(remainingItems);
  };
  return (
    <div>
      <MainContainer className="wrapper">
        {items.map((item) => (
          <SubContainer>
            <LeftContainer>
              <ImageContainer>
                <ProductImage src={item.image} />
              </ImageContainer>
              <QualityBox>
                <Quality>qty</Quality>
                <MdArrowDropDown />
              </QualityBox>
            </LeftContainer>
            <RightContainer>
              <Title>{item.title}</Title>
              <Price>{item.price}</Price>
              <RemoveButton onClick={() => deleteitem(item.id)}>
                Remove
                <AiOutlineDelete />
              </RemoveButton>
            </RightContainer>
          </SubContainer>
        ))}
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
`;
const SubContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  width: 50%;
  margin-bottom: 31px;
`;
const ProductImage = styled.img`
  display: block;
  width: 100%;
`;
const QualityBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c7bfbf;
  width: 103px;
  height: 30px;
  border-radius: 5px;
`;
const Quality = styled.span`
  margin-right: 6px;
  font-size: 17px;
  font-weight: 500;
`;
const RightContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.span`
  font-size: 25px;
  font-weight: 500;
  display: flex;
  margin-bottom: 10px;
`;
const Price = styled.span`
  font-size: 25px;
  font-weight: 500;
  display: flex;
  margin-bottom: 10px;
`;
const RemoveButton = styled.div`
  width: 108px;
  height: 35px;
  font-size: 16px;
  border: 1px solid #d2cfcf;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a5858;
  cursor: pointer;
  &:hover {
    border: 1px solid #000;
  }
`;
export default AddtoCart;
