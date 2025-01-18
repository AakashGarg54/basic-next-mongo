import Link from "next/link";

export default function f1() {
  return (
    <>
      <h1>f1</h1>
      <Link href="/f1/f2">Go to F2 </Link>
      <Link href="/f1/f4">Go to F4 </Link>
    </>
  );
}
