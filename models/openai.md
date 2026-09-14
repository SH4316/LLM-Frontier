---
platform: OpenAI
slug: openai
last_reviewed: 2026-09-14
official_site: https://openai.com
pricing_page: https://developers.openai.com/api/docs/pricing
---

# OpenAI Models

GPT-3.5 API 공개부터 GPT-6 Astra까지의 주요 언어·추론·에이전트 모델 이력입니다. 날짜가 같은 모델은 같은 릴리스의 변형이며, API snapshot은 공식 모델 문서와 함께 기록합니다.

[Context length · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-09-03 | GPT-6 Astra | Current | frontier | 코딩, 추론, Tool call, Vision, 장문맥, 에이전트 작업, Computer use | 공식 API 가격 확인 | [GPT-6 Astra](https://openai.com/index/gpt-6-astra/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 1,050,000 tokens; 화면·브라우저·전문 소프트웨어 다단계 작업 |
| 2026-07-09 | GPT-5.6 Sol | Current | frontier | 코딩, 추론, 속도, 멀티모달, 장문맥, 에이전트 작업, 비용 효율, Computer use, Tool call, Vision | 대표 작업 비용 확인 | [GPT-5.6](https://openai.com/index/gpt-5-6/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 최신 flagship |
| 2026-07-09 | GPT-5.6 Terra | Current | value | 코딩, 추론, 속도, 멀티모달, 장문맥, 에이전트 작업, 비용 효율, Computer use, Tool call, Vision | 지능·비용 균형형 | [GPT-5.6](https://openai.com/index/gpt-5-6/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2026-07-09 | GPT-5.6 Luna | Current | value | 코딩, 추론, 속도, 멀티모달, 장문맥, 에이전트 작업, 비용 효율, Computer use, Tool call, Vision | 비용 민감·고처리량 | [GPT-5.6](https://openai.com/index/gpt-5-6/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2026-05-07 | GPT-5.5-Cyber | Preview | - | 코딩, 추론, 에이전트 작업 | 제한 접근 | [GPT-5.5-Cyber](https://openai.com/index/gpt-5-5-with-trusted-access-for-cyber/) | [OpenAI 모델 카탈로그](https://developers.openai.com/api/docs/models/all) | 방어 목적 제한 프리뷰 |
| 2026-04-23 | GPT-5.5 | Current | - | 코딩, 추론, Computer use, 속도, 멀티모달, 장문맥, 에이전트 작업 | API 가격 확인 | [GPT-5.5](https://openai.com/index/introducing-gpt-5-5/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2026-04-23 | GPT-5.5 Pro | Current | - | 코딩, 추론, Computer use, 멀티모달, 장문맥, 에이전트 작업 | 고성능 가격 확인 | [GPT-5.5](https://openai.com/index/introducing-gpt-5-5/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2026-03-17 | GPT-5.4 mini | Current | value | 코딩, 추론, 속도, 멀티모달, 장문맥, 에이전트 작업, 비용 효율, Computer use, Tool call, Vision | 소형·subagent 비용 확인 | [GPT-5.4 mini·nano](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2026-03-17 | GPT-5.4 nano | Current | value | 코딩, 추론, 속도, 멀티모달, 장문맥, 비용 효율, Tool call, Vision | 고처리량·저비용 | [GPT-5.4 mini·nano](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2026-03-05 | GPT-5.4 | Current | - | 코딩, 추론, Computer use, 속도, 멀티모달, 장문맥, 에이전트 작업 | 대표 작업 비용 확인 | [GPT-5.4](https://openai.com/index/introducing-gpt-5-4/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 컴퓨터 사용·1M 컨텍스트 |
| 2026-03-05 | GPT-5.4 Pro | Current | - | 코딩, 추론, Computer use, 멀티모달, 장문맥, 에이전트 작업 | 고성능 가격 확인 | [GPT-5.4](https://openai.com/index/introducing-gpt-5-4/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2026-02-12 | GPT-5.3-Codex-Spark | Preview | - | 코딩, 속도, 에이전트 작업 | 연구 프리뷰 | [GPT-5.3-Codex-Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/) | [OpenAI 모델 카탈로그](https://developers.openai.com/api/docs/models/all) | 초저지연 코딩 프리뷰 |
| 2026-02-05 | GPT-5.3-Codex | Current | - | 코딩, 추론, 속도, 장문맥, 에이전트 작업, 비용 효율 | 대표 작업 비용 확인 | [GPT-5.3-Codex](https://openai.com/index/introducing-gpt-5-3-codex/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 최신 Codex 주력 |
| 2025-12-18 | GPT-5.2-Codex | Deprecated | - | 코딩, 추론, 장문맥, 에이전트 작업 | 구형 API 가격 확인 | [GPT-5.2-Codex](https://openai.com/index/introducing-gpt-5-2-codex/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 장기 코딩 |
| 2025-12-11 | GPT-5.2 | Current | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업 | API 가격 확인 | [GPT-5.2 소개](https://openai.com/index/introducing-gpt-5-2/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 전문 업무·장기 에이전트 |
| 2025-12-11 | GPT-5.2 Pro | Current | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업 | 고성능 가격 확인 | [GPT-5.2 소개](https://openai.com/index/introducing-gpt-5-2/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 고신뢰성 변형 |
| 2025-11-19 | GPT-5.1-Codex-Max | Deprecated | - | 코딩, 추론, 장문맥, 에이전트 작업, 비용 효율 | 구형 API 가격 확인 | [GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 장기 실행 코딩 |
| 2025-11-12 | GPT-5.1 Instant | Current | - | 코딩, 추론, 속도, 멀티모달, 장문맥, 에이전트 작업 | API 가격 확인 | [GPT-5.1 소개](https://openai.com/index/gpt-5-1/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 대화·적응형 추론 |
| 2025-11-12 | GPT-5.1 Thinking | Current | - | 코딩, 추론, 장문맥, 에이전트 작업 | API 가격 확인 | [GPT-5.1 소개](https://openai.com/index/gpt-5-1/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 고난도 추론 |
| 2025-10-06 | GPT-5 Pro | Current | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업 | 고성능 가격 확인 | [GPT-5 소개](https://openai.com/index/introducing-gpt-5/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 고성능 변형 |
| 2025-09-15 | GPT-5-Codex | Deprecated | - | 코딩, 추론, 장문맥, 에이전트 작업 | 구형 API 가격 확인 | [Codex 업데이트](https://openai.com/index/introducing-upgrades-to-codex/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | Codex 특화 |
| 2025-08-07 | GPT-5 (`gpt-5-2025-08-07`) | Current | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업 | API 가격 확인 | [GPT-5 개발자 소개](https://openai.com/index/introducing-gpt-5-for-developers/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | GPT-5·mini·nano 동시 공개 |
| 2025-08-07 | GPT-5 mini (`gpt-5-mini-2025-08-07`) | Current | value | 코딩, 추론, 속도, 멀티모달, 에이전트 작업, 비용 효율, Tool call, Vision | 저지연·고사용량 | [GPT-5 개발자 소개](https://openai.com/index/introducing-gpt-5-for-developers/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2025-08-07 | GPT-5 nano (`gpt-5-nano-2025-08-07`) | Current | value | 추론, 속도, 멀티모달, 비용 효율, Tool call, Vision | 최저비용 계열 | [GPT-5 개발자 소개](https://openai.com/index/introducing-gpt-5-for-developers/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2025-06-10 | o3-pro | Current | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업 | 고컴퓨트 가격 확인 | [o3-pro Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | o3 고컴퓨트 변형 |
| 2025-04-16 | o3 (`o3-2025-04-16`) | Current | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업 | API 가격 확인 | [o3·o4-mini 소개](https://openai.com/index/introducing-o3-and-o4-mini/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2025-04-16 | o4-mini (`o4-mini-2025-04-16`) | Deprecated | - | 코딩, 추론, 속도, 멀티모달, 에이전트 작업, 비용 효율 | 구형 API 가격 확인 | [o3·o4-mini 소개](https://openai.com/index/introducing-o3-and-o4-mini/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | o-series 소형 추론 모델 |
| 2025-04-14 | GPT-4.1 (`gpt-4.1-2025-04-14`) | Current | - | 코딩, 속도, 멀티모달, 장문맥, 에이전트 작업, 비용 효율 | API 가격 확인 | [GPT-4.1 소개](https://openai.com/index/gpt-4-1/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 1M 컨텍스트 비추론 모델 |
| 2025-04-14 | GPT-4.1 mini (`gpt-4.1-mini-2025-04-14`) | Current | - | 코딩, 속도, 멀티모달, 장문맥, 에이전트 작업, 비용 효율 | API 가격 확인 | [GPT-4.1 소개](https://openai.com/index/gpt-4-1/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2025-04-14 | GPT-4.1 nano (`gpt-4.1-nano-2025-04-14`) | Deprecated | - | 코딩, 속도, 멀티모달, 장문맥, 비용 효율 | 구형 API 가격 확인 | [GPT-4.1 소개](https://openai.com/index/gpt-4-1/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 공식 카탈로그 Deprecated |
| 2025-02-27 | GPT-4.5 Preview (`gpt-4.5-preview-2025-02-27`) | Deprecated | - | 코딩, 추론, 멀티모달, 장문맥 | 연구 프리뷰 | [GPT-4.5 System Card](https://openai.com/index/gpt-4-5-system-card/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 연구 프리뷰 |
| 2025-01-31 | o3-mini (`o3-mini-2025-01-31`) | Deprecated | - | 코딩, 추론, 속도, 에이전트 작업, 비용 효율 | 구형 API 가격 확인 | [o3-mini 소개](https://openai.com/index/openai-o3-mini/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | o1-mini 대체 |
| 2024-12-05 | o1 (`o1-2024-12-17`) | Deprecated | - | 코딩, 추론, 멀티모달, 장문맥, 에이전트 작업, Vision | 구형 API 가격 확인 | [o1 개발자 도구](https://openai.com/index/o1-and-new-tools-for-developers/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | API snapshot은 12-17로 명명 |
| 2024-12-05 | o1-pro | Deprecated | - | 코딩, 추론, 에이전트 작업 | 구형 API 가격 확인 | [ChatGPT Pro 소개](https://openai.com/index/introducing-chatgpt-pro/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 고컴퓨트 o1 변형 |
| 2024-11-20 | GPT-4o (`gpt-4o-2024-11-20`) | Current | - | 코딩, 속도, 멀티모달, 장문맥, 에이전트 작업, Vision | API 가격 확인 | [모델 Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | dated snapshot; 공식 API 모델 문서의 available snapshot 확인; ChatGPT 제공 상태와 구분 |
| 2024-10-01 | GPT-4o Realtime Preview | Deprecated | - | 속도, 멀티모달, 에이전트 작업 | 구형 API 가격 확인 | [Realtime API](https://openai.com/index/introducing-the-realtime-api/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 음성 입출력 |
| 2024-09-12 | o1 Preview (`o1-preview-2024-09-12`) | Deprecated | - | 코딩, 추론 | 구형 API 가격 확인 | [Reasoning 모델 소개](https://openai.com/index/learning-to-reason-with-llms/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | o-series 최초 공개 |
| 2024-09-12 | o1-mini (`o1-mini-2024-09-12`) | Deprecated | - | 코딩, 추론, 속도, 비용 효율 | 구형 API 가격 확인 | [o1-mini 소개](https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | STEM·코딩 특화 |
| 2024-08-06 | GPT-4o (`gpt-4o-2024-08-06`) | Current | - | 코딩, 속도, 멀티모달, 장문맥, 에이전트 작업, Vision | API 가격 확인 | [Structured Outputs](https://openai.com/index/introducing-structured-outputs-in-the-api/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | Structured Outputs 지원; 공식 API 모델 문서의 available snapshot 확인; ChatGPT 제공 상태와 구분 |
| 2024-07-18 | GPT-4o mini (`gpt-4o-mini-2024-07-18`) | Current | value | 속도, 멀티모달, 장문맥, 에이전트 작업, 비용 효율, Vision | 저비용 모델 | [GPT-4o mini 소개](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | GPT-3.5 대체 후보 |
| 2024-05-13 | GPT-4o (`gpt-4o-2024-05-13`) | Deprecated | - | 속도, 멀티모달, 장문맥, 비용 효율, Vision | 구형 API 가격 확인 | [GPT-4o 소개](https://openai.com/index/hello-gpt-4o/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | GPT-4o 최초 snapshot |
| 2024-04-09 | GPT-4 Turbo (`gpt-4-turbo-2024-04-09`) | Deprecated | - | 코딩, 속도, 멀티모달, 장문맥 | 구형 API 가격 확인 | [GPT-4 Turbo 모델 문서](https://developers.openai.com/api/docs/models/gpt-4-turbo) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 공식 snapshot ID 기준 |
| 2024-01-25 | GPT-3.5 Turbo (`gpt-3.5-turbo-0125`) | Deprecated | - | 비용 효율 | 구형 API 가격 확인 | [API 업데이트](https://openai.com/index/new-embedding-models-and-api-updates/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 가격 인하·형식 응답 개선 |
| 2024-01-25 | GPT-4 Turbo Preview (`gpt-4-0125-preview`) | Deprecated | - | 코딩, 장문맥, 에이전트 작업 | 구형 API 가격 확인 | [API 업데이트](https://openai.com/index/new-embedding-models-and-api-updates/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2023-11-06 | GPT-3.5 Turbo (`gpt-3.5-turbo-1106`) | Deprecated | - | 장문맥, 에이전트 작업, 비용 효율 | 구형 API 가격 확인 | [DevDay 모델 발표](https://openai.com/index/new-models-and-developer-products-announced-at-devday/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | JSON mode·병렬 function calling |
| 2023-11-06 | GPT-4 Turbo Preview (`gpt-4-1106-preview`) | Deprecated | - | 속도, 장문맥, 에이전트 작업 | 구형 API 가격 확인 | [DevDay 모델 발표](https://openai.com/index/new-models-and-developer-products-announced-at-devday/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 128K 컨텍스트 |
| 2023-11-06 | GPT-4 Turbo Vision Preview (`gpt-4-1106-vision-preview`) | Deprecated | - | 속도, 멀티모달, 장문맥, 에이전트 작업 | 구형 API 가격 확인 | [DevDay 모델 발표](https://openai.com/index/new-models-and-developer-products-announced-at-devday/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 비전 변형 |
| 2023-06-13 | GPT-3.5 Turbo (`gpt-3.5-turbo-0613`) | Deprecated | - | 에이전트 작업, 비용 효율 | 구형 API 가격 확인 | [Function calling 업데이트](https://openai.com/index/function-calling-and-other-api-updates/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | Function calling 추가 |
| 2023-06-13 | GPT-3.5 Turbo 16K (`gpt-3.5-turbo-16k-0613`) | Deprecated | - | 장문맥, 에이전트 작업 | 구형 API 가격 확인 | [Function calling 업데이트](https://openai.com/index/function-calling-and-other-api-updates/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | 16K 컨텍스트 |
| 2023-06-13 | GPT-4 (`gpt-4-0613`, `gpt-4-32k-0613`) | Deprecated | - | 코딩, 추론, 장문맥, 에이전트 작업 | 구형 API 가격 확인 | [Function calling 업데이트](https://openai.com/index/function-calling-and-other-api-updates/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) |  |
| 2023-03-14 | GPT-4 (`gpt-4-0314`, `gpt-4-32k-0314`) | Deprecated | - | 코딩, 추론, 장문맥 | 구형 API 가격 확인 | [GPT-4 소개](https://openai.com/index/gpt-4/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | GPT-4 최초 공개 |
| 2023-03-01 | GPT-3.5 Turbo (`gpt-3.5-turbo-0301`) | Deprecated | - | 비용 효율 | 구형 API 가격 확인 | [ChatGPT·Whisper API](https://openai.com/index/introducing-chatgpt-and-whisper-apis/) | [OpenAI 가격](https://developers.openai.com/api/docs/pricing) | GPT-3.5 Turbo API 최초 공개 |

## Realtime and audio variants

위 표는 주요 텍스트·추론 모델을 중심으로 하며, Realtime·Audio·Search Preview 같은 API 특화 변형은 아래 공식 카탈로그에서 확인합니다.

- [OpenAI 전체 모델 카탈로그](https://developers.openai.com/api/docs/models/all)
- [OpenAI 모델 Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)
