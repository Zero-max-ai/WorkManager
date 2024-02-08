import { Link } from "react-router-dom";
import { navigation_links } from "../shared/index.js";
import NavigationButton from "./NavigationButton.jsx";

const NavBar = () => {
  return (
    <header className="h-16 w-full border-b flex items-center">
      <nav className="h-full w-full flex items-center justify-between px-10">
        <Link to={'/'} className="font-bold text-2xl">WorkManager</Link>
        <div className="flex items-center gap-3">
          {navigation_links.map(({ path, title }) => {
            return (
              <Link className="font-semibold text-sm hover:underline underline-offset-2" key={path} to={path}>
                {title}
              </Link>
            );
          })}
          <NavigationButton path={'/login'} title={'LogIn'} />
          <NavigationButton path={'/signup'} title={'SignUp'} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
