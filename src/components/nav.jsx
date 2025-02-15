import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;

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
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Newsletter</a>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;