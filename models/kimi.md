---
platform: Kimi / Moonshot AI
slug: kimi
last_reviewed: 2026-09-14
official_site: https://www.kimi.ai
pricing_page: https://platform.kimi.ai/docs/pricing/chat
---

# Kimi Models

Moonshot AI의 Kimi 공개·API 모델 이력입니다. API 종료 상태와 공개 가중치 다운로드 가능 여부는 별도로 판단합니다.

[Context length · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-07-16 | Kimi K3 / `kimi-k3` | Current | frontier | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업, 비용 효율, Tool call | 대표 작업 비용 확인 | [Kimi K3](https://www.kimi.ai/blog/kimi-k3) | [Kimi K3 가격](https://www.kimi.ai/resources/kimi-k3-pricing) | 1M context |
| 2026-06-16 | Kimi K2.7 Code / `kimi-k2.7-code` | Current | frontier | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업, Tool call | 대표 작업 비용 확인 | [Kimi K2.7 Code](https://www.kimi.ai/resources/kimi-k2-7-code) | [Kimi K2.7 문서](https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart) | 256K context |
| 2026-06-16 | Kimi K2.7 Code Highspeed | Current | value | 코딩, 추론, 속도, 멀티모달, 장문맥, 에이전트 작업, Tool call, Vision | 고속 비용 확인 | [Kimi K2.7 Code](https://www.kimi.ai/resources/kimi-k2-7-code) | [Kimi K2.7 문서](https://www.kimi.ai/resources/kimi-k2-7-code) |  |
| 2026-04-20 | Kimi K2.6 / `kimi-k2.6` | Current | value | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업, Tool call, Vision | 대표 작업 비용 확인 | [Kimi K2.6](https://www.kimi.ai/blog/kimi-k2-6) | [Kimi K2.6 가격](https://platform.kimi.ai/docs/pricing/chat-k26) | 256K context |
| 2026-01-27 | Kimi K2.5 | Deprecated | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업, 비용 효율 | 구형 가격 확인 | [Kimi K2.5](https://www.kimi.ai/blog/kimi-k2-5) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) | 2026-08-31 종료 |
| 2025-11-06 | kimi-k2-thinking / kimi-k2-thinking-turbo | Deprecated | - | 추론, 코딩, 장문맥, 에이전트 작업, 속도 | 구형 가격 확인 | [Kimi K2 Thinking](https://www.kimi.ai/blog/kimi-k2-thinking) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) |  |
| 2025-09-05 | kimi-k2-0905-preview | Deprecated | - | 코딩, 추론, 장문맥, 에이전트 작업 | 구형 가격 확인 | [Kimi Release Log](https://platform.kimi.ai/blog/posts/changelog) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) | K2 weights 업데이트 |
| 2025-08-01 | kimi-k2-turbo-preview | Deprecated | - | 코딩, 속도, 장문맥, 비용 효율 | 구형 가격 확인 | [Kimi Release Log](https://platform.kimi.ai/blog/posts/changelog) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) |  |
| 2025-07-11 | Kimi K2 Base / Instruct / `kimi-k2-0711-preview` | Deprecated | - | 코딩, 추론, 장문맥, 에이전트 작업 | 구형 가격 확인 | [Kimi K2 GitHub](https://github.com/MoonshotAI/Kimi-K2) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) | K2 계열 2026-05-25 종료 |
| 2025-06-21 | Kimi-VL-A3B-Thinking-2506 | Current | - | 멀티모달, 추론, 장문맥, 에이전트 작업 | 자체 배포 비용 확인 | [Kimi-VL GitHub](https://github.com/MoonshotAI/Kimi-VL) | [Kimi 모델 문서](https://platform.kimi.ai/docs/models) |  |
| 2025-06-20 | Kimi-Researcher | Current | - | 추론, 장문맥, 에이전트 작업 | 자체 배포 비용 확인 | [Kimi-Researcher GitHub](https://github.com/MoonshotAI/Kimi-Researcher) | [Kimi 모델 문서](https://platform.kimi.ai/docs/models) | Deep Research 프로젝트 |
| 2025-04-27 | Kimi-Audio-7B | Current | - | 멀티모달, 속도 | 자체 배포 비용 확인 | [Kimi-Audio GitHub](https://github.com/MoonshotAI/Kimi-Audio) | [Kimi 모델 문서](https://platform.kimi.ai/docs/models) |  |
| 2025-04-25 | Kimi-Audio-7B-Instruct | Current | - | 멀티모달, 속도 | 자체 배포 비용 확인 | [Kimi-Audio GitHub](https://github.com/MoonshotAI/Kimi-Audio) | [Kimi 모델 문서](https://platform.kimi.ai/docs/models) | 공개 웨이트 |
| 2025-04-15 | Kimina-Prover Preview / Kimina-Prover-72B | Preview | - | 추론, 장문맥 | 자체 배포 비용 확인 | [Kimina-Prover GitHub](https://github.com/MoonshotAI/Kimina-Prover-Preview) | [Kimi 모델 문서](https://platform.kimi.ai/docs/models) |  |
| 2025-04-10 | Kimi-VL-A3B-Instruct | Deprecated | - | 멀티모달, 추론, 장문맥, 에이전트 작업 | 자체 배포 비용 확인 | [Kimi-VL GitHub](https://github.com/MoonshotAI/Kimi-VL) | [Kimi 모델 문서](https://platform.kimi.ai/docs/models) | 공개 웨이트 |
| 2025-04-10 | Kimi-VL-A3B-Thinking | Deprecated | - | 멀티모달, 추론, 장문맥 | 자체 배포 비용 확인 | [Kimi-VL GitHub](https://github.com/MoonshotAI/Kimi-VL) | [Kimi 모델 문서](https://platform.kimi.ai/docs/models) |  |
| 2025-02-17 | kimi-latest | Deprecated | - | 추론, 에이전트 작업 | 구형 가격 확인 | [플랫폼 변경 이력](https://platform.kimi.ai/docs/platform-changelog) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) | 2026-01-28 종료 |
| 2025-01-20 | Kimi K1.5 | Deprecated | - | 코딩, 추론, 멀티모달, 장문맥 | 구형 가격 확인 | [Kimi K1.5 GitHub](https://github.com/MoonshotAI/Kimi-k1.5) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) |  |
| 2025-01-13 | moonshot-v1-8k/32k/128k-vision-preview | Deprecated | - | 멀티모달, 장문맥 | 구형 가격 확인 | [플랫폼 변경 이력](https://platform.kimi.ai/docs/platform-changelog) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) | 2026-08-31 종료 |
| 2024-08-28 | moonshot-v1-auto | Deprecated | - | 장문맥, 비용 효율 | 구형 가격 확인 | [플랫폼 변경 이력](https://platform.kimi.ai/docs/platform-changelog) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) | 2026-08-31 종료 |
| 미상 | moonshot-v1-8k / 32k / 128k | Deprecated | - | 장문맥, 비용 효율 | 구형 가격 확인 | [Kimi 모델 목록](https://platform.kimi.ai/docs/models) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) | 2026-08-31 V1 계열 종료 |
| 미상 | kimi-thinking-preview | Deprecated | - | 추론 | 구형 가격 확인 | [Kimi 모델 목록](https://platform.kimi.ai/docs/models) | [Kimi 가격](https://platform.kimi.ai/docs/pricing/chat) | 출시일 미확인 |
| 미상 | Kimi-Dev-72B | Current | - | 코딩, 추론, 에이전트 작업 | 자체 배포 비용 확인 | [Kimi-Dev GitHub](https://github.com/MoonshotAI/Kimi-Dev) | [Kimi 모델 문서](https://platform.kimi.ai/docs/models) | 프로젝트 날짜 충돌 |
