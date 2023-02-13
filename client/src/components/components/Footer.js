import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterSection = styled.footer`
  width: 100%;
  background: white};
`;
const Container = styled.div`
  padding: 3rem calc((100% - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ColumnLeft = styled.div`
  font-size: 1.5rem;
  color: black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ColumnRight = styled.div`
  h3 {
    color: black};
    &:hover {
      cursor: pointer;
      color: red};
    }
  }
  div {
    margin: 1.5rem;
  }
  ul {
    padding: 0;
    list-style-type: none;
    li {
      margin: 0.4rem 0;
      color: black};
      &:hover {
        color: red};
        cursor: pointer;
      }
    }
  }
`;
const SocialLinks = styled.div`
  height: 100px;
  color: red};
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    margin: 0 0.4rem;
    &:hover {
      cursor: pointer;
      color: black};
    }
  }
`;

function Footer() {
  return (
    <FooterSection>
      <Container>
        <ColumnLeft>
          <h1>The smartest way to find your dream home</h1>
          
        <hr></hr>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>FAQs</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            
          </div>
        </ColumnLeft>
      </Container>
    </FooterSection>
  );
}

export default Footer;
