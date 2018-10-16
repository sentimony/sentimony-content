---
layout: default
permalink: /artists/large/
title: 'artists:large'
description: 'artists:large'
og-image: ''
---

# {{ page.title }}

{% include menu-artists.html %}

<section>
  {% for file in site.static_files %}
    {% if file.path contains 'assets/img/artists/large/' %}
      {% include article.html %}
    {% endif %}
  {% endfor %}
</section>
