---
platform: Google
slug: google-image-generation
icon_slug: google
type: image-generation
last_reviewed: 2026-09-14
official_site: https://ai.google.dev
pricing_page: https://ai.google.dev/gemini-api/docs/pricing
---

# Google Image Generation Models

공식 자료로 확인한 주요 출시·업데이트 이력입니다. 발표일·API 공개일·GA 날짜가 다르면 비고에 구분하며, 미확인 날짜는 추정하지 않습니다. Deprecated는 공식 폐기 예고 또는 API 지원 종료이며 공개 가중치 이용 여부와 구분합니다.

[Context / 입력 한도 · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-06-30 | Gemini 3.1 Flash Lite Image / Nano Banana 2 Lite (`gemini-3.1-flash-lite-image`) | Current | value | Image generation, Image input, 속도 | `$0.0336/image` at 1K; Batch 약 50% | [Gemini 3.1 Flash Lite Image](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite-image) | [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) | GA |
| 2026-05-28 | Gemini 3.1 Flash Image / Nano Banana 2 (`gemini-3.1-flash-image`) | Current | frontier | Image generation, Image input, 멀티모달 | `$0.067` 1K; `$0.101` 2K; `$0.151` 4K | [Gemini 3.1 Flash Image](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-image) | [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) | Preview 2026-02-26; GA 2026-05-28 |
| 2026-05-28 | Gemini 3 Pro Image / Nano Banana Pro (`gemini-3-pro-image`) | Current | frontier | Image generation, Image input, 추론 | `$0.134` 1K/2K; `$0.24` 4K | [Gemini 3 Pro Image](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-image) | [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) | GA; Preview는 2025-11월 |
| 2025-08-14 | Vertex AI Imagen 4 (`imagen-4.0-generate-*`) | Deprecated | - | Image generation | 역사적 목록 가격 `$0.02–$0.06/image` | [Vertex AI Imagen 4](https://cloud.google.com/vertex-ai/generative-ai/docs/models/imagen/4-0-generate) | [Vertex AI pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing) | 2026-06-30 discontinuation |
