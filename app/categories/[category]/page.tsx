import { notFound } from "next/navigation";
import Link from "next/link";
import { newsData, categories } from "../../../data/news";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const categoryExists = categories.some(cat => cat.toLowerCase() === decodedCategory.toLowerCase());

  if (!categoryExists) {
    notFound();
  }

  const categoryNews = newsData.filter(news =>
    news.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/categories" className="text-blue-600 hover:text-blue-800">← Voltar às Categorias</Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Categoria: {decodedCategory}</h1>
          <p className="text-gray-600 mt-2">
            {categoryNews.length} notícia{categoryNews.length !== 1 ? 's' : ''} nesta categoria
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {categoryNews.map((news) => (
            <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
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

        {categoryNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhuma notícia encontrada nesta categoria.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: encodeURIComponent(category.toLowerCase()),
  }));
}