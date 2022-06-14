import {useState} from "react";
// import {toast} from "react-toastify";
import {useNotes} from "../context";
import {USER_ACTIONS} from "../reducer";
import {LabelInput} from "./index";

const LabelModal = ({toggleLabelModal}) => {
  const {notesState, notesDispatch} = useNotes();
  const [labelText, setLabelText] = useState("");

  const handleAddLabel = () => {
    if (labelText.trim().length > 0) {
      notesDispatch({type: USER_ACTIONS.ADD_NEW_LABEL, payload: labelText});
      setLabelText("");
    } else {
      toast.error("Label should not be empty");
    }
  };
  return (
    <div className="note-modal-overlay">
      <div className="label-modal-content pd-sm br-sm">
        <div className="flex-align-center just-con-sp-bt">
          <h4 className="fw-regular">Edit labels</h4>
          <span
            className=" pd-xs br-sm cursor-pointer icon-hover br-full"
            title="Close"
            onClick={() => toggleLabelModal((prev) => !prev)}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>

        <div className="flex-align-center">
          <input
          id="new-label-name-input"
            type="text"
            placeholder="Create new label"
            className="input-no-border"
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
          />
          <span
            className="cursor-pointer small-icon-hover br-full"
            title="Create label"
            onClick={handleAddLabel}
          >
           <i class="fa fa-check" aria-hidden="true"></i>
          </span>
        </div>
        {notesState.labels.length > 0 && (
          <div className="pd-bottom-lg">
            {notesState.labels.map((item) => (
              <LabelInput key={item.id} labelData={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export {LabelModal};
