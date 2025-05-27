import { Rowdies } from "next/font/google";
import Link from "next/link";
const rowdies = Rowdies({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Logo({ size = "text-4xl" }) {
  return (
    <Link href="/">
      <h1 className={`${rowdies.className} ${size} font-bold`}>RAINIER</h1>
    </Link>
  );
}