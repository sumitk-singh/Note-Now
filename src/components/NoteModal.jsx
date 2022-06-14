import {useState} from "react";
import {addNote, editNote} from "../services";
import {useAuth, useNotes} from "../context";
import {isNoteEmpty} from "../utils";
import {AddNoteOptions, EditNoteOptions} from "./index";

const NoteModal = ({setIsModalOpen, noteData, isAddNote}) => {
  const [noteTitle, setNoteTitle] = useState(
    noteData?.noteTitle ? noteData.noteTitle : ""
  );
  const [noteText, setNoteText] = useState(
    noteData?.noteText ? noteData.noteText : ""
  );
  const [noteBackground, setNoteBackground] = useState(
    noteData?.noteBgColor ? noteData.noteBgColor : ""
  );
  const [currentPriority, setCurrentPriority] = useState(() =>
    noteData?.notePriority ? noteData.notePriority : "Low"
  );
  const [isNotePinned, setIsNotePinned] = useState(!!noteData?.isPinned);
  const {auth} = useAuth();
  const {notesDispatch} = useNotes();

  const handleAddNote = () => {
    if (!isNoteEmpty(noteTitle, noteText)) {
      addNote(
        auth.token,
        {
          noteTitle,
          noteText,
          date: new Date().toString(),
          labels: [],
          noteBgColor: noteBackground,
          notePriority: currentPriority,
          
        },
        notesDispatch
      );
      setIsModalOpen((prev) => !prev);
    }
  };

  const handleEditNote = () => {
    if (!isNoteEmpty(noteTitle, noteText)) {
      editNote(
        auth.token,
        noteData._id,
        {
          noteTitle,
          noteText,
          date: new Date().toString,
          noteBgColor: noteBackground,
          notePriority: currentPriority,
         
        },
        notesDispatch
      );
      setIsModalOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="note-modal-overlay"
      onClick={() => setIsModalOpen((prev) => !prev)}
    >
      <div
      id="note-input-ctn"
        className={`modal-content pd-sm ${noteBackground}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="input-title-ctn">
          <input
            type="text"
            placeholder="Title"
            className={`input-field ${noteBackground}`}
            autoFocus
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        
        </div>
        <textarea
          className={`note-textarea ${noteBackground}`}
          placeholder="Take a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        {noteData?.labels.length > 0 && (
          <div className="labels-ctn">
            {noteData.labels.map((item, index) => (
              <label className="label-chip br-full" key={index}>
                {item}
              </label>
            ))}
          </div>
        )}
        <div className="note-option-ctn">
          {isAddNote ? (
            <AddNoteOptions
              handleAddNote={handleAddNote}
              setNoteBackground={setNoteBackground}
              currentPriority={currentPriority}
              setCurrentPriority={setCurrentPriority}
            />
          ) : (
            <EditNoteOptions
              handleEditNote={handleEditNote}
              noteData={noteData}
              setNoteBackground={setNoteBackground}
              currentPriority={currentPriority}
              setCurrentPriority={setCurrentPriority}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export {NoteModal};
