---
layout: default
permalink: /releases/
title: 'releases'
description: 'releases'
og-image: ''
---

<style>
  article {max-width:25%;}
</style>

# {{ page.title }}

<nav>
  <a href="/releases/">releases</a> |
  <a href="/releases/micro/">releases:micro</a> |
  <a href="/releases/og-images/">releases:og-images</a>
</nav>

<section>
  {% for file in site.static_files %}
    {% if file.path contains 'assets/img/releases/' %}
      {% include article.html %}
    {% endif %}
  {% endfor %}
</section>
