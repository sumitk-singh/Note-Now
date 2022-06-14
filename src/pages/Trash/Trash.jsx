import {useNotes} from "../../context";
import {NavMenu, Header, NoNotes, TrashedNote} from "../../components";

const Trash = () => {
  const {notesState} = useNotes();
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="all-notes">
            {notesState.trash.length > 0 ? (
              [...notesState.trash]
                .reverse()
                .map((item) => <TrashedNote key={item._id} noteData={item} />)
            ) : (
              <NoNotes icon="delete" text="No notes in trash" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trash