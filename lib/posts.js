export async function fetchposts(targetCategory) {
  const extractThumbnailData = async (media_url) => {
    if (!media_url) return null
    return fetch(media_url)
    .then(res => res.json())
    .then(data => ({
      src: data.source_url,
      alt: data.alt_text,
    }))
  }
  
  const categoriesList = []

  await fetch('https://blog.fa.sainax.com/wp-json/wp/v2/categories')
  .then(res => res.json())
  .then(categories => categories.forEach(category => {
    categoriesList[category.id] = {
      name: category.name,
      slug: category.slug,
    }
  }))

  return fetch(`https://blog.fa.sainax.com/wp-json/wp/v2/posts`)
  .then(res => res.json())
  .then(async posts => await Promise.all(posts.map(async post => ({
    link: post.link,
    slug: post.slug,
    title: post.title.rendered,
    content: post.content.rendered,
    categories: post.categories.map(catId => categoriesList[catId]),
    excerpt: removetags(post.excerpt.rendered),
    date: post.date,
    acf: post.acf,
    thumbnail: await extractThumbnailData(post._links["wp:featuredmedia"] ? post._links["wp:featuredmedia"][0].href : null)
  }))))
  .then(posts => filterPostsByCategory(posts, targetCategory))
}

function removetags(content) {
  let context = content
  if (content.indexOf('<p>') >= 0) context = context.slice(context.indexOf('<p>')+3)
  if (content.indexOf('</p>') >= 0) context = context.slice(0, context.indexOf('</p>'))
  return context
}

export function filterPostsByCategory(posts, targetCategory) {
  if (!targetCategory) return posts
  return posts.filter(post => post.categories.map(cat => cat.name.toLowerCase() == targetCategory.toLowerCase()).filter(item => item == true).length > 0)
}