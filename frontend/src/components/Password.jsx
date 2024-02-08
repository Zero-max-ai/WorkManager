import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";

const Password = ({ labelName, type, placeholder, value, onChange }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label>{labelName}</label>
      <span className="w-full flex items-center bg-white ring-2 rounded-md px-2">
        <input
          type={visible === true ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full py-1 outline-none bg-transparent"
        />
        <button
          className="px-2 shadow-sm bg-slate-200 rounded-md"
          onClick={() => setVisible((prev) => !prev)}
        >
          {visible ? <IoEyeSharp /> : <BiHide />}
        </button>
      </span>
    </div>
  );
};

export default Password;
