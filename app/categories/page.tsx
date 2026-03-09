import Link from "next/link";
import { categories, newsData } from "../../data/news";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Voltar ao Início
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Categorias</h1>
          <p className="text-gray-600 mt-2">Explore notícias por categoria</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const categoryNews = newsData.filter(
              (news) => news.category === category,
            );
            return (
              <div key={category} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {category}
                </h2>
                <p className="text-gray-600 mb-4">
                  {categoryNews.length} notícia
                  {categoryNews.length !== 1 ? "s" : ""}
                </p>
                <Link
                  href={`/categories/${encodeURIComponent(category.toLowerCase())}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver Notícias
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
