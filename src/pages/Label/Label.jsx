import {useParams} from "react-router-dom";
import {useNotes} from "../../context";
import {NavMenu, Header, Note, NoNotes} from "../../components";
import {getLabelNotes} from "../../utils";

const Label = () => {
  const {notesState} = useNotes();
  const params = useParams();
  return (
    <>
      <Header />
      <section className="app-ctn">
        <NavMenu />
        <div className="notes-ctn">
          <div className="all-notes">
            {getLabelNotes(params.labelName, notesState).length > 0 ? (
              getLabelNotes(params.labelName, notesState).map((item) => (
                <Note key={item._id} noteData={item} />
              ))
            ) : (
              <NoNotes icon="label" text="No notes with this label yet" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Label;
