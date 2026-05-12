# ⭕ TicTakTo: React 기반 게임 및 AWS Amplify 호스팅

본 프로젝트는 생성형 AI를 활용하여 제작된 React 틱택토 게임이며, **AWS Amplify** 서비스를 활용한 간편 호스팅 및 배포를 목적으로 합니다.

---

## 📝 시스템 및 기능 소개
* **시스템 개요**: 클래식한 틱택토 게임을 현대적인 React UI로 재해석한 웹 애플리케이션입니다.
* **주요 기능**:
  * 실시간 승리/무승부 판정 로직
  * 깔끔하고 직관적인 게임 인터페이스 및 초기화 기능
  * AWS Amplify를 통한 HTTPS 보안 호스팅 적용

---

## 🎮 게임 기능

| 기능 | 설명 |
|------|------|
| **플레이어 교대** | X와 O가 번갈아가며 게임 진행 |
| **승리 판정** | 가로, 세로, 대각선 3줄 완성 시 자동 감지 |
| **무승부 처리** | 9칸이 모두 찼을 때 무승부 자동 처리 |
| **게임 초기화** | 버튼 클릭으로 즉시 새 게임 시작 |
| **실시간 상태** | 현재 플레이어 및 게임 상태 즉시 표시 |

---

## 📂 프로젝트 구조

```
react-tictakto/
├── public/
│   └── index.html          # 진입 HTML 파일
├── src/
│   ├── App.js              # 메인 게임 로직 및 상태 관리
│   ├── App.css             # 게임 UI 스타일링
│   └── index.js            # React 렌더링 엔트리 포인트
├── package.json            # 프로젝트 의존성 및 스크립트
└── README.md               # 프로젝트 문서
```

---

## ☁️ AWS Amplify 서비스 활용
* **호스팅 방식**: 별도의 워크플로우 파일 작성 없이, GitHub 리포지토리를 Amplify 서비스에 직접 연결하여 호스팅을 자동화하였습니다.
* **배포 효율성**: 코드 수정 후 Push 시 Amplify가 변경 사항을 감지하여 즉시 업데이트된 버전을 배포합니다.

---

## 🔗 관련 링크
* **GitHub Repository**: [https://github.com/gksbin04/TicTakTo](https://github.com/gksbin04/TicTakTo)
* **Amplify 호스팅 URL**: (https://main.dl72ywjafuers.amplifyapp.com/)
* **S3 백업 엔드포인트**: [http://tictaktobucket-20263622.s3-website-us-east-1.amazonaws.com](http://tictaktobucket-20263622.s3-website-us-east-1.amazonaws.com)
* **Amplify 서비스 활용 영상**: [YouTube 시연 영상 바로가기](https://www.youtube.com/watch?v=qiniHBbZfrs)

---
**작성자**: 김한빈 (지능형 임베디드/백엔드 개발자 지망)
