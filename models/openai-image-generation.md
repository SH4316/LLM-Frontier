---
platform: OpenAI
slug: openai-image-generation
icon_slug: openai
type: image-generation
last_reviewed: 2026-09-14
official_site: https://openai.com
pricing_page: https://developers.openai.com/api/docs/pricing
---

# OpenAI Image Generation Models

공식 자료로 확인한 주요 출시·업데이트 이력입니다. 발표일·API 공개일·GA 날짜가 다르면 비고에 구분하며, 미확인 날짜는 추정하지 않습니다. Deprecated는 공식 폐기 예고 또는 API 지원 종료이며 공개 가중치 이용 여부와 구분합니다.

[Context / 입력 한도 · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-09-08 | GPT-Image-2.5 Sunburst (`gpt-image-2.5-sunburst`) | Current | frontier | Image generation, Image input | 입력 text `$5` / image `$8` / 출력 image `$30` per 1M tokens | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) | 공식 snapshot `gpt-image-2.5-sunburst-2026-09-08`; API 공개일은 changelog로 확인 |
| 2026-09-08 | GPT-Image-2.5 Flare (`gpt-image-2.5-flare`) | Current | - | Image generation, Image input, 속도 | 입력 text `$5` / image `$8` / 출력 image `$30` per 1M tokens | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) | 공식 snapshot `gpt-image-2.5-flare-2026-09-08`; API 공개일은 changelog로 확인 |
| 2026-04-21 | GPT-Image-2 (`gpt-image-2`) | Current | - | Image generation, Image input | [모델별 공식 가격표 참조](https://developers.openai.com/api/docs/pricing) | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) | 공식 snapshot `gpt-image-2-2026-04-21` |
| 2025-12-16 | GPT-Image-1.5 | Deprecated | - | Image generation, Image input | 공식 모델별 가격표 확인 | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 공식 API 출시 기록; 현재 Deprecated |
| 2025-10-06 | GPT-Image-1 Mini | Deprecated | - | Image generation, Image input | 공식 모델별 가격표 확인 | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | DevDay API 출시; 현재 Deprecated |
| 2025-04-23 | GPT-Image-1 | Deprecated | - | Image generation, Image input | 공식 모델별 가격표 확인 | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | Image API 최초 공개; 2026-10-23 종료 예정 |
| 2023-11-06 | DALL·E 3 | Deprecated | - | Image generation | 해당 없음 | [DALL·E 3 API 공개](https://developers.openai.com/api/docs/changelog) | [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) | API 공개일 기준; 현재 API 폐기·삭제; GPT-Image 계열로 대체 |
