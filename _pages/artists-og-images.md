---
layout: default
permalink: /artists/og-images/
title: 'artists:og-images'
description: 'artists:og-images'
og-image: ''
---

# {{ page.title }}

{% include menu-artists.html %}

<section>
  {% for file in site.static_files %}
    {% if file.path contains 'assets/img/artists/og-images/' %}
      {% include article.html %}
    {% endif %}
  {% endfor %}
</section>
