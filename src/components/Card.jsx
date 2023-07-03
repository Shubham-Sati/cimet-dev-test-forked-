import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import InfoIcon from "@mui/icons-material/Info";
import DoneIcon from "@mui/icons-material/Done";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.soft};
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 5px;
  margin-top: 35px;
  position: relative;
`;

const Badges = styled.div`
  display: flex;

  gap: 10px;
  position: absolute;
  top: -13px;
  padding-left: 25px;
`;

const Div = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 2px 15px;

  align-items: center;
  gap: 5px;
`;

const DetailsSection = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 920px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const DetailDiv = styled.div`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

const PriceCard = styled.div`
  width: 200px;
`;

const PriceCardHeader = styled.div`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #0066b2;
  color: white;
`;

const Price = styled.div`
  padding: 5px 15px;
  background-color: #ace2fb;
`;

const DescriptionSection = styled.div`
  margin: 10px 0;
  padding: 0 25px;
`;
const GetConnection = styled.div`
  padding: 10px 25px 25px 25px;
  background-color: ${({ theme }) => theme.soft};
  display: flex;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  padding-top: 10px;
`;
const RightDiv = styled.div``;
const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  color: #fff;
  padding: 14px 14px;
  border-radius: 20px;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const Card = ({ item }) => {
  return (
    <Container>
      <Badges>
        <Div>
          <LightbulbIcon sx={{ fontSize: "16px" }} />
          <Typography sx={{ fontSize: "14px" }}>Electricity</Typography>
        </Div>
        <Div>
          <SolarPowerIcon sx={{ fontSize: "16px" }} />
          <Typography sx={{ fontSize: "14px" }}>Solar</Typography>
        </Div>
      </Badges>
      <DetailsSection>
        <DetailDiv>
          <img
            src="https://devcore02.cimet.io/uploads/providers_logo/5_EnergyAustralia.png"
            alt="Not Found"
            style={{ width: "200px", height: "100px" }}
          ></img>
          <Typography sx={{ color: "#06aae1" }}>View Details</Typography>
          <Typography sx={{ color: "#06aae1" }}>
            Basic Plan Information Document
          </Typography>
        </DetailDiv>

        <DetailDiv>
          <Typography sx={{ fontSize: "14px" }}>
            25% less than the current reference price
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            <DoneIcon
              sx={{
                fontSize: "20px",
              }}
            />
            12 Month Energy Plan Period.
            <DoneIcon
              sx={{
                fontSize: "20px",
              }}
            />
            No Lock-In Contract.{" "}
            <DoneIcon
              sx={{
                fontSize: "20px",
              }}
            />
            No Exit Fees.{" "}
            <DoneIcon
              sx={{
                fontSize: "20px",
              }}
            />
            $100 Cradit(Including GST) prorated Daily
          </Typography>
          {/* <Typography sx={{ fontSize: "14px" }}>
            12 Month Energy Plan Period. No Lock-In Contract. No Exit Fees. $100
            Cradit(Including GST) prorated Daily
          </Typography> */}
          <Typography
            sx={{
              padding: "0 10px",
              borderRadius: "3px",
              color: "#00308F",
              fontSize: "14px",
              backgroundColor: "#a3cadc",
            }}
          >
            Standard Feed in Tariff:5c
          </Typography>
        </DetailDiv>

        <DetailDiv>
          <PriceCard>
            <PriceCardHeader>
              <Typography>Estimated cost</Typography>
              <InfoIcon sx={{ fontSize: "15px", marginTop: "3px" }}></InfoIcon>
            </PriceCardHeader>
            <Price>
              <Typography
                sx={{ color: "#00308F", fontSize: "25px", fontWeight: "bold" }}
              >
                $590^
                <span style={{ fontSize: "14px", color: "gray" }}>/yr</span>
              </Typography>
              <Typography
                sx={{ color: "#0066b2", fontSize: "15px", fontWeight: "bold" }}
              >
                $84^
                <span style={{ fontSize: "14px", color: "gray" }}>/mo</span>
              </Typography>
            </Price>
          </PriceCard>
        </DetailDiv>
      </DetailsSection>
      <DescriptionSection>
        <Typography sx={{ fontSize: "14px" }}>
          12 Month Energy Plan Period. No Lock-In Contract. No Exit Fees. $100
          Cradit(Including GST) prorated Daily12 Month Energy Plan Period. No
          Lock-In Contract. No Exit Fees. $100 Cradit(Including GST) prorated
          Daily12 Month Energy Plan Period. No Lock-In Contract. No Exit Fees.
          $100 Cradit(Including GST) prorated.
        </Typography>
      </DescriptionSection>
      <GetConnection>
        <LeftDiv>
          <Typography sx={{ fontSize: "14px" }}>
            25% less than the current reference price
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            12 Month Energy Plan Period. No Lock-In Contract. No Exit Fees. $100
            Cradit(Including GST) prorated Daily
          </Typography>
        </LeftDiv>
        <RightDiv>
          <Button>Connect Online Today</Button>
        </RightDiv>
      </GetConnection>
    </Container>
  );
};

export default Card;
