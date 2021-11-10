import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontsize="large" className="header_icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RBdMO3i0cyTbtdkiKfj8j5TYDo3sPYJfgA&usqp=CAU"
      ></img>

    <IconButton>
        <ForumIcon fontsize="large" className="header_icon" />
      </IconButton>

    </div>
  );
}

export default Header;
