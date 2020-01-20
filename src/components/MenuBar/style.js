import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuBarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding: 0.8rem 0;
  right: 0;
  width: 3.75rem;
  height: 100vh;
  background: #282a36;
  border-left: 1px solid #f7a5a6;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: #f8f8f8;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &:hover {
    color: #f7a5a6;
  }

  .search {
    width: 27px;
    height: 27px;
  }

  .light {
    width: 25px;
    height: 25px;
    align-items: center;
    display: flex;
  }

  .cv {
    width: 23px;
    height: 23px;
  }

  .home {
    width: 28px;
    height: 28px;
  }
`;