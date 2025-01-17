import { StaticImageData } from "next/image";
import photo1 from "@/app/photos/photo (1).jpg"
import photo2 from "@/app/photos/photo (2).jpg"
import photo3 from "@/app/photos/photo (3).jpg"
import photo4 from "@/app/photos/photo (4).jpg"
import photo5 from "@/app/photos/photo (5).jpg"
import photo6 from "@/app/photos/photo (6).jpg"
import photo7 from "@/app/photos/photo (7).jpg"
import photo8 from "@/app/photos/photo (8).jpg"


export type metaDataType = {
    id: string,
    title: string,
    description: string,
    image: StaticImageData,
}

const metaData:metaDataType[]=[
    {
        id: "photo1",
        title: "Photo 1",
        description: "Description for photo 1",
        image: photo1,
    },
    {
        id: "photo2",
        title: "Photo 2",
        description: "Description for photo 2",
        image: photo2,
    },
    {
        id: "photo3",
        title: "Photo 3",
        description: "Description for photo 3",
        image: photo3,
    },
    {
        id: "photo4",
        title: "Photo 4",
        description: "Description for photo 4",
        image: photo4,
    },
    {
        id: "photo5",
        title: "Photo 5",
        description: "Description for photo 5",
        image: photo5,
    },
    {
        id: "photo6",
        title: "Photo 6",
        description: "Description for photo 6",
        image: photo6,
    },
    {
        id: "photo7",
        title: "Photo 7",
        description: "Description for photo 7",
        image: photo7,
    },
    {
        id: "photo8",
        title: "Photo 8",
        description: "Description for photo 8",
        image: photo8,
    },
]

export default metaData;