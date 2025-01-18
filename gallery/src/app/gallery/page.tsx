import Image from "next/image";
import metaData from "./metDataArray";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="my-4 text-center text-3xl">Gallery</h1>
      <div className="m-5 grid grid-cols-4 gap-4 ">
        {metaData.map(({ image, id, title }) => {
          return (
            <Link key={id} href={`/gallery/${id}`}>
              <Image
                id={id}
                src={image}
                alt={title}
                className="w-full oject-cover aspect-square"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
