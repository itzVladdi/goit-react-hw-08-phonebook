import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  padding: 10px;
  margin-bottom: 40px;
  border-radius: 5px;
  font-size: 24px;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const StyledLink = styled(NavLink)`
  display: inline;
  color: white;
  font-weight: 700;
  padding: 16px;
  position: relative;
  &:hover,
  &:focus,
  &.active {
    color: #ffa260;
  }
  &.active::after {
    content: '';
    width: 100%;
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: #ffa260;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const LogOutButton = styled.button`
  background: none;
  border: 1px solid #ffffff;
  font: inherit;
  border-radius: 4px;
  line-height: 1;
  margin: 0.5em;
  padding: 0.5em 1em;
  color: #ffffff;
  transition: 0.25s;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: #ffa260;
    color: #ffa260;
  }
`;
