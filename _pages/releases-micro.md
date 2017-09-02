---
layout: default
permalink: /releases/micro/
title: 'releases:micro'
description: 'releases:micro'
og-image: ''
---

<style>
  article {max-width:25%;}
  img {min-width:250px;}
</style>

# {{ page.title }}

<nav>
  <a href="/releases/">releases</a> |
  <a href="/releases/micro/">releases:micro</a> |
  <a href="/releases/og-images/">releases:og-images</a>
</nav>

<section>
  {% for file in site.static_files %}
    {% if file.path contains 'assets/img/releases/micro/' %}
      {% include article.html %}
    {% endif %}
  {% endfor %}
</section>
