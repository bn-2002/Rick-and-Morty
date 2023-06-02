import { create } from 'zustand';

const $FAVORITES_KEY = 'favorites'

const useFavoritesStore = create((set) => ({
  favorites: JSON.parse(localStorage.getItem($FAVORITES_KEY)) || [],
  initialFavorites: (initialValue) => {
    localStorage.setItem($FAVORITES_KEY, JSON.stringify(initialValue));
    set({ favorites: initialValue });
  },
  increaseFavorites: (newCharacter) => set((state) => {
    const newFavorites = [...state.favorites, newCharacter];
    localStorage.setItem($FAVORITES_KEY, JSON.stringify(newFavorites));
    return { favorites: newFavorites };
  }),
  decreaseFavorites: (oldCharacter) => set((state) => {
    const newFavorites = state.favorites.filter(character => character.id !== oldCharacter.id);
    localStorage.setItem($FAVORITES_KEY, JSON.stringify(newFavorites));
    return { favorites: newFavorites };
  }),
  removeAllFavorites: () => {
    localStorage.removeItem($FAVORITES_KEY);
    set({ favorites: [] });
  },
}));


export default useFavoritesStore