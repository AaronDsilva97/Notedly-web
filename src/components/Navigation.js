import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <p>This it Navigation page</p>
      <ul>
        <li>
          <Link to="/">
            <span aria-hidden="true" role="img">
              🏡
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/mynotes">
            <span aria-hidden="true" role="img">
              🗒️
            </span>
            My Notes
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <span aria-hidden="true" role="img">
              💙
            </span>
            Favorties
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
