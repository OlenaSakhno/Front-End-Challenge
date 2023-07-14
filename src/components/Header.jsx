import { StyledHeader, Logo, NavLinks, NavLink } from "./Header.elements.js";
import netflixLogo from "../img/netflix-logo-png-2574.png";
const Header = () => {
  const padding = {
    padding: 5,
  };
  return (
    <StyledHeader>
      <Logo
        style={{ display: "inline", padding: "10px" }}
        src={netflixLogo}
        alt="Netflix"
      />
      {/* TODO change header content depends on page selected */}
      <NavLinks>
        <NavLink style={padding} to="/">
          Home
        </NavLink>
        <NavLink style={padding} to="/TVShows">
          TV Shows
        </NavLink>
        <NavLink style={padding} to="/movies">
          Movies
        </NavLink>
        <NavLink style={padding} to="/myList">
          My List
        </NavLink>
      </NavLinks>
    </StyledHeader>
  );
};

export default Header;
