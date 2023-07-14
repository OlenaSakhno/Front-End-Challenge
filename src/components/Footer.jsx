import { StyledFooter, NavLinks, NavLink, FooterIcon } from "./Footer.elements";
import downloadIcon from "../img/download.png";
import home from "../img/home.png";
import menu from "../img/menu.png";

const Footer = () => {
  const padding = { padding: 5 };
  return (
    <StyledFooter>
      <NavLinks>
        <NavLink style={padding} to="/">
          <FooterIcon src={home} alt="homeIcon" />
        </NavLink>
        <NavLink style={padding} to="/Downloads">
          <FooterIcon src={downloadIcon} alt="downloadsIcon" />
        </NavLink>
        <NavLink style={padding} to="/more">
          <FooterIcon src={menu} alt="downloadsIcon" />
        </NavLink>
      </NavLinks>
    </StyledFooter>
  );
};

export default Footer;
