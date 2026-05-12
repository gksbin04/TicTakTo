# React TicTacToe

React 틱택토 게임입니다.

## 프로젝트 구조

- `public/index.html` - React 앱을 로드하는 메인 HTML
- `src/App.js` - 틱택토 게임 로직
- `src/App.css` - 스타일
- `src/index.js` - React 진입점
- `.github/workflows/deploy.yml` - AWS S3 배포 GitHub Actions 워크플로우
- `package.json` - 프로젝트 설정 및 스크립트

## 실행 방법

```bash
npm install
npm start
```

브라우저에서 `http://localhost:3000`으로 접속하면 게임을 확인할 수 있습니다.

## 배포

### 1. 빌드

```bash
npm run build
```

### 2. GitHub Actions로 AWS S3 배포

`.github/workflows/deploy.yml`에 설정된 워크플로우는 다음 환경 변수를 사용합니다:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID` (선택)

원격 리포지터리는 다음과 같이 설정합니다:

```bash
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## 기능

- X/O 플레이어 교대
- 승리 조건 검사
- 무승부 감지
- 게임 초기화 버튼

## GitHub에 올리기 전

- `.gitignore`가 이미 포함되어 있습니다.
- `node_modules`와 `build` 폴더는 Git에 커밋하지 마세요.
