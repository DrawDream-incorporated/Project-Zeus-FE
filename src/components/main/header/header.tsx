import "./Header.css";
import { Input, Switch, useMantineTheme, rem } from "@mantine/core";
import { IconSun, IconMoonStars, IconSearch } from "@tabler/icons-react";
import companylogo from "../../../images/konada-logo.png";

const Header = () => {
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <div>
      <div className="header">
        <img className="companyLogo" src={companylogo} alt="company logo" />
        <div className="headerTitle">
          <span>Q&A</span>
          <span>Knowledge</span>
          <span>Community</span>
          <span>Event</span>
          <span>Announcement</span>
        </div>
        <Input placeholder="Search" leftSection={<IconSearch size={16} />} />
        <Switch
          size="md"
          color="dark.4"
          onLabel={sunIcon}
          offLabel={moonIcon}
        />
        <button className="logIn">Login</button>
        <button className="signUp">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
