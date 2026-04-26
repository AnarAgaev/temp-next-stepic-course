import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About page",
};

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquam, autem debitis dignissimos, eligendi in ipsum itaque magni
        molestias nihil optio praesentium quibusdam voluptas. Cupiditate eius
        esse molestiae sit tenetur.
      </p>
    </>
  );
}
