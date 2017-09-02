---
layout: default
permalink: /artists/
title: 'artists'
description: 'artists'
og-image: ''
---

<style>
  article {max-width:25%;}
</style>

# {{ page.title }}

<section>
  {% for file in site.static_files %}
    {% if file.path contains 'assets/img/artists/' %}
      {% include article.html %}
    {% endif %}
  {% endfor %}
</section>
