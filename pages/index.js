import Head from "next/head";
import Link from "next/Link";
import { getAllPosts } from "../lib/post";
import styles from "../styles/Home.module.css";
import Image from "../components/Image/Image";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className={styles.container}>
      <Head>
        <title>Personal Blog</title>
      </Head>
      <div>
        <h1>Personal Blog</h1>
      </div>
      <div>
        {posts.map((p) => (
          <BlogPostPreview key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{ maxWidth: "400px", marginBottom: "50px" }}>
      <Image src={data.coverImage} alt={data.title} layout="fill" />
      <h2>
        <Link href={`/blog/${data.slug}`}>
          <h1>{data.title}</h1>
        </Link>
      </h2>
      <div>{data.publishDate}</div>
      <p>{data.excerpt}</p>
      <div>
        <strong>{data.author}</strong>
      </div>
    </div>
  );
};
