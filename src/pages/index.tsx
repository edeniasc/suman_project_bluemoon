import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { homeContent } from "@/data/home";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* 메인 슬로건 배너 */}
        <section
          className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center"
          style={{ backgroundImage: `url(${homeContent.bannerImage})` }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">{homeContent.slogan}</h1>
            <p className="text-lg">{homeContent.description}</p>
          </div>
        </section>

        {/* 핵심 비즈니스 소개 */}
        <section className="max-w-6xl mx-auto py-20 px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">수만은 이런 기업입니다</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {homeContent.businessIntro}
          </p>
        </section>

        {/* 실적/자랑거리/강점 */}
        <section className="bg-gray-100 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-10">주요 강점 및 실적</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {homeContent.highlights.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
