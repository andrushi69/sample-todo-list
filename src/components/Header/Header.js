import React from 'react';
import classes from "./Header.module.scss";
import SVG from "react-inlinesvg";

const Header = () => {
  return (
    <header className={`${classes.header_section} animate__animated animate__zoomIn animate__fast`}>
      <h1>Do your todo 🙃</h1>
      <div className={classes.header_link}>
        <p>Created by</p>
        <a target="_blank" href={"https://github.com/andrushi69/"}><SVG width={25} height={25} src={"./svg/gitHub.svg"}/></a>
      </div>

    </header>
  );
};

export default Header;