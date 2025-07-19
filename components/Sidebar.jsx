import Image from "next/image";
import { personalInfo } from "./siteData";

export default function Sidebar({ isExpanded, onToggle }) {
  return (
    <aside className={`sidebar ${isExpanded ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image src={personalInfo.avatar} alt={personalInfo.name} width={150} height={150} priority />
        </figure>

        <div className="info-content">
          <h1 className="name" title={personalInfo.name}>
            {personalInfo.name}
          </h1>
          <p className="title">{personalInfo.role}</p>
        </div>

        <button
          type="button"
          className="info_more-btn"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls="sidebar-contacts"
        >
          <span>{isExpanded ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name={isExpanded ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more" id="sidebar-contacts">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                {personalInfo.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`} className="contact-link">
                {personalInfo.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime={personalInfo.birthdayDate}>{personalInfo.birthdayLabel}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{personalInfo.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {personalInfo.socials.map((social) => (
            <li className="social-item" key={social.label}>
              <a
                href={social.href}
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <ion-icon name={social.icon}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
