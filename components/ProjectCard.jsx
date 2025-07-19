import Image from "next/image";

export default function ProjectCard({ title, category, image, alt, href }) {
  return (
    <li className="project-item active">
      <a href={href} aria-label={`${title} project`}>
        <figure className="project-img">
          <div className="project-item-icon-box" aria-hidden="true">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <Image src={image} alt={alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
        </figure>

        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </a>
    </li>
  );
}
