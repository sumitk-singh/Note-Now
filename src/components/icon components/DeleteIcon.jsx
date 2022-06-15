import {useAuth, useNotes} from "../../context";
import {addToTrash} from "../../services";

const DeleteIcon = ({noteId}) => {
  const {auth} = useAuth();
  const {notesDispatch} = useNotes();

  const handleDeleteNote = () => {
    addToTrash(auth.token, noteId, notesDispatch);
  };
  return (
    <span
      className="icon-hover pd-xs br-full cursor-pointer"
      title="Delete note"
      onClick={handleDeleteNote}
    >
    <i class="fa fa-trash" aria-hidden="true"></i>

    </span>
  );
};

export {DeleteIcon};
