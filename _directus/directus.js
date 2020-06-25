const fetch = require('node-fetch');

async function fetchDirectusPosts() {
  return await fetch('https://cms.joshuahahn.de/11ty/items/posts?fields=*,hero_image.data.*,tags.tags_id.*,template.*')
    .then((response) => response.json())
    .then((response) => response.data)
}

module.exports = new Promise(async (resolve, reject) => {
  const posts = await fetchDirectusPosts();

  resolve({
    posts
  });
});