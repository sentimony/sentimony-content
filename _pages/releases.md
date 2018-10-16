---
layout: default
permalink: /releases/
title: 'releases:all'
description: 'releases:all'
og-image: ''
---

# {{ page.title }}

{% include menu-releases.html %}

<section>
  {% for file in site.static_files %}
    {% if file.path contains 'assets/img/releases/' %}
      {% include article.html %}
    {% endif %}
  {% endfor %}
</section>
