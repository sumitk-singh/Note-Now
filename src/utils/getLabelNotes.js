const getLabelNotes = (label, notesState) => {
  return notesState.notes.filter((item) => item.labels.includes(label));
};

export {getLabelNotes};
