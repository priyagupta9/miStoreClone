import React from "react";
import "../styles/prenav.css"

function PreNavbar() {
  return (
    <div className="preNav">

      <div>
        <a href="https://www.mi.com/global/">INTERNATIONAL</a>
        <span>|</span>
        <a href="https://c.mi.com/global/">MI COMMUNITY</a>
        <span>|</span>
        <a href="http://en.miui.com/">MIUI</a>
        <span>|</span>
        <a href="https://event.mi.com/global/xiaomistudios">XIAOMI STUDIOS</a>
      </div>

      <div>
        <a href="https://buy.mi.com/global/site/login">SIGN IN</a>
        <span>|</span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fglobal%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fglobal%252Fstore%252F%26sign%3DM2ZmMjQ1YjFiNzk0YjEzYThkM2RhMGFkOTRmMmI5Mzc2NWQyODdlNg%2C%2C&sid=mi_overseaen&_locale=en">
          SIGN UP
        </a>
        <span>|</span>
      </div>
      
    </div>
  );
}

export default PreNavbar;
