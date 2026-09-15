---
platform: Meta
slug: meta
last_reviewed: 2026-09-14
official_site: https://www.llama.com
pricing_page: https://www.llama.com/docs/model-cards-and-prompt-formats/
---

# Meta Models

Meta Llama 및 Muse Spark 계열의 주요 모델 이력입니다. 오픈 웨이트의 다운로드 가능 여부와 상용 호스팅 API의 지원 상태는 별도로 표시합니다.

[Context length · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-09-02 | Muse Spark 1.3 | Current | frontier | 코딩, 추론, Tool call, 장문맥, 에이전트 작업 | 가격 미상; Meta Model API·Muse Code | [Muse Spark 1.3 소개](https://research.meta.ai/blog/introducing-muse-spark-1-3) | [Meta Model API](https://developer.meta.com/ai/) | Meta Model API·Muse Code에서 사용 가능; 공개 가중치 출시는 공식 로드맵에 기록 |
| 2026-08-05 | Muse Spark 1.2 | Current | - | 코딩, Tool call, 장문맥, 에이전트 작업 | 가격 미상; Meta Model API·Muse Code | [Muse Code·Muse Spark 1.2 소개](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) | [Meta Model API](https://developer.meta.com/ai/) | Muse Code beta 기반 모델; Meta Model API에서 확대된 글로벌 접근 제공 |
| 2026-07-09 | Muse Spark 1.1 | Current | - | 코딩, 추론, Computer use, Tool call, Vision, 멀티모달, 장문맥, 에이전트 작업 | 가격 미상; Meta Model API public preview | [Muse Spark 1.1 소개](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) | [Meta Model API](https://developer.meta.com/ai/) | 1M context; Meta AI 앱·meta.ai Thinking mode 제공 |
| 2026-04-08 | Muse Spark | Current | - | 추론, Tool call, Vision, 멀티모달, 에이전트 작업 | 가격 미상; Meta AI·private API preview | [Muse Spark 소개](https://ai.meta.com/blog/introducing-muse-spark-msl/) | [Meta Model API](https://developer.meta.com/ai/) | Meta AI·Meta AI 앱 제공; 선택 사용자 대상 private API preview |
| 2025-04-05 | Llama 4 Scout | Current | - | 멀티모달, 장문맥, 코딩, 추론, 비용 효율, Tool call | 단일 GPU 배포 지향 | [Llama 4 소개](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) | [Llama 모델 GitHub](https://github.com/meta-llama/llama-models) | 공개 가중치 |
| 2025-04-05 | Llama 4 Maverick | Current | other | 멀티모달, 장문맥, 코딩, 추론, Tool call | 자체 배포 비용 확인 | [Llama 4 소개](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) | [Llama 모델 GitHub](https://github.com/meta-llama/llama-models) | Other 대표: Meta 공식 발표의 current open-weight multimodal Llama 4 모델. Muse Spark 1.3 Frontier와 분리. [공식 발표](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) |
| 2025-04-05 | Llama 4 Behemoth | Preview | - | 멀티모달, 추론, 코딩 | 미출시 모델 | [Llama 4 소개](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) | [Llama 모델 GitHub](https://github.com/meta-llama/llama-models) | 발표 당시 학습 중 |
| 2024-09-25 | Llama 3.2 텍스트 | Current | - | 속도, 장문맥, 비용 효율 | 자체 배포 비용 확인 | [Llama 3.2 소개](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/) | [Llama 문서](https://www.llama.com/docs/model-cards-and-prompt-formats/) | 1B·3B |
| 2024-09-25 | Llama 3.2 Vision | Current | - | 멀티모달, 장문맥, 비용 효율 | 자체 배포 비용 확인 | [Llama 3.2 소개](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/) | [Llama 문서](https://www.llama.com/docs/model-cards-and-prompt-formats/) | 11B·90B |
| 2024-07-23 | Llama 3.1 | Current | - | 추론, 코딩, 장문맥, 에이전트 작업, 비용 효율 | 자체 배포 비용 확인 | [Llama 3.1 소개](https://ai.meta.com/blog/meta-llama-3-1/) | [Llama 문서](https://www.llama.com/docs/model-cards-and-prompt-formats/) | 405B 포함 |
| 2024-04-18 | Llama 3 | Current | - | 추론, 코딩 | 자체 배포 비용 확인 | [Llama 3 소개](https://ai.meta.com/blog/meta-llama-3/) | [Llama 문서](https://www.llama.com/docs/model-cards-and-prompt-formats/) | 공개 가중치 |
| 2023-07-18 | Llama 2 | Current | - | 비용 효율 | 자체 배포 비용 확인 | [Llama 2 소개](https://ai.meta.com/blog/llama-2/) | [Llama 문서](https://www.llama.com/docs/model-cards-and-prompt-formats/) | 공개 가중치 |
| 미상 | Llama 3.3 70B | Current | - | 추론, 코딩, 장문맥, 비용 효율 | 자체 배포 비용 확인 | [Llama 연말 업데이트](https://ai.meta.com/blog/future-of-ai-built-with-llama/) | [Llama 모델 GitHub](https://github.com/meta-llama/llama-models) | GitHub·LICENSE 날짜 불일치 |

원본 모델 목록은 [Meta Llama 공식 GitHub](https://github.com/meta-llama/llama-models)에서 확인합니다.
