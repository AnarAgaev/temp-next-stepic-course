import { JSX } from "react";
import { Post } from "@/app/blog/page";
import styles from "./style.module.scss";
import Link from "next/link";
import {Metadata} from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${slug}`,
    );
    const post = (await data.json()) as Post;

    return {
        title: `Post: ${post.title}`,
    }
}

export default async function Page({ params }: Props): Promise<JSX.Element> {
  const { slug } = await params;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
  );
  const post = (await data.json()) as Post;

  return (
    <>
      <div className={styles.wrap}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <Link href={"/blog"}>Go to the all Posts</Link>
    </>
  );
}
