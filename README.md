# Frontier LLM Index

주요 Frontier LLM과 가성비 모델, 플랫폼별 출시 이력을 GitHub 파일로 관리하는 정적 인덱스입니다.

모델 목록은 카드가 아닌 표로 표시합니다. Frontier는 플랫폼별 최고 모델 1–2개 항목을 선정합니다. Anthropic은 Fable 5.1·Mythos 5.1을 한 항목으로 묶고 Opus 5를 별도로 유지하되, 각 모델의 출시 기록과 접근 제한 정보는 보존합니다. Value는 Sonnet·DeepSeek Flash·Gemini Flash처럼 실용 성능이 높으면서 비용이 낮은 모델만 선정합니다. 소형 모델의 메모리별 실행 추천은 Local 페이지에서 별도로 관리합니다.

## Preview

현재 수정본은 [검토 브랜치 미리보기](https://htmlpreview.github.io/?https://github.com/SH4316/LLM-Frontier/blob/feat/model-tables-and-catalogs/index.html)에서 확인하십시오. 표 UI와 수정된 Frontier·Value 분류를 반영했으며 메인 과거 모델 섹션은 없습니다. [PR #1](https://github.com/SH4316/LLM-Frontier/pull/1) 병합 전에는 main 미리보기에 이전 화면이 표시됩니다.

병합된 메인 페이지는 [HTMLPreview에서 열기](https://htmlpreview.github.io/?https://github.com/SH4316/LLM-Frontier/blob/main/index.html)로 확인할 수 있습니다.

[음성 전사](https://htmlpreview.github.io/?https://github.com/SH4316/LLM-Frontier/blob/main/transcription.html) · [이미지 생성](https://htmlpreview.github.io/?https://github.com/SH4316/LLM-Frontier/blob/main/image-generation.html) · [메모리별 Local 모델](https://htmlpreview.github.io/?https://github.com/SH4316/LLM-Frontier/blob/main/local-models.html)

플랫폼별 원본 인덱스는 [`models/`](./models/) 아래에 있습니다.

## 구조

- `index.html`: Markdown 인덱스에서 생성되는 메인 페이지
- `transcription.html`, `image-generation.html`: 음성 전사·이미지 생성 별도 페이지
- `local-models.html`: Unsloth 기반 메모리별 Local 추천
- `specs/*.md`: 사양·기능 근거 및 Local 추천 Markdown 원본
- `models/*.md`: 플랫폼별 모델 버전·출시일·공식 문서 인덱스
- `styles.css`: 메인 페이지 스타일 원본
- `scripts/build-site.mjs`: Markdown을 읽어 4개 HTML 페이지를 생성
- `scripts/validate-site.mjs`: 날짜·상태·태그·공식 링크 검증
- `docs/UPDATE_RULES.md`: 수동 업데이트 및 가성비 교체 규칙
- `docs/PR_RULES.md`: Pull Request 및 관리자 승인 규칙
- `AGENTS.md`: LLM 작업 지침

## 업데이트

모델 Markdown을 수정한 뒤 다음 명령을 실행합니다.

```bash
npm run build
npm run validate
```

생성된 4개 HTML 페이지를 수정사항과 함께 Pull Request에 포함합니다. 자세한 내용은 [`docs/UPDATE_RULES.md`](./docs/UPDATE_RULES.md)를 확인하십시오.

메인에는 Frontier·Value·플랫폼 타임라인 링크만 표시합니다. 과거 모델은 플랫폼별 Markdown에서 확인합니다. Price·추가 설명은 별도 열이며 중국 모델의 OpenRouter 링크·가격 스냅샷은 `specs/openrouter.md`에서 관리합니다.
