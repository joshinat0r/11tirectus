const directus = require('./directus');
const fs = require('fs');

directus.then((data) => {

  data.posts.forEach(post => {
    const tags = post.tags.reduce((prev, curr) => prev += `  - ${curr.tags_id.slug}\n`, '')

    const frontMatter = `---
title: ${post.title}
description: ${post.description}
date: ${post.created_on}
tags:
${tags}
layout: layouts/${post.template.slug}.njk
heroImage: ${post.hero_image.data.full_url}
---
`;

    const content = post.content ? post.content.replace(/&nbsp;/g, ' ') : '';

    fs.writeFileSync(`../posts/${post.slug}.html`, `${frontMatter}${content}`);
  });

})