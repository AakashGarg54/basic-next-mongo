"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";



export default function Home() {
  const path = usePathname();

  console.log(path);

  return (
    <>
      <Link href="/about"> About</Link>
      <Link href="/blog"> Blog</Link>
    </>);
}
