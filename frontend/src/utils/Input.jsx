const Input = ({
  inputRef,
  handleBlur,
  handleKeydown,
  defaultValue,
  name,
  placeholder,
}) => {
  return (
    <input
      ref={inputRef}
      onBlur={handleBlur}
      onKeyDown={handleKeydown}
      autoFocus
      defaultValue={defaultValue}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
