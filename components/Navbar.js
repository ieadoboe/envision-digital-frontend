import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.svg" width={207} height={20} />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/features">
          <a>Features</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/faq">
          <a>FAQs</a>
        </Link>
      </div>
      <div>
        <Link href="/contact">
          <a className='btn-primary'>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
