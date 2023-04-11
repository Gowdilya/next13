async function getData() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = result.json();
  return data;
}
export default async function Page() {
  const data = await getData();
  return (
    <main>
      <h1 className="bg-red-500">{data.title}</h1>
      <p>{data.body}</p>
    </main>
  );
}
