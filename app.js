const notesSection = document.getElementById("notes");

const notes = [
  {
    title: "Note 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Science",
  },
  {
    title: "Note 2",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Art",
  },
];

function createNoteCard(note) {
  const noteCard = document.createElement("div");
  noteCard.classList.add("note-card");
  noteCard.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.content}</p>
    <p>Category: ${note.category}</p>
  `;
  return noteCard;
}

notes.forEach((note) => {
  const noteCard = createNoteCard(note);
  notesSection.appendChild(noteCard);
});
