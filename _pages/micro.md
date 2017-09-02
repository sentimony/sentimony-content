---
layout: default
permalink: /micro/
title: 'releases:micro'
description: 'releases:micro'
og-image: ''
---

<style>
  article {max-width:25%;}
  img {min-width:250px;}
</style>

# {{ page.title }}

<section>
  {% for file in site.static_files %}
    {% if file.path contains 'assets/img/releases/micro/' %}
      {% include article.html %}
    {% endif %}
  {% endfor %}
</section>
