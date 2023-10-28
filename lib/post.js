const posts = [
  {
    id: 1,
    title: "Articolo di test #1",
    publishDate: "2021-09-05",
    author: "Mighty Bob",
    coverImage: "/images/immagine-test-1.jpg",
    excerpt: "Questo è l'estratto dell'articolo di test 1",
    content:
      "Questo è il contenuto dell'articolo di test 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    slug: "articolo-di-test-1",
  },
  {
    id: 2,
    title: "Articolo di test #2",
    publishDate: "2021-08-05",
    author: "Mighty Debora",
    coverImage: "/images/immagine-test-2.jpg",
    excerpt: "Questo è l'estratto dell'articolo di test 2",
    content:
      "Questo è il contenuto dell'articolo di test 2, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    slug: "articolo-di-test-2",
  },
  {
    id: 3,
    title: "Articolo di test #3",
    publishDate: "2021-07-05",
    author: "Mighty Micke",
    coverImage: "/images/immagine-test-3.jpg",
    excerpt: "Questo è l'estratto dell'articolo di test 3",
    content:
      "Questo è il contenuto dell'articolo di test 3, But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No",
    slug: "articolo-di-test-3",
  },
];

export function getAllPosts() {
  return posts;
}

export function getAllSlugs() {
    let slugs = [];
    getAllPosts().map(p => slugs.push(`/blog/${p.slug}`));
    return slugs;
}

export function getPostData(slug) {
    let post = null;
    getAllPosts().map((p) => {
        if (p.slug === slug) {
            post = p;
            return;
        }
    });
    return post;
}