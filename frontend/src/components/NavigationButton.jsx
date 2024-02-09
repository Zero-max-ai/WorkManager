import { Link } from "react-router-dom";

const NavigationButton = ({ path, title }) => {
  return (
    <Link
      className="w-fit px-3 rounded-md bg-purple-500 hover:bg-purple-600 duration-150 text-white hover:underline underline-offset-2"
      to={path}
    >
      {title}
    </Link>
  );
};

export default NavigationButton;
