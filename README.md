# Frontier LLM Index

주요 Frontier LLM과 가성비 모델, 플랫폼별 출시 이력을 GitHub 파일로 관리하는 정적 인덱스입니다.

## Preview

메인 페이지는 [HTMLPreview에서 열기](https://htmlpreview.github.io/?https://github.com/SH4316/LLM-Frontier/blob/main/index.html)로 확인할 수 있습니다.

플랫폼별 원본 인덱스는 [`models/`](./models/) 아래에 있습니다.

## 구조

- `index.html`: Markdown 인덱스에서 생성되는 메인 페이지
- `models/*.md`: 플랫폼별 모델 버전·출시일·공식 문서 인덱스
- `styles.css`: 메인 페이지 스타일 원본
- `scripts/build-site.mjs`: Markdown을 읽어 `index.html`을 생성
- `scripts/validate-site.mjs`: 날짜·상태·태그·공식 링크 검증
- `docs/UPDATE_RULES.md`: 수동 업데이트 및 가성비 교체 규칙
- `docs/PR_RULES.md`: Pull Request 및 관리자 승인 규칙
- `AGENTS.md`: LLM 작업 지침

## 업데이트

모델 Markdown을 수정한 뒤 다음 명령을 실행합니다.

```bash
npm run validate
npm run build
```

생성된 `index.html`을 수정사항과 함께 Pull Request에 포함합니다. 자세한 내용은 [`docs/UPDATE_RULES.md`](./docs/UPDATE_RULES.md)를 확인하십시오.
