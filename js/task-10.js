// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість Priopity,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)
class Notes {
  static PRIOTITY = {
    HIGHT: 'hight',
    LOW: 'low',
  };
  constructor() {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(text) {
    this.items = this.items.filter(el => el.text !== text);
  }
  updatePriority(text, newPriority) {
    this.items = this.items.map(el => {
      if (el.text === text) {
        el.priority = newPriority;
      }
    });
  }
}
