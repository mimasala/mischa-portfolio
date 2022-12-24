export default interface MusicModel {
    currentTime: number | number[];
    isPlaying: boolean;
    duration: number;
    isLoading: boolean;
}

export const initialMusicModel: MusicModel = {
    currentTime: 0,
    isPlaying: false,
    duration: 0,
    isLoading: true,
}
