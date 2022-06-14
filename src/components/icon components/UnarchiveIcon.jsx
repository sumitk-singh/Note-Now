import {useAuth, useNotes} from "../../context";
import {restoreFromArchive} from "../../services";

const UnarchiveIcon = ({noteId}) => {
  const {auth} = useAuth();
  const {notesDispatch} = useNotes();

  const handleUnarchiveNote = () => {
    restoreFromArchive(auth.token, noteId, notesDispatch);
  };
  return (
    <span
      className="icon-hover pd-xs br-full cursor-pointer"
      title="Unarchive"
      onClick={handleUnarchiveNote}
    >
      <i class="fa fa-square" aria-hidden="true"></i>
    </span>
  );
};

export {UnarchiveIcon};
