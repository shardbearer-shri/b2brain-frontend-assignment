import React from "react";
import { FaHome } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { useState } from "react";
import compLogo from "../images/logo.png";
const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  const [prefOpen, setprefOpen] = useState(true);
  //   const somefunc = () => {};
  //   somefunc();
  return (
    <>
      <div className="navigation-container">
        <div className="nav__logo">
          <img src={compLogo} alt="" />
          <h2>B2Brain</h2>
        </div>
        <ul className="navigation-items">
          <li className="nav__item selected">
            <FaHome className="nav__item--icon" /> Dashboard
          </li>
          <li className="nav__item">
            <div className="nav__item--inner">
              <FaStar className="nav__item--icon" /> Intels
            </div>
            <div className="nav__item--pill">
              <p>4 Unread</p>
            </div>
          </li>
          <li className="nav__item">
            <div className="nav__item--inner">
              <FaUser className="nav__item--icon" /> Leads
            </div>
            <div className="nav__item--pill">
              <p>4 Unread</p>
            </div>
          </li>
          <li
            className="nav__item nav__item--drop"
            onClick={() => {
              setOpen((ele) => !ele);
            }}
          >
            <div className="nav__item--inner">
              <FaBuilding className="nav__item--icon" /> Accounts
            </div>
            {isOpen ? (
              <BsChevronDown className="nav__item--down" />
            ) : (
              <BsChevronUp className="nav__item--down" />
            )}
            {/* <BsChevronDown className="nav__item--down" /> */}
          </li>
          {isOpen ? (
            <ul className="nav__dropdown">
              <li>Manage all</li>
              <li>Track new accounts</li>
              <li>Bulk Import</li>
            </ul>
          ) : (
            ""
          )}
          <li
            className="nav__item nav__item--drop"
            onClick={() => {
              setprefOpen((ele) => !ele);
            }}
          >
            <div className="nav__item--inner">
              <BsFillGearFill className="nav__item--icon" /> Preferences{" "}
            </div>
            {prefOpen ? (
              <BsChevronDown className="nav__item--down" />
            ) : (
              <BsChevronUp className="nav__item--down" />
            )}
          </li>
          {prefOpen ? (
            <ul className="nav__dropdown">
              <li>Manage all</li>
              <li>Track new accounts</li>
              <li>Bulk Import</li>
            </ul>
          ) : (
            ""
          )}
          <li className="nav__item">
            <FaLink className="nav__item--icon" /> Integrations
          </li>
          <li className="nav__item">
            <FaUsers className="nav__item--icon" /> Team
          </li>
          <li className="nav__item">
            <TiMessages className="nav__item--icon" /> Help/Support
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
