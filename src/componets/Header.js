import React from "react";
import "./Header.css";
import BluetoothSearchingIcon from '@mui/icons-material/BluetoothSearching';
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="logo"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text">
          <BluetoothSearchingIcon className="header_searchIcon" />
        </input>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_OptionLineOne">Hello Guest</span>
          <span className="header_OptionLineTwo">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_OptionLineOne">Returns</span>
          <span className="header_OptionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_OptionLineOne">Your</span>
          <span className="header_OptionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
