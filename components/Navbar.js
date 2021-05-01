import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.svg" width={176.49} height={17} />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className='cool-link'>Home</a>
        </Link>
        <Link href="/features">
          <a className='cool-link'>Features</a>
        </Link>
        <Link href="/about">
          <a className='cool-link'>About</a>
        </Link>
        <Link href="/faq">
          <a className='cool-link'>FAQs</a>
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
