---
platform: OpenAI
slug: openai-transcription
icon_slug: openai
type: transcription
last_reviewed: 2026-09-14
official_site: https://openai.com
pricing_page: https://developers.openai.com/api/docs/pricing
---

# OpenAI Transcription Models

공식 자료로 확인한 주요 출시·업데이트 이력입니다. 발표일·API 공개일·GA 날짜가 다르면 비고에 구분하며, 미확인 날짜는 추정하지 않습니다. Deprecated는 공식 폐기 예고 또는 API 지원 종료이며 공개 가중치 이용 여부와 구분합니다.

[Context / 입력 한도 · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-07-28 | GPT-Transcribe (`gpt-transcribe`) | Current | frontier | Transcription, 멀티모달, 에이전트 작업 | `$0.0045/min` | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) | 파일·Realtime 전사; 공식 API 출시일 |
| 2026-07-28 | GPT-Live-Transcribe (`gpt-live-transcribe`) | Current | frontier | Transcription, 속도 | $0.017/min | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 낮은 지연의 streaming 전사; 문맥·키워드·복수 언어 힌트 |
| 2026-05-07 | GPT-Realtime-Whisper (`gpt-realtime-whisper`) | Current | - | Transcription, 속도 | $0.017/min | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | Realtime 전사 전용; Whisper 공개 가중치와 동일 모델로 간주하지 않음 |
| 2025-12-15 | GPT-4o Mini Transcribe (`gpt-4o-mini-transcribe-2025-12-15`) | Deprecated | - | Transcription, 비용 효율 | 입력 `$1.25` / 출력 `$5` per 1M audio tokens | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) | 공식 dated snapshot 발표; 2026-01-13 기본 alias 변경; 2027-02-26 종료 예정 |
| 2025-03-20 | GPT-4o Transcribe | Deprecated | - | Transcription, 멀티모달 | 입력 `$2.50` / 출력 `$10` per 1M audio tokens | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) | Context window 16,000 tokens; 2026-08-26 폐기 예고, 2027-02-26 API 종료 예정 |
| 2025-03-20 | GPT-4o Mini Transcribe | Deprecated | - | Transcription, 비용 효율 | 입력 `$1.25` / 출력 `$5` per 1M audio tokens | [API 출시 기록](https://developers.openai.com/api/docs/changelog) | [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) | 공식 snapshot `gpt-4o-mini-transcribe-2025-12-15`; 2026-08-26 폐기 예고, 2027-02-26 API 종료 예정 |
| 2023-03-01 | Whisper (`whisper-1`) | Deprecated | - | Transcription, 멀티모달 | `$0.006/min` | [Whisper API 공개](https://openai.com/index/introducing-chatgpt-and-whisper-apis/) | [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) | 공식 Whisper weights/code는 MIT; [공식 저장소](https://github.com/openai/whisper); 2026-08-26 폐기 예고, 2027-02-26 API 종료 예정 |
| 미상 | GPT-4o Transcribe Diarize | Deprecated | - | Transcription | Audio tokens input $2.50 / output $10 per 1M | [모델 소개](https://developers.openai.com/api/docs/models/gpt-4o-transcribe-diarize) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 화자 구분 내장; 출시일 미확인; 2027-02-26 종료 예정 |
