import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ variantсolor }) => variantсolor};
    transform: scaleX(0);
    transition: transform 0.25s;
  }

  &::after {
    bottom: 12px;
    transform-origin: right;
  }

  &::before {
    top: 12px;
    transform-origin: left;
  }

  &:hover::before,
  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after,
  &.active::before {
    transform: scaleX(1);
  }
`;
