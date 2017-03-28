---
layout: default
permalink: /
title: 'Content of Sentimony Records'
description: 'Content of Sentimony Records'
og-image: ''
---

# {{ page.title }}

<section>
  {% for file in site.static_files %}
  {% if file.path contains 'assets/img' %}
  <article>
    <a href="{{ site.baseurl }}{{ file.path }}">
      <figure>
        <img src="{{ site.baseurl }}{{ file.path }}">
        <figcaption>{{ file.name }}</figcaption>
      </figure>
    </a>
  </article>
  {% endif %}
  {% endfor %}
</section>
