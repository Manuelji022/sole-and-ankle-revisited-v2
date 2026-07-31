import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, BREAKPOINTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileActions>
          <UnstyledButton aria-label="Search">
            <Icon id="search" size={24} strokeWidth={2} />
          </UnstyledButton>

          <UnstyledButton aria-label="Shopping bag">
            <Icon id="shopping-bag" size={24} strokeWidth={2} />
          </UnstyledButton>

          <UnstyledButton
            aria-label="Open menu"
            aria-expanded={showMobileMenu}
            onClick={() => setShowMobileMenu(true)}
          >
            <Icon id="menu" size={24} strokeWidth={2} />
          </UnstyledButton>

        </MobileActions>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    border-top: 4px solid ${COLORS.gray[900]};
    padding: 1.2rem 0.8rem;
    gap: 1.2rem;
    justify-content: space-between;
    height: fit-content;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
      display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}rem) {
    display: flex;
    gap: calc(32 / 20 * 1rem);
  }
`;
const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
