import { Metadata } from "next";
import metaData, { metaDataType } from "../metDataArray";
import Image from "next/image";

export default function id({ params: { id } }: { params: { id: string } }) {
  const photo: metaDataType = metaData.find((p) => p.id == id)!;
  console.log(metaData.length);

  return (
    <>
      <div className="m-5 grid grid-cols-3 gap-4 justify-center">
        <Image
          id={photo.id}
          src={photo.image}
          alt={photo.title}
          className="w-full oject-cover aspect-square"
        />
        <div className="bg-white py-8">
          <h2 className="text-xl font-bold">{photo.title}</h2>
          <p>{photo.description}</p>
        </div>
      </div>
    </>
  );
}
