import axios from "axios";
// import {toast} from "react-toastify";
import {USER_ACTIONS} from "../reducer";

const addNote = async (token, note, notesDispatch) => {
  try {
    const response = await axios.post(
      "/api/notes",
      {note},
      {headers: {authorization: token}}
    );
    notesDispatch({
      type: USER_ACTIONS.ADD_NEW_NOTE,
      payload: response.data.notes,
    });
    toast.success("Added note");
  } catch (err) {
    console.error("add note", err);
    toast.error("Error in adding note");
  }
};

const editNote = async (token, noteId, note, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/${noteId}`,
      {note},
      {headers: {authorization: token}}
    );
    notesDispatch({type: USER_ACTIONS.EDIT_NOTE, payload: response.data.notes});
    toast.success("Edited note");
  } catch (err) {
    console.error("edit note", err);
    toast.error("Error in editing note");
  }
};

export {addNote, editNote};
