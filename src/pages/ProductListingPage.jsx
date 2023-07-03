import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Action/productActions";

const Container = styled.div``;
const Info = styled.div`
  display: flex;
  gap: 5px;
  color: ${({ theme }) => theme.text};
`;

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts("plan-list"));
  }, []);

  return (
    <Container>
      <Header />
      <Info>
        <InfoIcon sx={{ fontSize: "15px", marginTop: "3px" }}></InfoIcon>
        <Typography
          sx={{
            fontSize: "14px",
          }}
        >
          Initial recommandations are based on avarage medium usage as
          determined by relevant energy regulators, Please view the information
          hover next to the estimated cost box for more information. For more
          accurate comparision relevant to your circumstances, Please use the
          bill details tab on the result page to enter your most recent energy
          bill detials.
        </Typography>
      </Info>

      <Card />
      <Card />
      <Card />

      {/* {Object.keys(products).map((item, idx) => (
        <Card item={item} key={idx} />
      ))} */}
    </Container>
  );
};

export default ProductListingPage;
