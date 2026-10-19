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

  <div class="publications-toolbar-meta">
    <p class="publication-legend">
      <span><sup>*</sup> Equal contribution</span>
      <span><sup>†</sup> Corresponding authors</span>
    </p>
  </div>
</div>

<div class="publications">
  <section id="international" class="publication-section">
    {% bibliography -f {{ site.scholar.bibliography }} -q @*[category=international]* %}
  </section>

  <section id="domestic" class="publication-section">
    <h2 class="publication-section-title">Domestic</h2>
    {% bibliography -f {{ site.scholar.bibliography }} -q @*[category=domestic]* %}
  </section>
</div>
