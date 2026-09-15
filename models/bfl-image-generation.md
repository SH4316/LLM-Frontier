---
platform: Black Forest Labs
slug: bfl-image-generation
icon_slug: bfl
type: image-generation
last_reviewed: 2026-09-14
official_site: https://bfl.ai
pricing_page: https://docs.bfl.ai/quick_start/pricing
---

# Black Forest Labs Image Generation Models

공식 자료로 확인한 주요 출시·업데이트 이력입니다. 발표일·API 공개일·GA 날짜가 다르면 비고에 구분하며, 미확인 날짜는 추정하지 않습니다. Deprecated는 공식 폐기 예고 또는 API 지원 종료이며 공개 가중치 이용 여부와 구분합니다.

[Context / 입력 한도 · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-01-15 | FLUX.2 [klein] 4B | Current | value | Image generation, 속도 | $0.014/image | [FLUX.2 klein 발표](https://bfl.ai/blog/flux2-klein-towards-interactive-visual-intelligence) | [BFL pricing](https://docs.bfl.ai/quick_start/pricing) | Apache 2.0 공개 가중치 |
| 2026-01-15 | FLUX.2 [klein] 9B | Current | value | Image generation, 속도 | $0.015/image | [FLUX.2 klein 발표](https://bfl.ai/blog/flux2-klein-towards-interactive-visual-intelligence) | [BFL pricing](https://docs.bfl.ai/quick_start/pricing) | FLUX Non-Commercial License 공개 가중치 |
| 2025-12-16 | FLUX.2 [max] | Current | frontier | Image generation, Image input, 추론 | `$0.07/MP` | [FLUX.2 overview](https://docs.bfl.ai/flux_2/flux2_overview) | [BFL pricing](https://docs.bfl.ai/quick_start/pricing) | API/Playground reference 수 제한 상이 |
| 2025-11-25 | FLUX.2 [pro] | Current | frontier | Image generation, Image input | T2I `$0.03/MP`; edit `$0.045/MP` | [FLUX.2 발표](https://bfl.ai/blog/flux-2) | [BFL pricing](https://docs.bfl.ai/quick_start/pricing) | 2026-03-03 preview endpoint 속도 업데이트 |
| 2025-11-25 | FLUX.2 [flex] | Current | - | Image generation, Image input | $0.05/MP | [FLUX.2 overview](https://docs.bfl.ai/flux_2/flux2_overview) | [BFL pricing](https://docs.bfl.ai/quick_start/pricing) | typography·sampling 세부 제어 |
| 2025-11-25 | FLUX.2 [dev] | Current | - | Image generation, Image input | 자체 호스팅; API 가격 해당 없음 | [FLUX.2 overview](https://docs.bfl.ai/flux_2/flux2_overview) | [BFL pricing](https://docs.bfl.ai/quick_start/pricing) | FLUX Dev License — 비상업·비프로덕션 조건; 상업 라이선스 별도 |
