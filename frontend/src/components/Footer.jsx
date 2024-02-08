import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" border h-16 w-full px-10 flex items-center">
      <div className="">
        <Link to={"/"} className="font-bold text-2xl">
          WorkManager
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
