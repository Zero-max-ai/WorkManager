import React from "react";
import { setting_details } from "../shared";
import { Link } from "react-router-dom";

const SettingSideBar = () => {
  return (
    <div className="w-1/6">
      <div className="flex flex-col gap-2">
        {setting_details.map(({ path, title }) => {
          return (
            <Link
              to={path}
              key={title}
              className="w-full bg-slate-300 rounded-md active:bg-slate-200"
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SettingSideBar;
