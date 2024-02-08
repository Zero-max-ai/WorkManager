const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-fit px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-md hover:text-white"
    >
      {title}
    </button>
  );
};

export default Button;
