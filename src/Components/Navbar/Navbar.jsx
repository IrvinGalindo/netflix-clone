import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setHandleShow(true);
      else setHandleShow(false);
    });
    return () => {
      if (window.scrollY > 0) window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${handleShow && "navbar__black"}`}>
      <img
        src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        alt="Netflix Logo"
        className="navbar__logo"
      />
      <img
        src="https://occ-0-4080-33.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABd0VJiB-jlZOa4mPM_JZLqrwJamcrjh4ZVC5RcX3P3tEVQ-uJNJ36uHQcaIQvtthwlh1Xj_6lCjDxONOY6wr8ow.png?r=f71"
        alt="Netflix Avatar"
        className="navbar__avatar"
      />
    </div>
  );
}

export default Navbar;
