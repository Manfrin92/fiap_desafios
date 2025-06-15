import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Fiap Desafios</h1>
        <ol>
          <li>
            <Link href="/1">Desafio 1</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
