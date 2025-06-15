import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        <header className="flex justify-center border-b-2 border-neutral-600 p-8" >
          <h1 className="text-4xl">Fiap Desafios</h1>
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
