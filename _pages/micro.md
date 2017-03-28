---
layout: default
permalink: /micro/
title: 'micro'
description: 'micro'
og-image: ''
---

<style>
  article {width:25%;float:left;}
  img {min-width:250px;}
</style>

# {{ page.title }}

<section>
  {% for file in site.static_files %}
  {% if file.path contains 'assets/img/releases/micro' %}
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
