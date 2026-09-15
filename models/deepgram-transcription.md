---
platform: Deepgram
slug: deepgram-transcription
icon_slug: deepgram
type: transcription
last_reviewed: 2026-09-14
official_site: https://deepgram.com
pricing_page: https://deepgram.com/pricing
---

# Deepgram Transcription Models

공식 자료로 확인한 주요 출시·업데이트 이력입니다. 발표일·API 공개일·GA 날짜가 다르면 비고에 구분하며, 미확인 날짜는 추정하지 않습니다. Deprecated는 공식 폐기 예고 또는 API 지원 종료이며 공개 가중치 이용 여부와 구분합니다.

[Context / 입력 한도 · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-04-29 | Flux Multilingual (`flux-general-multi`) | Current | frontier | Transcription, 속도, 에이전트 작업 | streaming `$0.0078/min` | [Flux Multilingual GA 발표](https://deepgram.com/learn/deepgram-launches-flux-multilingual-press-release) | [Deepgram pricing](https://deepgram.com/pricing) | 10개 언어, code-switching, turn detection 400ms 미만 |
| 2025-10-01 | Flux English (`flux-general-en`) | Current | - | Transcription, 속도, 에이전트 작업 | `$0.0065/min` 프로모션, 정가 `$0.0077/min` | [Flux 발표](https://deepgram.com/learn/introducing-flux-conversational-speech-recognition) | [Deepgram pricing](https://deepgram.com/pricing) | conversational speech recognition |
| 2025-02-12 | Nova-3 | Current | frontier | Transcription, 멀티모달 | pre-recorded `$0.0043/min`; streaming `$0.0048–$0.0058/min` 프로모션 | [Nova-3 발표](https://deepgram.com/changelog/introducing-nova-3) | [Deepgram pricing](https://deepgram.com/pricing) | 단일 언어/다국어 streaming 가격 상이 |
| 2023-09-19 | Nova-2 | Current | value | Transcription, 비용 효율 | 현재 모델별 가격 미상 | [Nova-2 발표](https://deepgram.com/learn/nova-2-speech-to-text-api) | [Deepgram pricing](https://deepgram.com/pricing) | 공식 모델 목록에는 유지됨 |
