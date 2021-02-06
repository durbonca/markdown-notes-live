import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
    activeNote: null,
    deleting: false
  },
  getters: {
    getNoteById: state => noteId => state.notes.find(note => note.id === noteId)
  },
  mutations: {
    createNote(state, note) {
      state.notes.unshift(note);
    },
    setNotes(state, notes) {
      state.notes = notes;
    },
    setActiveNote(state, noteId = null) {
      state.activeNote = noteId;
    },
    updateNote(state, { id, body }) {
      state.notes.find(note => note.id === id).body = body;
    },
    deleteNote(state) {
      const index = state.notes.findIndex(note => note.id === state.activeNote);
      state.notes.splice(index, 1);
      state.activeNote = null;
    },
    setDeleting(state, deleting) {
      state.deleting = deleting;
    }
  },
  actions: {
    createNote({ commit }) {
      const note = { body: "", id: Date.now() };
      commit("createNote", note);
      commit("setActiveNote", note.id);
    }
  },
  modules: {}
});
