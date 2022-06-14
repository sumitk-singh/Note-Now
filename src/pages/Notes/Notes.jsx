import "./Notes.css";
import { useState } from "react";
import { getNotesByPriority, getNotesByDate, getSearchNotes } from "../../utils";
import {
  NavMenu,
  Header,
  Note,
  NoNotes,
  FilterIcon,
  NoteModal,
} from "../../components";
import { useNotes } from "../../context";

const Notes = () => {
  const [filterData, setFilterData] = useState({
    currentPriority: "",
    sortBy: "",
  });
  const [searchInput, setSearchInput] = useState("");
  const { notesState } = useNotes();
  const [isAddNote, setIsAddNote] = useState(false);

  const searchNotes = getSearchNotes(notesState.notes, searchInput);
  const priorityNotes = getNotesByPriority(
    searchNotes,
    filterData.currentPriority
  );
  const sortedNotes = getNotesByDate(priorityNotes, filterData.sortBy);
  const pinnedNotes = sortedNotes.filter((item) => item.isPinned);
  const unPinnedNotes = sortedNotes.filter((item) => !item.isPinned);

  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="search-bar">

            <FilterIcon filterData={filterData} setFilterData={setFilterData} />
          </div>
          <div className="all-notes">
           
            {unPinnedNotes.length
              ? unPinnedNotes.map((item) => (
                <Note key={item._id} noteData={item} />
              ))
              : ""}
           
          </div>
          <div className="mobile-add-cta">
            <button
              className="btn-float-action cursor-pointer"
              onClick={() => setIsAddNote((prev) => !prev)}
            >
              <span className="material-icons">add</span>
            </button>
            {isAddNote && (
              <NoteModal setIsModalOpen={setIsAddNote} isAddNote={isAddNote} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Notes
