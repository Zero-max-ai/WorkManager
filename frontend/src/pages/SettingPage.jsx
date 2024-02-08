import React from "react";
import SettingSideBar from "../components/SettingSideBar";

const SettingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border w-4/6 p-2">
        <h1 className="text-center text-2xl font-bold">Settings</h1>
        <div className="flex gap-2">
          <SettingSideBar />
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
