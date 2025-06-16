import Link from "next/link";
import { BreadcrumbChallenges } from "./components/BreadcrumbChallenges";

export default function Home() {
  return (
    <div>
      <main className="font-mono flex justify-center">
        <div className="mt-3">
          <BreadcrumbChallenges currentPage="" />
        </div>
        <div className="flex mt-8 p-8">
          <ol className="list-disc">
            <li>
              <Link href="/1" className="text-lg">
                Desafio 1
              </Link>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
