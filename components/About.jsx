import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { clients, services, testimonials } from "./siteData";

export default function About({ isActive, activeTestimonial, onOpenTestimonial, onCloseTestimonial }) {
  return (
    <article className={`about ${isActive ? "active" : ""}`} aria-hidden={!isActive}>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I&apos;m an aspiring tech entrepreneur blending software development, content creation, and brand
          storytelling. Currently pursuing a BSc. in Computing with AI at Islington College, I&apos;ve worked across
          diverse domains from backend development to video production and digital marketing.
        </p>

        <p>
          I&apos;ve built scalable backend systems using FastAPI, SQLAlchemy, and Docker during my internship at
          Terahs.ai, and co-founded Gokyo Nepal, a tech retail venture focused on cameras and consumer electronics.
        </p>

        <p>
          My creative work spans The SJK Podcast, branded video content, and digital strategy, combining tech
          precision with storytelling flair. I&apos;m also exploring the world of investing and financial markets,
          driven by a long-term vision of merging tech with commerce and content.
        </p>

        <p>
          I thrive at the intersection of code, creativity, and commerce, building meaningful tools, brands, and
          stories for the future.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>
        <ul className="service-list">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li className="testimonials-item" key={testimonial.name}>
              <button
                type="button"
                className="content-card testimonials-card"
                onClick={() => onOpenTestimonial(testimonial)}
                aria-label={`Open testimonial from ${testimonial.name}`}
              >
                <figure className="testimonials-avatar-box">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={80} height={80} />
                </figure>

                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>

                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className={`modal-container ${activeTestimonial ? "active" : ""}`}>
        <div className={`overlay ${activeTestimonial ? "active" : ""}`} onClick={onCloseTestimonial}></div>

        {activeTestimonial && (
          <section className="testimonials-modal" role="dialog" aria-modal="true" aria-labelledby="testimonial-title">
            <button type="button" className="modal-close-btn" onClick={onCloseTestimonial} aria-label="Close testimonial">
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <Image src={activeTestimonial.avatar} alt={activeTestimonial.name} width={80} height={80} />
              </figure>

              <img src="/assets/images/icon-quote.svg" alt="Quote icon" width="35" height="35" className="modal-quote-icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" id="testimonial-title">
                {activeTestimonial.name}
              </h4>
              <time dateTime={activeTestimonial.datetime}>{activeTestimonial.date}</time>
              <p>{activeTestimonial.text}</p>
            </div>
          </section>
        )}
      </div>

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {clients.map((logo, index) => (
            <li className="clients-item" key={logo}>
              <a href="#" aria-label={`Client ${index + 1}`}>
                <Image src={logo} alt={`Client logo ${index + 1}`} width={120} height={60} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
