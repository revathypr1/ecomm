import React, { useState } from "react";

import styled from "styled-components";
import axios from "axios";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Header from "../include/Header";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [isModal, setModal] = useState(false);
  const [id, setId] = useState();
  console.log("{{{[", id);
  const [list, setList] = useState([]);
  console.log("Listttttttttttt", list);

  const fetchproducts = () => {
    axios
      .get(`https://fakestoreapi.com/products/`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  const cardsPerPage = 9;
  const pagesVisited = pageNumber * cardsPerPage;

  const pageCount = Math.ceil(products.length / cardsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const filteredData = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );
  return (
    <>
      <div>
        <MainContainer>
          <Header />
          <DivBox className="wrapper">
            {filteredData
              .slice(pagesVisited, pagesVisited + cardsPerPage)
              .map((products) => (
                <Box key={products.id} to={`${products.id}`}>
                  <Container>
                    <ImageContainer>
                      <Image src={products.image} alt="product" />
                    </ImageContainer>
                    <DivCard>
                      <CardTitle>{products.title}</CardTitle>

                      <Cardprice> {products.price}</Cardprice>
                    </DivCard>
                  </Container>
                </Box>
              ))}
          </DivBox>

          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </MainContainer>
      </div>
      {/* <Loader /> */}
    </>
  );
}

const DivCard = styled.div``;
const MainContainer = styled.div`
  padding-top: 20px;

  .paginationBttns a {
    margin-right: 10px;
    font-weight: 500;
    color: currentColor;
    cursor: pointer;
    &:hover {
      color: green;
    }
  }
`;

const DivBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 40px 0;
`;

const Box = styled(Link)`
  margin-bottom: 20%;
  width: 72%;
  border: 1px solid #d0cccc;
  border-radius: 7px;
  padding: 20px;
  cursor: pointer;

  border-radius: 7px;
  &:hover {
    box-shadow: 7px 6px 8px 1px #aaaaaa;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;
const Container = styled.div``;
const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const ImageContainer = styled.div`
  width: 55%;
  margin: 0 auto;
`;
const Image = styled.img`
  width: 100%;
  display: block;
  height: 130px;
`;
const CardTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #6a6262;
  font-weight: 600;
  height: 110px;
  margin: 0 auto;
`;
const Cardprice = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #6a6262;
  font-weight: 600;
  margin: 0 auto;
`;

export default Homepage;
