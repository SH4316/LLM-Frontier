---
platform: xAI
slug: xai-image-generation
icon_slug: xai
type: image-generation
last_reviewed: 2026-09-14
official_site: https://x.ai
pricing_page: https://docs.x.ai/developers/pricing
---

# xAI Image Generation Models

공식 자료로 확인한 주요 출시·업데이트 이력입니다. 발표일·API 공개일·GA 날짜가 다르면 비고에 구분하며, 미확인 날짜는 추정하지 않습니다. Deprecated는 공식 폐기 예고 또는 API 지원 종료이며 공개 가중치 이용 여부와 구분합니다.

[Context / 입력 한도 · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-08-07 | Grok Imagine Image 2.0 (`grok-imagine-image-2.0`) | Current | frontier | Image generation, Image input | `$0.04–$0.08/image`; 입력 `$0.01/image` | [Grok Imagine Image 2 발표](https://x.ai/news/grok-imagine-image-2) | [xAI Imagine pricing](https://docs.x.ai/developers/pricing) | 1K/2K·low/medium 품질별 가격 |
| 2026-05-06 | Grok Imagine Image Quality (`grok-imagine-image-quality`) | Current | frontier | Image generation, Image input | 1K `$0.05`; 2K `$0.07`; 입력 `$0.01/image` | [Grok Imagine Quality Mode 발표](https://x.ai/news/grok-imagine-quality-mode) | [xAI Quality model](https://docs.x.ai/developers/models/grok-imagine-image-quality) | 2026-11-02 retirement 예정 |
| 미상 | Grok Imagine Image (`grok-imagine-image`) | Current | value | Image generation, Image input | `$0.02/image` 1K/2K; 입력 `$0.002/image` | [xAI Grok Imagine Image](https://docs.x.ai/developers/models/grok-imagine-image) | [xAI Imagine pricing](https://docs.x.ai/developers/pricing) | alias `grok-imagine-image-2026-03-02`; alias 날짜를 출시일로 간주하지 않음 |
