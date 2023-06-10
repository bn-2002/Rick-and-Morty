import { create } from 'zustand';

const $FAVORITES_KEY = 'favorites'

const useFavoritesStore = create((set) => ({
  favorites: [],
  initialFavorites: (initialValue) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem($FAVORITES_KEY, JSON.stringify(initialValue));
    }
    set({ favorites: initialValue });
  },
  increaseFavorites: (newCharacter) => set((state) => {
    const newFavorites = [...state.favorites, newCharacter];
    if (typeof window !== 'undefined') {
      localStorage.setItem($FAVORITES_KEY, JSON.stringify(newFavorites));
    }
    return { favorites: newFavorites };
  }),
  decreaseFavorites: (oldCharacter) => set((state) => {
    const newFavorites = state.favorites.filter(character => character.id !== oldCharacter.id);
    if (typeof window !== 'undefined') {
      localStorage.setItem($FAVORITES_KEY, JSON.stringify(newFavorites));
    }
    return { favorites: newFavorites };
  }),
  removeAllFavorites: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem($FAVORITES_KEY);
    }
    set({ favorites: [] });
  },
}));


export default useFavoritesStore