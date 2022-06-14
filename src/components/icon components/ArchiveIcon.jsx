import {useAuth, useNotes} from "../../context";
import {addToArchive} from "../../services";

const ArchiveIcon = ({noteId, noteData}) => {
  const {auth} = useAuth();
  const {notesDispatch} = useNotes();
  const handleArchiveNote = () => {
    addToArchive(auth.token, noteId, noteData, notesDispatch);
  };
  return (
    <span
      className="icon-hover pd-xs br-full cursor-pointer"
      title="Archive"
      onClick={handleArchiveNote}
    >
    <i class="fa fa-archive" aria-hidden="true"></i>

    </span>
  );
};

export {ArchiveIcon};
