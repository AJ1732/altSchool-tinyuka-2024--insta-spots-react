import { InstaSpotsLogo } from "../svgs";

export default function Header() {
  return (
    <header className="flex justify-center tracking-[0.25rem] text-xl font-medium font-dm-mono items-center bg-white py-2.5 gap-2 h-[2.875rem]">
      <InstaSpotsLogo />
      SPOTS
    </header>
  );
}
