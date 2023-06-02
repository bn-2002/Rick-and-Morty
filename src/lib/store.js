import { create } from 'zustand'

const useFavoritesStore = create((set) => ({
  favorites: [],
  initialFavorites: (initialValue) => set({ favorites: initialValue }),
  increaseFavorites: (newCharacter) => set((state) => ({ favorites: [...state.favorites, newCharacter] })),
  decreaseFavorites: (oldCharacter) => set((state) => ({favorites: state.favorites.filter(character => character.id !== oldCharacter.id)})),
  removeAllFavorites: () => set({ favorites: [] }),
}))


export default useFavoritesStore

// import { persist } from 'zustand/middleware';
// import { create } from 'zustand';

// const useFavoritesStore = create(
//   persist(
//     (set) => ({
//       favorites: [{name : 'bahre'}],
//       initialFavorites: (initialValue) => set({ favorites: initialValue }),
//       increaseFavorites: (newCharacter) => set((state) => ({ favorites: [...state.favorites, newCharacter] })),
//       decreaseFavorites: (oldCharacter) =>
//         set((state) => ({
//           favorites: state.favorites.filter(
//             (character) => character.id !== oldCharacter.id
//           ),
//       })),
//       removeAllFavorites: () => set({ favorites: [] }),
//     }),
//     {
//       name: 'favorites',
//       getStorage: () => localStorage,
//     }
//   )
// );

// export default useFavoritesStore;
