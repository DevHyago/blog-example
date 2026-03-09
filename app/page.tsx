import Link from "next/link";
import { newsData } from "../data/news";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Meu Blog</h1>
          <p className="text-gray-600 mt-2">Notícias e artigos sobre tecnologia e programação</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Últimas Notícias</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsData.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{news.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href={`/news/${news.slug}`} className="hover:text-blue-600">
                      {news.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(news.date).toLocaleDateString('pt-BR')}</span>
                    <Link href={`/news/${news.slug}`} className="text-blue-600 hover:text-blue-800">
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/categories" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Ver Todas as Categorias
          </Link>
        </div>
      </main>
    </div>
  );
}
