import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <HeaderWrapper>
      <SuperHeader />
      <MainHeader>
        <Logo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Spacer />
      </MainHeader>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MainHeader = styled.div`
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav``;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  padding: 0 24px;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
