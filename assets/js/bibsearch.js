document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("bibsearch");
  const publicationLists = Array.from(
    document.querySelectorAll(".publications ol.bibliography")
  );

  if (!input || publicationLists.length === 0) {
    return;
  }

  const filterPublications = () => {
    const query = input.value.trim().toLowerCase();

    publicationLists.forEach((list) => {
      const yearHeading = list.previousElementSibling;
      const items = Array.from(list.querySelectorAll(":scope > li"));
      let visibleCount = 0;

      items.forEach((item) => {
        const searchableText = [
          item.querySelector(".title")?.textContent ?? "",
          item.querySelector(".author")?.textContent ?? "",
          item.querySelector(".periodical")?.textContent ?? "",
          item.querySelector(".pub-note")?.textContent ?? "",
          item.querySelector(".abbr")?.textContent ?? "",
        ]
          .join(" ")
          .replace(/\s+/g, " ")
          .toLowerCase();

        const matches = query === "" || searchableText.includes(query);
        item.style.display = matches ? "" : "none";

        if (matches) {
          visibleCount += 1;
        }
      });

      const showYear = visibleCount > 0;
      list.style.display = showYear ? "" : "none";
      if (yearHeading && yearHeading.matches("h2.year")) {
        yearHeading.style.display = showYear ? "" : "none";
      }
    });
  };

  input.addEventListener("input", filterPublications);
  filterPublications();
});
