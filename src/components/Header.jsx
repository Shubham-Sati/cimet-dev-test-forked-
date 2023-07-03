import React from "react";
import styled from "styled-components";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/Action/themeAction";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

const Button = styled.div`
  background-color: ${({ theme }) => theme.buttonColor};
  color: #fff;
  display: flex;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Badge = styled.div`
  padding: 2px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: white;
  color: #000;
`;

// const Select = styled.select`
//   background-color: ${({ theme }) => theme.buttonColor};
//   color: #fff;
//   display: flex;
//   gap: 5px;
//   padding: 5px 10px;
//   border-radius: 5px;
//   align-items: center;
// `;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddressDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 920px) {
    display: none;
  }
`;

const Header = () => {
  const { darkMode } = useSelector((state) => state.theme);
  // const { products } = useSelector((state) => state.products);
  // const { currentPlan } = useSelector((state) => state.products);
  // const allKeys = Object.keys(products);

  // console.log(currentPlan)

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeTheme(event.target.darkMode));
  };

  return (
    <Container>
      <Button>
        Electricity
        <Badge>4</Badge>
      </Button>
      <RightSection>
        <Tooltip title={darkMode ? "Light Theme" : "Dark Theme"}>
          <Switch
            checked={darkMode}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            color="warning"
          />
        </Tooltip>

        <AddressDiv>
          <LocationOnIcon sx={{ fontSize: "20px" }} />
          <Typography style={{ fontWeight: "bold" }}>2000, NSW</Typography>
        </AddressDiv>

        <Button>
          <FilterAltIcon sx={{ fontSize: "21px" }} /> Filter
        </Button>
      </RightSection>
    </Container>
  );
};

export default Header;
