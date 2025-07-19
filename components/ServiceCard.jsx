import Image from "next/image";

export default function ServiceCard({ title, description, icon, alt }) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <Image src={icon} alt={alt} width={40} height={40} />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{description}</p>
      </div>
    </li>
  );
}
