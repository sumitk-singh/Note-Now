import {PaletteIcon, PriorityIcon} from "./index";

const AddNoteOptions = ({
  handleAddNote,
  setNoteBackground,
  currentPriority,
  setCurrentPriority,
}) => {
  return (
    <>
   
      <div className="note-option">
        <PriorityIcon
          currentPriority={currentPriority}
          setCurrentPriority={setCurrentPriority}
          styleData={{left: 0}}
        />
        
        <PaletteIcon
          setNoteBackground={setNoteBackground}
          styleData={{left: "-1.5rem"}}
        />
        
      </div>
      <div>
        <span
          className="modal-cta-btn cursor-pointer pd-xs br-sm"
          onClick={handleAddNote}
        >
          Add Note
        </span>
      </div>
      
    </>
  );
};

export {AddNoteOptions};
