import React from 'react'
import "./NavLink.css"
import { useHistory } from "react-router-dom";

function NavLink({Icon, title, closeNav}) {
    const history = useHistory();
    return (
        <div className="navLink" onClick={e => {
            history.push(`/${title}`);
            closeNav();
            }}>
            <Icon />
      <h4>{title}</h4>
        </div>
    )
}

export default NavLink
