import styled from "styled-components";
import { Link } from "react-router-dom";
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 111px;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid;

  ul {
    display: flex;
    font-weight: 500;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--color-text);
    padding-left: 1em;
  }

  #nav-logo {
    font-weight: var(--semi-bold);
    font-size: 1.5em;
  }

  #nav-menu {
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    ul {
      display: none;
    }

    #nav-menu {
      display: block;
    }
  }
`;

function Nav() {
  return (
    <NavContainer>
      <div id="nav-logo">Blog</div>
      <div id="nav-menu">
        <img src="./icons/menu.svg" alt="Menu" />
      </div>
      <ul>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Newsletter">Newsletter</Link>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;