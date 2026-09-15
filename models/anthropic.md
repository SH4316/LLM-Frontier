---
platform: Anthropic
slug: anthropic
last_reviewed: 2026-09-14
official_site: https://www.anthropic.com
pricing_page: https://claude.com/pricing
---

# Anthropic Models

Claude 3 세대부터 Claude 5 계열까지의 주요 공개·API 모델 이력입니다. 상태는 공식 수명주기 문서를 기준으로 기록합니다.

[Context length · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-09-01 | Claude Fable 5.1 | Current | frontier | 추론, 코딩, 멀티모달, 장문맥, 에이전트 작업, Computer use, Tool call, Vision | Fable 가격 확인 | [Fable 5.1·Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1) | [Claude 가격](https://claude.com/pricing) |  |
| 2026-09-01 | Claude Mythos 5.1 | Preview | - | 추론, 코딩, 멀티모달, 장문맥, 에이전트 작업 | 제한 접근 | [Fable 5.1·Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1) | [Claude 가격](https://claude.com/pricing) | 신뢰 접근 전용; Frontier 선택에서 제외 |
| 2026-07-24 | Claude Opus 5 | Current | frontier | 코딩, 추론, 장문맥, 에이전트 작업, 비용 효율, Computer use, Tool call, Vision | Opus 가격 확인 | [Claude Opus 5](https://www.anthropic.com/news/claude-opus-5) | [Claude 가격](https://claude.com/pricing) |  |
| 2026-06-30 | Claude Sonnet 5 | Current | value | 코딩, 추론, 속도, Computer use, 에이전트 작업 | $2/$10 input/output per 1M tokens; 2026-08-10 영구 가격 확정 | [Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) | [Claude 가격](https://claude.com/pricing) | Opus 4.8 근접 성능을 더 낮은 가격으로 제공; 공식 발표 기준 |
| 2026-06-09 | Claude Fable 5 | Current | frontier | 추론, 코딩, 멀티모달, 장문맥, 에이전트 작업 | Fable 가격 확인 | [Fable 5·Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) | [Claude 가격](https://claude.com/pricing) | 사용자 지정 AA 기반 Frontier 선택 |
| 2026-06-09 | Claude Mythos 5 | Preview | - | 추론, 코딩, 멀티모달, Computer use, 에이전트 작업 | 제한 접근 | [Fable 5·Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5) | [Claude 가격](https://claude.com/pricing) | 신뢰 접근 전용 |
| 2026-05-28 | Claude Opus 4.8 | Current | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업 | Opus 가격 확인 | [Claude Opus](https://www.anthropic.com/claude/opus) | [Claude 가격](https://claude.com/pricing) | 뉴스룸 발표일 확인 |
| 2026-04-16 | Claude Opus 4.7 | Current | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업 | Opus 가격 확인 | [Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7) | [Claude 가격](https://claude.com/pricing) |  |
| 2026-04-07 | Claude Mythos Preview | Deprecated | - | 추론, 코딩, 멀티모달, Computer use, 에이전트 작업 | 제한 접근 | [Project Glasswing](https://www.anthropic.com/project/glasswing) | [Claude 가격](https://claude.com/pricing) | 공식 수명주기상 Deprecated |
| 2026-02-17 | Claude Sonnet 4.6 | Current | - | 코딩, 추론, Computer use, 장문맥, 에이전트 작업 | Sonnet 가격 확인 | [Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6) | [Claude 가격](https://claude.com/pricing) |  |
| 2026-02-05 | Claude Opus 4.6 | Current | - | 코딩, 추론, Computer use, 장문맥, 에이전트 작업 | Opus 가격 확인 | [Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6) | [Claude 가격](https://claude.com/pricing) | 1M 컨텍스트 베타 |
| 2025-11-24 | Claude Opus 4.5 | Current | - | 코딩, 추론, Computer use, 에이전트 작업, 비용 효율 | Opus 가격 확인 | [Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5) | [Claude 가격](https://claude.com/pricing) |  |
| 2025-10-15 | Claude Haiku 4.5 | Current | other | 코딩, 속도, 비용 효율, 에이전트 작업, Computer use, Tool call, Vision | 저비용·고속 계열 | [Claude Haiku 4.5](https://www.anthropic.com/news/claude-haiku-4-5) | [Claude 가격](https://claude.com/pricing) | Other 대표: 공식 선택 가이드가 빠른 응답·낮은 지연·비용 민감·sub-agent 작업에 권장하는 현재 Haiku 모델. [공식 선택 가이드](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model) |
| 2025-09-29 | Claude Sonnet 4.5 | Current | - | 코딩, 추론, Computer use, 에이전트 작업 | Sonnet 가격 확인 | [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5) | [Claude 가격](https://claude.com/pricing) |  |
| 2025-08-05 | Claude Opus 4.1 | Deprecated | - | 코딩, 추론, Computer use, 에이전트 작업 | 구형 가격 확인 | [Claude Opus 4.1](https://www.anthropic.com/news/claude-opus-4-1) | [Claude 가격](https://claude.com/pricing) | 2026-08-05 은퇴 |
| 2025-05-22 | Claude Opus 4 | Deprecated | - | 코딩, 추론, Computer use, 멀티모달, 에이전트 작업 | 구형 가격 확인 | [Claude 4](https://www.anthropic.com/news/claude-4) | [Claude 가격](https://claude.com/pricing) | 2026-06-15 은퇴 |
| 2025-05-22 | Claude Sonnet 4 | Deprecated | - | 코딩, 추론, 속도, 멀티모달, 에이전트 작업 | 구형 가격 확인 | [Claude 4](https://www.anthropic.com/news/claude-4) | [Claude 가격](https://claude.com/pricing) | 2026-06-15 은퇴 |
| 2025-02-24 | Claude 3.7 Sonnet | Deprecated | - | 추론, 코딩, Computer use, 에이전트 작업 | 구형 가격 확인 | [Claude 3.7 Sonnet](https://www.anthropic.com/news/claude-3-7-sonnet) | [Claude 가격](https://claude.com/pricing) | 2026-02-19 은퇴 |
| 2024-10-22 | Claude 3.5 Sonnet 업그레이드 | Deprecated | - | 코딩, Computer use, 멀티모달, 에이전트 작업 | 구형 가격 확인 | [3.5 모델·컴퓨터 사용](https://www.anthropic.com/news/3-5-models-and-computer-use) | [Claude 가격](https://claude.com/pricing) | 2025-10-28 은퇴 |
| 2024-10-22 | Claude 3.5 Haiku | Deprecated | - | 코딩, 속도, 비용 효율, 에이전트 작업 | 구형 가격 확인 | [3.5 모델·컴퓨터 사용](https://www.anthropic.com/news/3-5-models-and-computer-use) | [Claude 가격](https://claude.com/pricing) | 2026-02-19 은퇴 |
| 2024-06-21 | Claude 3.5 Sonnet | Deprecated | - | 코딩, 추론, 속도, 멀티모달, 장문맥 | 구형 가격 확인 | [Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet) | [Claude 가격](https://claude.com/pricing) | 2025-10-28 은퇴 |
| 2024-03-13 | Claude 3 Haiku | Deprecated | - | 속도, 멀티모달, 비용 효율 | 구형 가격 확인 | [Claude 3 Haiku](https://www.anthropic.com/news/claude-3-haiku) | [Claude 가격](https://claude.com/pricing) | 2026-04-20 은퇴 |
| 2024-03-04 | Claude 3 Opus | Deprecated | - | 추론, 코딩, 멀티모달, 장문맥, 에이전트 작업 | 구형 가격 확인 | [Claude 3 family](https://www.anthropic.com/news/claude-3-family) | [Claude 가격](https://claude.com/pricing) | 2026-01-05 은퇴 |
| 2024-03-04 | Claude 3 Sonnet | Deprecated | - | 코딩, 속도, 멀티모달, 장문맥, 비용 효율 | 구형 가격 확인 | [Claude 3 family](https://www.anthropic.com/news/claude-3-family) | [Claude 가격](https://claude.com/pricing) | 2025-07-21 은퇴 |

모델 전체 목록과 수명주기는 [Anthropic 모델 문서](https://platform.claude.com/docs/en/models/overview) 및 [모델 지원 종료 문서](https://platform.claude.com/docs/en/about-claude/model-deprecations)에서 확인합니다.
