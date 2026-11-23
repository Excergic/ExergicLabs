import { siteConfig } from "../site-config";

export default function Footer() {
  return <footer className="wrap footer"><a className="brand" href="#top">{siteConfig.name}<span aria-hidden="true">.</span></a><span>Independent GTM engineering</span><a href={`mailto:${siteConfig.email}`}>Get in touch</a></footer>;
}
