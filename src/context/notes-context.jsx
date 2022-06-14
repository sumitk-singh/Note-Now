import axios from "axios";
import {createContext, useContext, useReducer, useEffect} from "react";
import {notesReducer, USER_ACTIONS} from "../reducer";

const NotesContext = createContext();

const initialValue = {
  notes: [],
  archives: [],
  trash: [],
  labels: [],
};

const token = localStorage.getItem("token");

const NotesProvider = ({children}) => {
  token &&
    useEffect(() => {
      (async () => {
        try {
          const response = await axios.get("/api/notes", {
            headers: {authorization: token},
          });
          notesDispatch({
            type: USER_ACTIONS.INITIAL_NOTES,
            payload: response.data.notes,
          });
        } catch (err) {
          console.error("get initial notes", err);
        }
      })();
    }, []);
  const [notesState, notesDispatch] = useReducer(notesReducer, initialValue);
  return (
    <NotesContext.Provider value={{notesState, notesDispatch}}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export {NotesProvider, useNotes};
