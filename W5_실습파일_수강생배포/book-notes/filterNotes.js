function filterNotes(notes, query) {
  const q = String(query).trim().toLowerCase();
  if (q === "") {
    return notes.slice();
  }
  return notes.filter((note) => {
    const title = String(note.title).toLowerCase();
    const author = String(note.author).toLowerCase();
    const memo = String(note.memo).toLowerCase();
    return title.includes(q) || author.includes(q) || memo.includes(q);
  });
}
