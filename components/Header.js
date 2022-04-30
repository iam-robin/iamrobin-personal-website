import Link from 'next/link';
import Image from 'next/image';
import NavItem from "./NavItem";
import SearchIndicator from "./SearchIndicator";

const Header = () => {

  return (
    <header className="flex justify-between items-center relative">
      <Link href="/">
        <a>
          <Image src="/img/logo.svg" height={32} width={32} alt="memoji logo" />
        </a>
      </Link>
      <nav className="text-base">
        <ul className="list-none p-0 m-0">
          <NavItem content="projects" route="projects" />
          <NavItem content="writing" route="writing" />
          <NavItem content="media" route="media" />
          <NavItem content="photos" route="photos" />
        </ul>
      </nav>
      <SearchIndicator />
    </header>
  );
}

export default Header;
