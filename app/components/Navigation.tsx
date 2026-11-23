import Link from "next/link";
import { siteConfig } from "../site-config";

export default function Navigation() {
  return (
    <header className="site-header">
      <nav className="wrap nav-inner" aria-label="Main navigation">
        <Link className="brand" href="/">{siteConfig.name}<span aria-hidden="true">.</span></Link>
        <div className="nav-links">
          <Link href="/#contact">Contact</Link>
          <a className="nav-book" href={siteConfig.calendar} target="_blank" rel="noopener noreferrer">Book a call</a>
          <Link href="/#selected-work">Case studies</Link>
        </div>
      </nav>
    </header>
  );
}
