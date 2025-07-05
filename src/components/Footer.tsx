export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 mt-20">
      <div className="max-w-7xl mx-auto text-sm">
        <div className="mb-4">
          <strong className="text-lg">㈜수만</strong>
          <p className="mt-1 text-gray-400">
            대전광역시 ○○구 ○○로 123<br />
            사업자등록번호: 123-45-67890 | 대표자: 홍길동<br />
            이메일: contact@suman.co.kr | 전화: 02-123-4567
          </p>
        </div>
        <div className="text-gray-500 text-xs mt-6">
          © {year} Suman Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
