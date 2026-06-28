import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpeg";
import photo2 from "./photos/2.jpeg";
import photo3 from "./photos/3.jpeg";
import photo4 from "./photos/4.jpeg";
import photo5 from "./photos/5.jpeg";
import photo6 from "./photos/6.jpeg";
import photo7 from "./photos/7.jpeg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
}

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Universe1",
        src: photo1,
        photographer: "Photo by James Roe on Pinterest",
        location: "Universe",
    },
    {
        id: "2",
        name: "Universe2",
        src: photo2,
        photographer: "Photo by James Roe on Pinterest",
        location: "Universe",
    },
    {
        id: "3",
        name: "Universe3",
        src: photo3,
        photographer: "Photo by James Roe on Pinterest",
        location: "Universe",
    },
    {
        id: "4",
        name: "Universe4",
        src: photo4,
        photographer: "Photo by James Roe on Pinterest",
        location: "Universe",
    },
    {
        id: "5",
        name: "Universe5",
        src: photo5,
        photographer: "Photo by James Roe on Pinterest",
        location: "Universe",
    },
    {
        id: "6",
        name: "Universe6",
        src: photo6,
        photographer: "Photo by James Roe on Pinterest",
        location: "Universe",
    },
    {
        id: "7",
        name: "Universe7",
        src: photo7,
        photographer: "Photo by James Roe on Pinterest",
        location: "Universe",
    },
];


export default wondersImages;