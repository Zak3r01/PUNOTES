const notesSection = document.getElementById("notes");

const notes = [
  {
    title: "Tasty Chocalte Snack",
    content:
      "Adding milk chocolate, cinnamon, dipping buscuits, and freezing it is my go to snack!",
    category: "Food",
  },
  {
    title: "Favorite part in Dune 2",
    content:
      "When they are ambushing a spice harvester, and chani shoots down a hornithoptor!",
    category: "Films",
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
