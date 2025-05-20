import { ImageProps, ViewProps } from "react-native";

export default interface MangaCardProps extends ImageProps{
    url: string;
    title?: string;
    width: number;
    newPages?: number;
}