import { Metadata } from "next";
import metaData, { metaDataType } from "../../../metDataArray";
import Image from "next/image";
import Modal from "@/components/model";

export default async function id({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: metaDataType = await metaData.find((p) => p.id == id)!;
  console.log(photo);

  return (
    <>
      <Modal>
        <Image
          id={photo.id}
          src={photo.image}
          alt={photo.title}
          className="w-full oject-cover aspect-square"
        />
        <div className="bg-white py-8">
          <h2 className="ml-3 text-xl font-bold">
            {photo.id} - {photo.title}
          </h2>
          <p className="ml-3 mt-2">{photo.description}</p>
        </div>
      </Modal>
    </>
  );
}
