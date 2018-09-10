console.log('Cargado el módulo de notas')
// lo que queremos que se exporte...
module.exports.addNotevieja = function () {
  console.log('Nueva nota')
  return 'Nueva nota'
}

module.exports.removeNotevieja = function (id) {
  console.log(`Quitar nota con id=${id}`)
  return 'Quitar nota'
}

const addNote = () => {
  console.log('Nueva nota')
  return 'Nueva nota'
}
const removeNote = id => {
  console.log(`Nota borrada con id: ${id}`)
  return 'Nota borrada'
}
module.exports = {
  addNote,
  removeNote
}
