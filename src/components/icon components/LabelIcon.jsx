import { useState } from "react";
import { useNotes } from "../../context";
import { isLabelInNote } from "../../utils";
import { editNote } from "../../services";
import { useAuth } from "../../context";

const LabelIcon = ({ noteData, styleData }) => {
  const [isAddLabel, setIsAddLabel] = useState(false);
  const { notesState, notesDispatch } = useNotes();
  const { auth } = useAuth();

  const handleAddLabelToNote = (labelToAdd) => {
    const isLabelPresent = isLabelInNote(noteData.labels, labelToAdd);
    if (isLabelPresent) {
      const newLabels = noteData.labels.filter((item) => item !== labelToAdd);
      editNote(
        auth.token,
        noteData._id,
        { ...noteData, labels: newLabels },
        notesDispatch
      );
    } else {
      const newLabels = [...noteData.labels, labelToAdd];
      editNote(
        auth.token,
        noteData._id,
        { ...noteData, labels: newLabels },
        notesDispatch
      );
    }
  };
  return (
    <>
      <span
        className="icon-hover pd-xs br-full cursor-pointer"
        title="Add label"
        onClick={() => setIsAddLabel((prev) => !prev)}
      >
        <i class="fa fa-tag" aria-hidden="true"></i>
      </span>
      {isAddLabel && (
        <div className="label-list-card pd-sm br-sm" style={styleData}>
          <p className="pd-bottom-md">Select Label</p>
          {notesState.labels.map((item) => (
            <div className="flex-align-center pd-bottom-md" key={item.id}>
              <input
                type="checkbox"
                name={item.label}
                checked={isLabelInNote(noteData.labels, item.label)}
                id={item.label}
                className="cursor-pointer"
                onChange={() => handleAddLabelToNote(item.label)}
              />
              <label htmlFor={item.label} className="label-name cursor-pointer">
                {item.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export { LabelIcon };
