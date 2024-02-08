import { useState } from "react";
import Input from "../components/Input.jsx";
import Password from "../components/Password.jsx";
import zod from "zod";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const zodSchema = zod.object({
    mail: zod.string().email().min(1),
    password: zod.string().min(6),
  });
  const loginHandler = () => {};
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-full w-2/6 flex flex-col gap-3 shadow-md px-4 py-3 rounded-lg">
        <h1 className="font-bold text-2xl">Welcome Back!</h1>
        <Input
          labelName={"MailId:"}
          id={"mail"}
          type={"email"}
          placeholder={"johndoe@mail.com"}
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <Password
          labelName={"Password:"}
          id={"password"}
          type={"password"}
          placeholder={"******"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          style={{ userSelect: "none" }}
          className="flex items-center justify-between"
        >
          <Button title={"Login"} onClick={() => loginHandler()} />
          <span>
            Don't have an Account?{" "}
            <Link to={"/signup"} className="text-green-500">
              SignUp
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
