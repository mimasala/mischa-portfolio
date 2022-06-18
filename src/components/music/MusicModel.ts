export default interface MusicModel {
    percentage: number | number[];
    isPlaying: boolean;
    duration: number;
    currentTime: number;
}

// export const themeKeys: { [key: string]: Theme } = {
//     light: lightTheme,
//     dark: darkTheme,
//     luna: lunaTheme,
//     camping: campingTheme,
//   };

export const initialMusicModel: MusicModel = {
    percentage: 0,
    isPlaying: false,
    duration: 0,
    currentTime: 0,
}
