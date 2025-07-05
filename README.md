### 1. 저장소 클론
<code>git clone https://github.com/masterjms/suman_project.git</code>
<code>cd suman</code>

### 2. 의존성 설치
<code>npm install</code>

### 3. 개발 서버 실행
<code>npm run dev</code>

### 4. 정적 배포용 빌드 (선택사항)
<code>npm run build</code>

# 🌐 주요 페이지 구성
/ : 메인 페이지 – 슬로건, 사업 소개, 강점 강조

/company/history : 회사 연혁

/company/ci : CI 소개

/company/location : 회사 위치

/business/service : 서비스 소개

/business/product : 제품 소개

/recruit/people : 인재상

/recruit/notice : 채용 공고

/support/faq : FAQ

/support/contact : 상담 문의 폼

/support/location : 오시는 길

# 📦 기술 스택
Next.js (React 기반 SSR 지원)

TypeScript (정적 타입)

Tailwind CSS (유틸리티 기반 스타일링)

Vite (로컬 빌드 속도 향상용 – 설정 여부에 따라 다름)

# 💡 개발 가이드
컴포넌트는 PascalCase, 파일명은 kebab-case 사용

다국어 확장을 고려한 구조 (i18n 도입 가능성 있음)

CMS 연동 고려 중 (Notion, Contentful 등)

