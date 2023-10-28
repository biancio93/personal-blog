import Image from "../../components/Image/Image";
import Link from "next/Link";
import { getAllSlugs, getPostData } from "../../lib/post";
import styles from "../../styles/BlogPost.module.css";

export default function BlogPost(props) {
  const { postData } = props;
  return (
    <div className={styles.container}>
      <div style={{ maxWidth: "600px", marginTop: "20px" }}>
        <Image src={postData.coverImage} alt={postData.title} layout="fill" />
        <h1>{postData.title}</h1>
        <p>{postData.author} / {postData.publishDate}</p>
        <p>{postData.content}</p>
        <div style={{ marginTop: "50px" }}>
            <Link href="/">Back to the frontpage</Link>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};
