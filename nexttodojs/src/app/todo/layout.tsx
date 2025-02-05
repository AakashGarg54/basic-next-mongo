import Link from "next/link";

export default function authCustomLayout({ children }: any) {
  return (
    <div className="m-8">
      <Link href="/todo/addtodo" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inlne-block"> Add New Todo</Link>
      {children}
      <br />
      <Link href="/todo" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inlne-block"> Back to Todo</Link>
    </div>
  );
}