import { useState, useRef } from "react";
import { useNotes } from "../context";
import { USER_ACTIONS } from "../reducer";

const LabelInput = ({ labelData }) => {
  const [labelText, setLabelText] = useState(labelData.label);
  const [isEditLabel, setIsEditLabel] = useState(false);
  const { notesDispatch } = useNotes();
  const inputRef = useRef(null);

  const handleDeleteLabel = () => {
    notesDispatch({ type: USER_ACTIONS.DELETE_LABEL, payload: labelData.id });
  };

  const handleEditLabel = () => {
    inputRef.current.focus();
    setIsEditLabel((prev) => !prev);
  };

  const handleRenameLabel = () => {
    notesDispatch({
      type: USER_ACTIONS.RENAME_LABEL,
      payload: { id: labelData.id, newLabel: labelText },
    });
    setIsEditLabel((prev) => !prev);
  };
  return (
    <div className="flex-align-center">
      <span
        className="label-list-icon cursor-pointer small-icon-hover br-full"
        title="Delete label"
        onClick={handleDeleteLabel}
      >
        delete 
      </span>
      <input
        type="text"
        placeholder="test"
        className="input-no-border"
        ref={inputRef}
        id={labelText}
        value={labelText}
        onChange={(e) => setLabelText(e.target.value)}
      />
      {isEditLabel ? (
        <span
          className="label-list-icon cursor-pointer small-icon-hover br-full"
          onClick={handleRenameLabel}
        >
          done
        </span>
      ) : (
        <label
          className="label-list-icon cursor-pointer small-icon-hover br-full"
          title="Rename label"
          htmlFor={labelText}
          onClick={handleEditLabel}
        >
          edit
        </label>
      )}
    </div>
  );
};

export { LabelInput };
