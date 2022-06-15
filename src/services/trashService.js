import axios from "axios";
// import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const addToTrash = async (token, noteId, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/trash/${noteId}`,
      {},
      {
        headers: {authorization: token},
      }
    );
    notesDispatch({type: USER_ACTIONS.ADD_TO_TRASH, payload: response.data});
    toast.success("Added to trash");
  } catch (err) {
    console.error("add to trash", err);
    toast.error("Error adding to trash");
  }
};

const restoreFromTrash = async (token, noteId, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/trash/restore/${noteId}`,
      {},
      {headers: {authorization: token}}
    );
    notesDispatch({
      type: USER_ACTIONS.RESTORE_FROM_TRASH,
      payload: response.data,
    });
    toast.success("Restored note");
  } catch (err) {
    console.error("restore from trash", err);
    toast.error("Error in restoring note");
  }
};

const deleteFromTrash = async (token, noteId, notesDispatch) => {
  try {
    const response = await axios.delete(`/api/trash/delete/${noteId}`, {
      headers: {authorization: token},
    });
    notesDispatch({
      type: USER_ACTIONS.DELETE_FROM_TRASH,
      payload: response.data.trash,
    });
    toast.success("Deleted note");
  } catch (err) {
    console.error("delete from trash", err);
    toast.error("Error in deleting from trash");
  }
};

export {addToTrash, restoreFromTrash, deleteFromTrash};
