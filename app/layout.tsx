import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Blog",
  description: "Um blog de exemplo com notícias e categorias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YCZ5Y2KV7Y"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YCZ5Y2KV7Y');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sobre o Blog</h3>
                <p className="text-gray-300">
                  Um blog de exemplo para testes de serviços, com notícias
                  mockadas e renderização no lado do servidor.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white">
                      Página Inicial
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className="text-gray-300 hover:text-white"
                    >
                      Categorias
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-white"
                    >
                      Sobre
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <p className="text-gray-300">
                  Email: hyago@okngroup.com
                  <br />
                  Telefone: (11) 9999-9999
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300">
                &copy; 2024 Meu Blog. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
