import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: transporent;
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 12px;
  @media screen and (max-width: 425px) {
    gap: 8px;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
  @media screen and (max-width: 425px) {
    gap: 5px;
    flex-direction: column;
  }
`;

export const SocialNet = styled.a`
  color: var(--secondary-black-color);
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;

  &.active {
    color: var(--light-blue-color);
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: var(--dark-blue-color);
    transform: scale(1.05);
  }
`;
export const Span = styled.span`
  vertical-align: top;
`;
