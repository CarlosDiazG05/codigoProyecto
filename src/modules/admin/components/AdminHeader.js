import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch , faCog, faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom";

const PosHeader = () => {
  return (
    <div>
      <header>
        <div className="header__main">
          <div className="search__main">
            <label for="search" className="search__label">
              <FontAwesomeIcon icon={faSearch} />
            </label>
            <input
              id="search"
              className="search__input"
              type="text"
              name="box"
              placeholder="Buscar"
            />
          </div>
          <div className="btns__admin">
            <button className="btn__header">  <NavLink className="nav-link" activeClassName="actve" to="/pos/user" >User</NavLink> </button>
            <button className="btn__header">  <NavLink className="nav-link" activeClassName="actve" to="/pos/admin/dashboard" >Dashboard</NavLink> </button>
          </div>
          <div className="btns_settings">
            <button className="btn__settings">
              {" "}
              <FontAwesomeIcon icon={faUserCircle} />
            </button>
            <button className="btn__settings">
              {" "}
              <FontAwesomeIcon icon={faCog} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PosHeader;
