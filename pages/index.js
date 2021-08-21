import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About中文也可以</a>
      </Link>
    </div>
  );
}
