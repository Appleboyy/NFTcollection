import React from "react";
import styled from "styled-components";
import { Logo } from "./";
import Button from "./Button";
import { MenuItem, Menu, Section, NavBar } from "./NavigationStyle.js";

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button text="Connect Wallet" link="https://google.com" />
      </NavBar>
    </Section>
  );
};

export default Navigation;
