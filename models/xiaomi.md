---
platform: Xiaomi MiMo
slug: xiaomi
type: language
last_reviewed: 2026-09-14
official_site: https://mimo.mi.com
pricing_page: https://mimo.mi.com/docs/price/pay-as-you-go
---

# Xiaomi MiMo Models

공식 자료에서 확인한 주요 출시 이력입니다. 가격은 확인일 기준이며 API 비용과 자체 호스팅 비용을 구분합니다. 앱 실행 환경의 기능은 모델 고유 기능과 구분합니다.

[Context length · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-09-08 | MiMo-X-Pro-Preview | Preview | frontier | 코딩, Tool call, 멀티모달, 에이전트 작업 | Limited free invitation beta; token price 미상 | [official Desktop release](https://mimo.mi.com/docs/en-US/news/latest/mimo-desktop) | [official pricing](https://mimo.mi.com/docs/price/pay-as-you-go) | Context, weights, license 미상; computer control is MiMo Desktop/X-series product functionality |
| 2026-06-29 | MiMo-V2.5-Pro | Current | frontier | 코딩, 추론, Tool call, 장문맥, 에이전트 작업 | $0.435/$0.87 input/output; cache-hit $0.0036 per 1M | [official open-source release](https://mimo.mi.com/docs/en-US/news/latest/v2.5-open-sourced) | [official pricing](https://mimo.mi.com/) | 1M; MIT |
| 2026-06-29 | MiMo-V2.5 | Current | value | 코딩, 추론, Tool call, Vision, 멀티모달, 장문맥, 에이전트 작업 | $0.14/$0.28; cache-hit $0.0028 | [official open-source release](https://mimo.mi.com/docs/en-US/news/latest/v2.5-open-sourced) | [official pricing](https://mimo.mi.com/) | 1M; native image/video/audio; MIT |
| 2025-12-16 | MiMo-V2-Flash | Deprecated | - | 코딩, Tool call, 장문맥, 에이전트 작업 | Historical: $0.10/$0.30; cache-hit $0.01 | [official release](https://mimo.mi.com/docs/news/news20251216) | [official pricing](https://mimo.mi.com/docs/price/pay-as-you-go) | 256K; MIT; deprecated 2026-06-30 |
| 미상 | MiMo-7B-RL | Current | value | 코딩, 추론 | Self-hosted; 미상 | [official repository](https://github.com/XiaomiMiMo/MiMo) | [official pricing](https://mimo.mi.com/docs/price/pay-as-you-go) | Official repository documents RL training window expansion to 48K; maximum context 미상; MIT |
