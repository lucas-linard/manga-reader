import { create } from "zustand";

const options = {
    mangaGrid: 2
}

type settingsTypes = {
    settings: typeof options;
}

export const useSettingsStore = create<settingsTypes>((set) => ({
    settings: options,
    setSettings: (newSettings: typeof options) => set(() => ({ settings: newSettings })),
}))