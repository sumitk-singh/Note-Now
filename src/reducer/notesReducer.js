import {v4 as uuid} from "uuid";
import {USER_ACTIONS} from "./constant";

const notesReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.INITIAL_NOTES:
    case USER_ACTIONS.ADD_NEW_NOTE:
    case USER_ACTIONS.EDIT_NOTE:
      return {...state, notes: action.payload};
    case USER_ACTIONS.ADD_TO_ARCHIVE:
    case USER_ACTIONS.RESTORE_FROM_ARCHIVE:
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };
    case USER_ACTIONS.ADD_TO_TRASH:
    case USER_ACTIONS.RESTORE_FROM_TRASH:
      return {
        ...state,
        notes: action.payload.notes,
        trash: action.payload.trash,
      };
    case USER_ACTIONS.DELETE_FROM_TRASH:
      return {...state, trash: action.payload};
    case USER_ACTIONS.ADD_NEW_LABEL:
      return {
        ...state,
        labels: [...state.labels, {id: uuid(), label: action.payload}],
      };
    case USER_ACTIONS.DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter((item) => item.id !== action.payload),
      };
    case USER_ACTIONS.RENAME_LABEL:
      return {
        ...state,
        labels: state.labels.map((item) =>
          item.id === action.payload.id
            ? {id: item.id, label: action.payload.newLabel}
            : item
        ),
      };
    case USER_ACTIONS.ADD_LABEL_TO_NOTE:
      return {
        ...state,
        notes: state.notes.map((item) =>
          item.id === action.payload.id
            ? {...item, labels: [...item.labels, action.payload.labelToAdd]}
            : item
        ),
      };
    case USER_ACTIONS.CHANGE_NOTE_COLOR:
      return {
        ...state,
        notes: state.notes.map((item) =>
          item._id === action.payload.id
            ? {...item, noteBgColor: action.payload.newColor}
            : item
        ),
      };
    case USER_ACTIONS.ADD_NOTE_PRIORITY:
      return {
        ...state,
        notes: state.notes.map((item) =>
          item._id === action.payload.id
            ? {...item, notePriority: action.payload.priority}
            : item
        ),
      };
    case USER_ACTIONS.ADD_NOTE_PRIORITY_IN_ARCHIVE:
      return {
        ...state,
        archives: state.archives.map((item) =>
          item._id === action.payload.id
            ? {...item, notePriority: action.payload.priority}
            : item
        ),
      };
    default:
      return state;
  }
};

export {notesReducer};
