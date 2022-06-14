// import {toast} from "react-toastify";

const isNoteEmpty = (title, text) => {
  if (title.trim().length === 0 || text.trim().length === 0) {
    toast.error("Title or text should not be empty");
    return true;
  } else {
    return false;
  }
};

export {isNoteEmpty};
