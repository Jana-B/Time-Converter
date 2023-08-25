import React, { useState } from "react";
import styled from "styled-components";
import kitty1 from "./images/cat.png";
import kitty2 from "./images/cat(1).png";
import kitty3 from "./images/cat(2).png";
import kitty4 from "./images/kitty.png";
import kitty5 from "./images/work-from-home.png";
import { decimalToDuration, durationToDecimal } from "./durationUtils"; // Update the path as needed

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff6b6b, #ffb966, #87ff65);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
  width: 200px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2); /* Transparent white */
  border: none;
  color: #fff;
  &:focus {
    outline: none;
    background-color: rgba(
      255,
      255,
      255,
      0.3
    ); /* Slightly more visible on focus */
  }
`;

const Header = styled.header`
  background-color: rgba(255, 255, 255, 0.2); /* Transparent white */
  padding: 30px;
  text-align: center;
  width: 100%;
  position: fixed;
  top: 0;
  color: white;
`;

const Title = styled.h1`
  font-size: 34px;
  margin: 0;
`;

const Footer = styled.footer`
  background-color: rgba(255, 255, 255, 0.2); /* Transparent white */
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 50px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  margin-right: 16px;
`;

const Link = styled.a`
  color: #f4f4f4;
  text-decoration: none;
  padding: 15px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const KittyHeader = styled.img`
  position: relative;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
`;

const KittyListLeft = styled.img`
  top: 10px;
  left: 10px;
  width: 60px;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${kitty2});
  background-repeat: repeat;
`;

function App() {
  const [decimalValue, setDecimalValue] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const decimalRegex = /^\d+(\.\d*)?$/;

  const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue === "" || decimalRegex.test(newValue)) {
      setDecimalValue(newValue);
      const decimal = newValue === "" ? 0 : parseFloat(newValue);
      const durationString = decimalToDuration(decimal);
      setDurationValue(durationString);
    }
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDurationValue(newValue);
    const decimal = durationToDecimal(newValue);
    setDecimalValue(decimal.toString());
  };

  return (
    <BackgroundContainer>
      <Container>
        <Header>
          <Title>Time Converter</Title>
          <KittyHeader src={kitty3} alt="Cute Cat" />
        </Header>
        <InputContainer>
          <label>Decimal Duration</label>
          <Input
            type="text"
            value={decimalValue}
            onChange={handleDecimalChange}
          />
          <label>Duration (HH:MM)</label>
          <Input
            type="text"
            value={durationValue}
            onChange={handleDurationChange}
          />
        </InputContainer>
        <Footer>
          <LinkList>
            <ListItem>
              <KittyListLeft src={kitty4} />
            </ListItem>
            <ListItem>
              <Link
                href="https://www.flaticon.com/free-icons/cute"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cute icons created by Freepik - Flaticon
              </Link>
              <ListItem></ListItem>
            </ListItem>
          </LinkList>
        </Footer>
      </Container>
    </BackgroundContainer>
  );
}

export default App;
