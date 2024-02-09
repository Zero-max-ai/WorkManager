import NavigationButton from "../components/NavigationButton.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center">
      {/*  */}
      <div className="flex flex-col items-center py-5 text-center">
        <span className="font-bold text-3xl">Write, plan, share.</span>
        <span className="font-semibold text-xl">
          A place where you write only what is important to you.
        </span>
        <div className="text-xl pt-2">
          <NavigationButton path={"/login"} title={"Get WorkManager free ->"} />
        </div>
      </div>

      {/*  */}
      <div className=""></div>
    </div>
  );
};

export default HomePage;
