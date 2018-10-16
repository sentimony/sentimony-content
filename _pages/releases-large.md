---
layout: default
permalink: /releases/large/
title: 'releases:large'
description: 'releases:large'
og-image: ''
---

# {{ page.title }}

{% include menu-releases.html %}

<section>
  {% for file in site.static_files reversed %}
    {% if file.path contains 'assets/img/releases/large/' %}
      {% include article.html %}
    {% endif %}
  {% endfor %}
</section>
