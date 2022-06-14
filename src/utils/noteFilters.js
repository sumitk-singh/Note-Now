const getNotesByPriority = (notes, priority) => {
  if (priority) {
    return notes.filter((item) => item.notePriority === priority);
  }
  return notes;
};

const getNotesByDate = (notes, sortBy) => {
  if (sortBy === "Newest") {
    return [...notes].sort(
      (note1, note2) =>
        new Date(note2.date.toString()) - new Date(note1.date.toString())
    );
  }
  if (sortBy === "Oldest") {
    return [...notes].sort(
      (note1, note2) =>
        new Date(note1.date.toString()) - new Date(note2.date.toString())
    );
  }
  return notes;
};

const getSearchNotes = (notes, searchQuery) => {
  if (searchQuery.trim()) {
    return notes.filter(
      (item) =>
        item.noteTitle
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase()) ||
        item.noteText.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
  }
  return notes;
};

export {getNotesByPriority, getNotesByDate, getSearchNotes};
