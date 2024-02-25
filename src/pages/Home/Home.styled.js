import styled from 'styled-components';
import BgImage from '../../images/hanson-lu-956EmlIRARQ-unsplash-min.jpg';

export const Wrapper = styled.div`
  padding: 80px 200px;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  background-position: center;
  /* width: 1240px; */
  width: 100vh
  height: 60vh;
  overflow: hidden;
`;

export const Heading = styled.h1`
  color: var(--white-text-color);
  text-align: center;
  margin-top: 250px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: var(--white-text-color);
  text-align: center;
  margin-top: 70px;
  margin-bottom: 120px;
  margin-left: auto;
  margin-right: auto;
`;
