import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-widest">ORIGIN</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">ホーム</a>
            <a href="#" className="text-gray-600 hover:text-black">商品</a>
            <a href="#" className="text-gray-600 hover:text-black">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-wider">あなたの日常に、上質な一足を。</h2>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div key={id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={`/assets/origin${id}.png`}
                alt={`商品${id}`}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">ORIGIN ストッキング {id}</h3>
                <p className="text-gray-500 mt-2">魅力を引き立てるエレガントなデザイン</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
