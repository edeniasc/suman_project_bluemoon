import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-blue-700">Suman</span>
        </Link>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <Link href="/company/history">회사소개</Link>
          <Link href="/business/service">사업분야</Link>
          <Link href="/careers/philosophy">인재채용</Link>
          <Link href="/support/faq">고객지원</Link>
        </nav>
      </div>
    </header>
  );
}
