import React, { useState } from "react";
import styled from "styled-components";
import AddtoCart from "../screen/AddtoCart";
import { Link } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const filteredData = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );
  return (
    <div>
      <MainConatiner>
        <Top>
          <IconContainer>
            <Icon>CRYPTO</Icon>
          </IconContainer>

          <InputField>
            <Field
              type="text"
              placeholder="search here.."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </InputField>
          <ItemsList>
            <ItemProduct to="/product">Product</ItemProduct>
            <Item>More</Item>
            <ItemCart to="/addtocart">Cart</ItemCart>
            <ItemButton to="/product">Shop Now</ItemButton>
          </ItemsList>
        </Top>
      </MainConatiner>
    </div>
  );
}
const MainConatiner = styled.div``;
const Top = styled.div`
  display: flex;
  width: 100%;
  height: 103px;
  align-items: center;
  justify-content: center;
  background: #2d3a31;
`;
const ItemsList = styled.ul`
  display: flex;
  width: 35%;
`;
const ItemButton = styled(Link)`
  list-style: none;
  font-size: 22px;
  margin-left: 10%;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #ffff;
  width: 126px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
const Item = styled.li`
  list-style: none;
  font-size: 22px;
  margin-left: 10%;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;
const IconContainer = styled.div`
  width: 17%;
`;
const Icon = styled.h3`
  font-size: 33px;
  font-weight: 700;
  color: #fff;
`;

const ItemCart = styled(Link)`
  list-style: none;
  font-size: 22px;
  margin-left: 10%;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;
const ItemProduct = styled(Link)`
  list-style: none;
  font-size: 22px;
  margin-left: 10%;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;

const InputField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
`;
const Field = styled.input`
  border: 1px solid #fff;
  height: 35px;
  width: 100%;
  border-radius: 5px;
`;

export default Header;
