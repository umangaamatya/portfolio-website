import Image from "next/image";
import { leadershipPosts } from "./siteData";

export default function Leadership({ isActive }) {
  return (
    <article className={`leadership ${isActive ? "active" : ""}`} aria-hidden={!isActive}>
      <header>
        <h2 className="h2 article-title">Leadership</h2>
      </header>

      <section className="leadership-posts">
        <ul className="leadership-posts-list">
          {leadershipPosts.map((post) => (
            <li className="leadership-post-item" key={post.title}>
              <a href={post.href}>
                <figure className="leadership-banner-box">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                </figure>

                <div className="leadership-content">
                  <div className="leadership-meta">
                    <p className="leadership-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.datetime}>{post.date}</time>
                  </div>

                  <h3 className="h3 leadership-item-title">{post.title}</h3>
                  <p className="leadership-text">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
