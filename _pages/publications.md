---
layout: page
permalink: /publications/
title: publications
description: publications in reversed chronological order.
years: [2025, 2024, 2023, 2022, ~2021, 2017, 2016]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<script defer src="{{ '/assets/js/bibsearch.js' | relative_url }}"></script>

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

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

</div>
