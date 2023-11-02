import { useEffect, useRef, useState } from "react";

const EditText = ({
  name,
  placeholder = "",
  value = "",
  onSave = () => {},
}) => {
  const inputRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [savedText, setSavedText] = useState(value);

  useEffect(() => {
    setSavedText(value);
  }, [value, editMode]);

  const handleClickDisplay = () => {
    console.log(`El valor actual es ${value}`);
    setEditMode(true);
  };

  const handleBlur = () => {
    if (inputRef.current) {
      const { name: inputName, value: inputValue } = inputRef.current;
      onSave({
        name: inputName,
        value: inputValue,
      });
      setSavedText(inputValue);
      setEditMode(false);
    }
  };

  const handleKeydown = (e) => {
    // Keycode 13 is TODO
    if (e.keyCode === 13 || e.charCode === 13) {
      handleBlur();
      // Keycode 27 is TODO
    } else if (e.keyCode === 27 || e.charCode === 27) {
      handleBlur(false);
    }
  };

  const renderDisplayMode = () => {
    return <div onClick={handleClickDisplay}>{savedText || placeholder}</div>;
  };

  const renderEditMode = () => {
    return (
      <input
        ref={inputRef}
        onBlur={handleBlur}
        onKeyDown={handleKeydown}
        autoFocus
        value={savedText}
        name={name}
        placeholder={placeholder}
      />
    );
  };

  return editMode ? renderEditMode() : renderDisplayMode();
};

export default EditText;
