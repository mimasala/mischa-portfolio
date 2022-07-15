export default interface MusicModel {
    currentTime: number | number[];
    isPlaying: boolean;
    duration: number;
    isLoading: boolean;
}

// export const themeKeys: { [key: string]: Theme } = {
//     light: lightTheme,
//     dark: darkTheme,
//     luna: lunaTheme,
//     camping: campingTheme,
//   };

export const initialMusicModel: MusicModel = {
    currentTime: 0,
    isPlaying: false,
    duration: 0,
    isLoading: true,
}
