import create from 'zustand';

const useNoteStore = create((set) => ({
  notes: [
    {
      id: '1',
      icon: 'photo-camera',
      title: 'Instagram Content Plan for Begginer',
      tags: ['#instagram', '#work'],
      content: 'In publishing and graphic design, lorem ipsum is a placeholder text. Lorem ipsum is a placeholder text.',
      date: 'Today at 6:30pm',
    },
    {
      id: '2',
      icon: 'design-services',
      title: 'Some for Ux design',
      tags: ['#rules', '#ux'],
      content: 'In publishing and graphic design, lorem ipsum is a placeholder text...',
      date: 'Today at 6:30pm',
    },
    {
      id: '3',
      icon: 'work-outline',
      title: 'Job Interview',
      tags: [],
      content: 'Questions and answers for the upcoming interview.',
      date: 'Tomorrow at 10:00am',
    },
  ],
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (updatedNote) =>
    set((state) => ({
      notes: state.notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
    })),
  deleteNote: (id) => set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
}));

export default useNoteStore;
