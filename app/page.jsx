"use client";

import { useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Leadership from "@/components/Leadership";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Sidebar from "@/components/Sidebar";
import { projects } from "@/components/siteData";

export default function HomePage() {
  const [activePage, setActivePage] = useState("about");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFilterSelectOpen, setIsFilterSelectOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

  const isFormValid =
    formData.fullname.trim() !== "" &&
    hasValidEmail &&
    formData.message.trim() !== "";

  const handlePageChange = (page) => {
    setActivePage(page);
    setIsFilterSelectOpen(false);
    setActiveTestimonial(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setIsFilterSelectOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  return (
    <main>
      <Sidebar isExpanded={isSidebarExpanded} onToggle={() => setIsSidebarExpanded((current) => !current)} />

      <div className="main-content">
        <Navbar activePage={activePage} onChangePage={handlePageChange} />

        <About
          isActive={activePage === "about"}
          activeTestimonial={activeTestimonial}
          onOpenTestimonial={setActiveTestimonial}
          onCloseTestimonial={() => setActiveTestimonial(null)}
        />
        <Resume isActive={activePage === "resume"} />
        <Portfolio
          isActive={activePage === "portfolio"}
          activeFilter={activeFilter}
          filteredProjects={filteredProjects}
          isSelectOpen={isFilterSelectOpen}
          onToggleSelect={() => setIsFilterSelectOpen((current) => !current)}
          onChangeFilter={handleFilterChange}
        />
        <Leadership isActive={activePage === "leadership"} />
        <Contact
          isActive={activePage === "contact"}
          formData={formData}
          onInputChange={handleInputChange}
          isFormValid={isFormValid}
          onSubmit={(event) => event.preventDefault()}
        />
      </div>
    </main>
  );
}
