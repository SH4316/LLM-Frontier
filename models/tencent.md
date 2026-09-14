---
platform: Tencent HY/Hunyuan
slug: tencent
type: language
last_reviewed: 2026-09-14
official_site: https://hunyuan.tencent.com
pricing_page: https://cloud.tencent.com/document/product/1823/130055
---

# Tencent HY/Hunyuan Models

공식 자료에서 확인한 주요 출시 이력입니다. 가격은 확인일 기준이며 API 비용과 자체 호스팅 비용을 구분합니다. 앱 실행 환경의 기능은 모델 고유 기능과 구분합니다.

[Context length · Open weights · 특화 기능 및 근거](../specs/models.md)

## Version Timeline

| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |
|---|---|---|---|---|---|---|---|---|
| 2026-08-28 | Hy4 preview | Preview | frontier | 코딩, 추론, Tool call, 장문맥, 에이전트 작업 | ¥6/¥18 input/output; cache-hit ¥0.3 per 1M | [official release](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/) | [TokenHub pricing](https://cloud.tencent.com/document/product/1823/130055) | 1M in repository; launch article says exceeding 1M; Apache 2.0 |
| 2026-07-06 | Hy3 | Current | frontier | 코딩, 추론, Tool call, 장문맥, 에이전트 작업 | ¥1/¥4; cache-hit ¥0.25 | [official release](https://www.tencent.com/tencent-hunyuan-officially-releases-hy3-advancing-agent-capabilities-and-deeper-product-integration/) | [TokenHub pricing](https://cloud.tencent.com/document/product/1823/130055) | 256K; Apache 2.0 |
| 2025-06-27 | Hunyuan-A13B-Instruct | Current | - | 코딩, 추론, Tool call, 장문맥, 에이전트 작업 | ¥0.5/¥2 per 1M | [official model card](https://huggingface.co/tencent/Hunyuan-A13B-Instruct) | [Tencent Cloud pricing](https://cloud.tencent.com/document/product/1729/97731) | 256K; Tencent Hunyuan A13B Community License |
| 2025-04-16 | Hunyuan-TurboS-20250416 | Current | - | 코딩, 추론, 장문맥, 에이전트 작업 | 미상 | [official release timeline](https://cloud.tencent.com/document/product/1729/97765) | [Tencent Cloud pricing](https://cloud.tencent.com/document/product/1729/97731) | 256K; official source does not publish model weights/license |
| 2024-11-05 | Tencent-Hunyuan-Large | Current | - | 코딩, 장문맥 | Self-hosted; hosted price 미상 | [official repository](https://github.com/Tencent-Hunyuan/Tencent-Hunyuan-Large) | [Tencent Cloud pricing](https://cloud.tencent.com/document/product/1729/97731) | 256K pretrain / 128K instruct; Tencent Hunyuan Community License |
