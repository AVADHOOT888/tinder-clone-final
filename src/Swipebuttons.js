import React from "react";
import "./Swipebuttons.css";
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";


function Swipebuttons() {
    return (
     <div className="swipeButtons">
    <IconButton>
        <ReplayIcon fontsize="large" className="swipeButtons__repeat" />
      </IconButton>
      <IconButton>
        <CloseIcon fontsize="large" className="swipeButtons__left" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontsize="large" className="swipeButtons__star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontsize="large" className="swipeButtons__right" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontsize="large" className="swipeButtons__lightning" />
      </IconButton>
      
      

</div>
  
      
    );
  }
  
  export default Swipebuttons;