import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/demo">Demo</Link>
      <br />
      <Link href="/useRouter">useRouter</Link>
      <br />
      <Link href="/SortProducts">SortProducts</Link> <br />
      <Link href="/LocaleSwitcher">LocaleSwitcher</Link>
    </>
  );
}
