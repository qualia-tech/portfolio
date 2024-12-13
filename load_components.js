import includeHTML from "./utilities/includeHtml.js";

// Load components

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("components/header.html", "header");
  includeHTML("components/profil.html", "profil");
  includeHTML("components/competences.html", "competences");
  includeHTML("components/organisation.html", "organisation");
  includeHTML("components/projet.html", "projet");
  includeHTML("components/tests.html", "tests");
  includeHTML("components/techniques.html", "techniques");
  includeHTML("components/outils.html", "outils");
  includeHTML("components/formations.html", "formations");
});
