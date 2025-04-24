export async function generateMetadata() {
  return { title: `Post` };
}

export async function generateStaticParams() {
  // Giả sử bạn có 2 bài blog có slug là 'hello' và 'world'
  return [{ slug: "hello" }, { slug: "world" }];
}

export default function Page() {
  return <h1>Slug</h1>;
}
