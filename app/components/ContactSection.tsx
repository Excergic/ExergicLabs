import { siteConfig } from "../site-config";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="wrap contact-inner">
        <div><p className="eyebrow">Let’s build something useful</p><h2 id="contact-heading">Have a GTM workflow<br className="desktop-break" /> you want to fix?</h2></div>
        <div className="contact-actions"><a className="button" href={siteConfig.calendar} target="_blank" rel="noopener noreferrer">Discuss a project</a><p>Hiring a GTM engineer? <a href={`mailto:${siteConfig.email}`}>Get in touch.</a></p><a className="contact-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
      </div>
    </section>
  );
}
