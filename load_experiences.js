import includeHTML from "./utilities/includeHtml.js";

document.addEventListener("DOMContentLoaded", () => {
  // Load experiences
  includeHTML(
    "experiences/legendary_plays/product_owner_legendary_plays.html",
    "experiences-list"
  );
  includeHTML(
    "experiences/legendary_plays/scrum_master_legendary_plays.html",
    "experiences-list"
  );

  // OVHCloud experiences
  includeHTML(
    "experiences/ovhcloud/test_manager_ovhcloud.html",
    "experiences-list"
  );
  includeHTML(
    "experiences/ovhcloud/administrateur_systeme_ovhcloud.html",
    "experiences-list"
  );

  // Edenred experiences
  includeHTML(
    "experiences/edenred/product_owner_edenred.html",
    "experiences-list"
  );
  includeHTML(
    "experiences/edenred/scrum_master_edenred.html",
    "experiences-list"
  );
  includeHTML(
    "experiences/edenred/automaticien_edenred.html",
    "experiences-list"
  );

  // SFR experiences
  includeHTML("experiences/sfr/amoa.html", "experiences-list");
});
