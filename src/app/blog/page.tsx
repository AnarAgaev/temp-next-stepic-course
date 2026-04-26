import { JSX } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: `Blog page`
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Page(): Promise<JSX.Element> {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  );
  const posts = (await data.json()) as Post[];

  console.log(posts);

  return (
    <>
      <ul className={styles.list}>
        {posts.map(
          (post: Post): JSX.Element => (
            <li key={post.id}>
              <Link className={styles.item} href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ),
        )}
      </ul>
    </>
  );
}
