import { notFound } from "next/navigation";
import Link from "next/link";
import { newsData } from "../../../data/news";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsPage({ params }: PageProps) {
  const { slug } = await params;
  const news = newsData.find(item => item.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800">← Voltar ao Início</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {news.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{news.title}</h1>
          <div className="text-gray-600 mb-8">
            <time dateTime={news.date}>
              {new Date(news.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">{news.excerpt}</p>
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {news.content}
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Ver Mais Notícias
          </Link>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}