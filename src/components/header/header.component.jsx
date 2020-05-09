import React from "react";
import { Link } from "react-router-dom";

import { createStructuredSelector } from "reselect";

import "./header.style.scss";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";

const Header = ({ hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <div className="logo" />
    </Link>
    <div className="options">
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
