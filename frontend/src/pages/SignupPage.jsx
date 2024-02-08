import { useState } from "react";
import Input from "../components/Input.jsx";
import Password from "../components/Password.jsx";
import zod from "zod";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const zodSchema = zod.object({
    username: zod.string().min(3),
    mail: zod.string().email().min(1),
    password: zod.string().min(6),
  });
  const signupHandler = () => {};
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-full w-2/6 flex flex-col gap-3 shadow-md px-4 py-3 rounded-lg">
        <h1 className="font-bold text-2xl">Welcome Back!</h1>
        <Input
          labelName={"Username:"}
          id={"username"}
          type={"text"}
          placeholder={"johndoe_13"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          <Button title={"SignUp"} onClick={() => signupHandler()} />
          <span>
            Already have an Account?{" "}
            <Link to={"/login"} className="text-green-500">
              LogIn
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
