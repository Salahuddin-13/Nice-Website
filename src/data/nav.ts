/* Section list shared by the header nav and the scroll-spy. Kept out of Nav.tsx so
   that module exports components only — otherwise React Fast Refresh can't hot-swap
   it and every edit to the header triggers a full page reload. */
export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
