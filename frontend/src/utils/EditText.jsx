import { useEffect, useRef, useState } from "react";
import Input from "./Input";

const EditText = ({ name, placeholder = "", value, onSave = () => {} }) => {
  const inputRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [savedText, setSavedText] = useState("");

  useEffect(() => {
    if (value !== undefined) {
      setSavedText(value);
    }
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
    if (e.keyCode === 13 || e.charCode === 13) {
      handleBlur();
    } else if (e.keyCode === 27 || e.charCode === 27) {
      handleBlur(false);
    }
  };

  const renderDisplayMode = () => {
    return <div onClick={handleClickDisplay}>{savedText || placeholder}</div>;
  };

  const renderEditMode = () => {
    const sharedProps = {
      inputRef: inputRef,
      handleBlur: handleBlur,
      handleKeydown: handleKeydown,
    };
    return (
      <Input
        {...sharedProps}
        defaultValue={savedText}
        name={name}
        placeholder={placeholder}
      />
    );
  };

  return editMode ? renderEditMode() : renderDisplayMode();
};

export default EditText;
