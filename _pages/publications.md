---
layout: page
permalink: /publications/
title: publications
description: publications in reversed chronological order.
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<script defer src="{{ '/assets/js/bibsearch.js' | relative_url }}"></script>

<div id="publications-top" class="publications-toolbar">
  <p class="bibsearch-controls">
    <input
      type="text"
      id="bibsearch"
      spellcheck="false"
      autocomplete="off"
      class="search bibsearch-form-input"
      placeholder="Type to filter"
    >
  </p>

  <nav class="publication-jump-links" aria-label="Publication sections">
    <a href="#publications-top">All</a>
    <a href="#international">International</a>
    <a href="#domestic">Domestic</a>
  </nav>
</div>

<div class="publications">
  <section id="international" class="publication-section">
    <h2 class="publication-section-title">International</h2>
    {% bibliography -f {{ site.scholar.bibliography }} -q @*[category=international]* %}
  </section>

  <section id="domestic" class="publication-section">
    <h2 class="publication-section-title">Domestic</h2>
    {% bibliography -f {{ site.scholar.bibliography }} -q @*[category=domestic]* %}
  </section>
</div>
