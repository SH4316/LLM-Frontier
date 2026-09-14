---
platform: GLM / Z.AI
slug: glm
last_reviewed: 2026-09-14
official_site: https://z.ai
pricing_page: https://docs.z.ai/guides/overview/pricing
---

# GLM Models

Z.AI·BigModel의 GLM 계열 주요 공개·API 모델 이력입니다. 중국어 문서와 글로벌 Z.AI 문서의 날짜가 다르면 비고에 원문 기준을 남깁니다.

[Context length · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-08-26 | GLM-5.3-Flash | Current | value | 코딩, 추론, 속도, 멀티모달, 장문맥, 에이전트 작업, Computer use, 비용 효율, Tool call, Vision | 대표 작업 비용 확인 | [GLM-5.3-Flash 문서](https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) | 320B total / 18B active |
| 2026-08-14 | GLM-5.3 | Current | frontier | 코딩, 추론, 장문맥, 에이전트 작업, Tool call | 공식 가격 확인 | [GLM-5.3 출시 블로그](https://z.ai/blog/glm-5.3) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) | Z.AI 공식 블로그 “GLM-5.3: Frontier Coding with Emergent Cyber Capabilities”의 2026-08-14 게시일과 본문 출시 문구 기준. [BigModel 공식 기록](https://docs.bigmodel.cn/cn/update/new-releases)의 2026-08-19 “上线”은 후속 플랫폼 제공 기록이며, 블로그의 약 2주 후 공개 가중치 예고 및 checkpoint 변경일과 구분 |
| 2026-06-16 | GLM-5.2 | Current | - | 코딩, 장문맥, 에이전트 작업 | 공식 가격 확인 | [GLM-5.2 문서](https://docs.bigmodel.cn/cn/guide/models/text/glm-5.2) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | 1M context |
| 2026-04-07 | GLM-5.1 | Current | - | 코딩, 추론, 장문맥, 에이전트 작업 | 공식 가격 확인 | [GLM-5.1 문서](https://docs.z.ai/guides/llm/glm-5.1) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) |  |
| 2026-03-15 | GLM-5-Turbo | Current | - | 추론, 속도, 장문맥, 에이전트 작업 | 공식 가격 확인 | [GLM-5-Turbo 문서](https://docs.z.ai/guides/llm/glm-5-turbo) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) |  |
| 2026-02-12 | GLM-5 | Current | - | 코딩, 추론, 장문맥, 에이전트 작업 | 대표 작업 비용 확인 | [GLM-5 문서](https://docs.z.ai/guides/llm/glm-5) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) |  |
| 2026-01-19 | GLM-4.7-Flash | Current | - | 코딩, 추론, 속도, 비용 효율 | 공식 가격 확인 | [GLM Release Log](https://docs.bigmodel.cn/cn/update/new-releases) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) |  |
| 2025-12-22 | GLM-4.7 | Current | - | 코딩, 추론, 장문맥, 에이전트 작업 | 공식 가격 확인 | [GLM-4.7 문서](https://docs.z.ai/guides/llm/glm-4.7) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) |  |
| 2025-12-08 | GLM-4.6V / FlashX / Flash | Current | - | 멀티모달, 추론, 장문맥, 에이전트 작업 | 공식 가격 확인 | [GLM-4.6V 문서](https://docs.z.ai/guides/vlm/glm-4.6v) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) |  |
| 2025-09-30 | GLM-4.6 | Current | - | 코딩, 추론, 장문맥, 에이전트 작업 | 공식 가격 확인 | [GLM Release Log](https://docs.bigmodel.cn/cn/update/new-releases) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) | 200K context |
| 2025-08-11 | GLM-4.5V | Current | - | 멀티모달, 추론, 장문맥, 에이전트 작업 | 공식 가격 확인 | [GLM-V GitHub](https://github.com/zai-org/GLM-V) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) | 영상·GUI 지원 |
| 2025-07-28 | GLM-4.5 / GLM-4.5-X | Current | - | 코딩, 추론, 장문맥, 에이전트 작업 | 대표 작업 비용 확인 | [GLM-4.5 문서](https://docs.z.ai/guides/llm/glm-4.5) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) | 355B total / 32B active |
| 2025-07-28 | GLM-4.5-Air / GLM-4.5-AirX | Current | - | 코딩, 추론, 속도, 비용 효율, 에이전트 작업, Tool call | 경량 에이전트 계열 | [GLM-4.5 문서](https://docs.z.ai/guides/llm/glm-4.5) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) |  |
| 2025-07-28 | GLM-4.5-Flash | Deprecated | - | 코딩, 추론, 속도, 비용 효율 | 구형 가격 확인 | [GLM Release Log](https://docs.bigmodel.cn/cn/update/new-releases) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | 2026-01-30 종료 |
| 2025-04-14 | GLM-4-Air-250414 / Flash-250414 / FlashX-250414 | Current | - | 코딩, 추론, 속도, 비용 효율 | 공식 가격 확인 | [GLM Release Log](https://docs.bigmodel.cn/cn/update/new-releases) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | API 공개 버전 |
| 2025-04-14 | GLM-Z1-AirX / Air / Flash | Deprecated | - | 추론, 속도, 비용 효율 | 구형 가격 확인 | [GLM Release Log](https://docs.bigmodel.cn/cn/update/new-releases) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | Z1 계열 종료 |
| 2025-04-14 | GLM-4-9B-0414 / GLM-4-32B-Base-0414 / GLM-4-32B-0414 | Current | - | 코딩, 추론, 장문맥, 에이전트 작업 | 자체 배포 비용 확인 | [GLM-4 GitHub](https://github.com/zai-org/GLM-4) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | 공개 웨이트 |
| 2025-04-14 | GLM-Z1-9B-0414 / 32B-0414 / Rumination-32B-0414 | Deprecated | - | 추론, 코딩 | 구형 가격 확인 | [GLM-4 GitHub](https://github.com/zai-org/GLM-4) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) |  |
| 2024-06-05 | GLM-4-9B / Chat / Chat-HF / Chat-1M / GLM-4V-9B | Deprecated | - | 코딩, 추론, 멀티모달, 장문맥 | 자체 배포 비용 확인 | [GLM-4 GitHub](https://github.com/zai-org/GLM-4) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | 공개 웨이트 |
| 미상 | GLM-4-Plus | Current | - | 추론, 장문맥 | 공식 가격 확인 | [GLM-4 모델 문서](https://docs.bigmodel.cn/cn/guide/models/text/glm-4) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | 공식 목록 등재, 출시일 미확인 |
| 미상 | GLM-4-0520 | Deprecated | - | 코딩, 추론 | 구형 가격 확인 | [GLM-4 모델 문서](https://docs.bigmodel.cn/cn/guide/models/text/glm-4) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | 공식 문서상 종료 |
| 미상 | GLM-4-Long | Current | - | 장문맥, 추론, 비용 효율 | 공식 가격 확인 | [GLM-4-Long 문서](https://docs.bigmodel.cn/cn/guide/models/text/glm-4-long) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | 1M context |
| 미상 | GLM-4V-Plus-0111 / GLM-4V-Flash | Current | - | 멀티모달, 추론, 속도, 비용 효율 | 공식 가격 확인 | [GLM 모델 목록](https://docs.bigmodel.cn/cn/guide/start/model-overview) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) |  |
| 미상 | GLM-4.1V-Thinking-FlashX / Flash / 9B-Thinking | Current | - | 멀티모달, 추론, 장문맥, 에이전트 작업, 속도 | 공식 가격 확인 | [GLM-V GitHub](https://github.com/zai-org/GLM-V) | [BigModel 가격](https://docs.bigmodel.cn/cn/guide/start/pricing) | 문서 간 07-01·07-02 날짜 충돌 |
| 미상 | GLM-4.7-FlashX | Current | - | 코딩, 추론, 속도, 비용 효율, 에이전트 작업 | 공식 가격 확인 | [GLM-4.7 문서](https://docs.z.ai/guides/llm/glm-4.7) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) | 출시일 미확인 |
| 미상 | GLM-5V-Turbo | Current | - | 멀티모달, 코딩, 장문맥, 에이전트 작업 | 공식 가격 확인 | [GLM-5V-Turbo 문서](https://docs.z.ai/guides/vlm/glm-5v-turbo) | [Z.AI 가격](https://docs.z.ai/guides/overview/pricing) | 문서 간 날짜 충돌 |
