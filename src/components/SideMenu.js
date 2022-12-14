import React, { useEffect, useState } from "react";
import logo from "../assets/logo/minh.png";
import user from "../assets/user.jpg";

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "About me",
    exact: true,
    to: "/",
    iconClassName: "bi bi-person-fill",
  },
  {
    name: "Portfolio",
    exact: true,
    to: `/Portfolio`,
    iconClassName: "bi bi-file-earmark-code-fill",
  },
  { 
    name: "Resume", 
    exact: true,
    to: `/Resume`, 
    iconClassName: "bi bi-file-earmark-text-fill" },
  
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="webscript" /> 
        </div>
        <div className="user-description">
          <div className="name">
            Quang Minh Tran
          </div>
          <div className="job">
            Software Engineer
          </div>
          <div className="country">
            Canada
          </div>
          <br></br>
          <div className="about">
            Hi, my name is Minh Tran and I'm an aspiring software engineer. Welcome to my personal website!
          </div>
        </div>
        <br></br>

        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      {/* <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div> */}
      

      <div className="divider"></div>
       <br></br> 
      <div className="social-icon">
      <a href="https://www.linkedin.com/in/minh-tran-297254217"><i class="bi bi-linkedin social-icons"></i></a>
      <a href="mailto: vnpalm@gmail.com"><i class="bi bi-envelope-fill social-icons"></i></a>
      <a href="https://github.com/hanaminhtran"><i class="bi bi-github social-icons"></i></a>
      <a href="https://facebook.com/hanaminhtranphotography"><i class="bi bi-facebook social-icons"></i></a>

      </div>


      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>
      <div className="divider"></div>

      <div className="side-menu-footer">
        
        <div className="user-info">
          <p>Phone: 403-613-1148 Email : vnpalm@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
