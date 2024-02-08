const Input = ({ labelName, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{labelName}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-md px-2 py-1 outline-none ring-2"
      />
    </div>
  );
};

export default Input;
