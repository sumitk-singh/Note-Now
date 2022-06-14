import {useNotes} from "../../context";
import {NavMenu, Header, Note, NoNotes} from "../../components";

const Archive = () => {
  const {notesState} = useNotes();
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="all-notes">
            {notesState.archives.length > 0 ? (
              [...notesState.archives]
                .reverse()
                .map((item) => <Note key={item._id} noteData={item} />)
            ) : (
              <NoNotes icon="archive" text="Your archived notes appear here" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Archive;
