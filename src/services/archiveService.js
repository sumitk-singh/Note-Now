import axios from "axios";
// import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const addToArchive = async (token, noteId, note, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${noteId}`,
      {note},
      {headers: {authorization: token}}
    );
    notesDispatch({type: USER_ACTIONS.ADD_TO_ARCHIVE, payload: response.data});
    toast.success("Added to archive");
  } catch (err) {
    console.error("add to archive", err);
    toast.error("Error in adding to archive");
  }
};

const restoreFromArchive = async (token, noteId, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${noteId}`,
      {},
      {
        headers: {authorization: token},
      }
    );
    notesDispatch({
      type: USER_ACTIONS.RESTORE_FROM_ARCHIVE,
      payload: response.data,
    });
    toast.success("Note unarchived");
  } catch (err) {
    console.error("restore from archive", err);
    toast.error("Error in note unarchive");
  }
};

export {addToArchive, restoreFromArchive};
