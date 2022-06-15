import {useState} from "react";
import {useNotes} from "../../context";
import {useLocation} from "react-router-dom";
import {USER_ACTIONS} from "../../reducer";

const PriorityIcon = ({
  noteId,
  currentPriority,
  setCurrentPriority,
  styleData,
}) => {
  const [isEditPriority, setIsEditPriority] = useState(false);
  const {notesDispatch} = useNotes();
  const location = useLocation();
  const allPriority = ["Low", "Medium", "High"];

  const handlePriority = (priority) => {
    setCurrentPriority(() => priority);
    if (noteId) {
      notesDispatch({
        type: USER_ACTIONS.ADD_NOTE_PRIORITY,
        payload: {id: noteId, priority},
      });
      if (location.pathname === "/archive") {
        notesDispatch({
          type: USER_ACTIONS.ADD_NOTE_PRIORITY_IN_ARCHIVE,
          payload: {id: noteId, priority},
        });
      }
    }
  };
  return (
    <>
      <span
        className="priority fw-bold cursor-pointer"
        onClick={() => setIsEditPriority((prev) => !prev)}
      >
        {currentPriority}
      </span>
      {isEditPriority && (
        <div className="priority-option pd-sm br-sm" style={styleData}>
          {allPriority.map((item, index) => (
            <div key={index}>
              <input
                type="radio"
                id={item}
                name="priority"
                onChange={() => handlePriority(item)}
              />
              <label htmlFor={item} className="label-name cursor-pointer">
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export {PriorityIcon};
