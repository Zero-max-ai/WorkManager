import { atom, selector } from "recoil";

const getUserTheme = () => {
  return window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      if (matches) {
        console.log("change to dark mode!");
      } else {
        console.log("change to light mode!");
      }
    });
};

export const ThemeToggle = atom({
  key: "ThemeToggle",
  default: getUserTheme(),
});

export const ThemeSelector = selector({
  key: "ThemeSelector",
  get: ({ get }) => {
    const theme = get(ThemeToggle);
    return theme === "dark"
      ? "text-white bg-neutral-900"
      : "text-black bg-slate-100";
  },
});
