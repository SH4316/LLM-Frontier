# Local Models by Memory

확인일: 2026-09-14. Unsloth 공식 가이드와 해당 GGUF 배포 파일을 참고한 수동 추천입니다. 아래 컨텍스트 시작값은 보수적인 운영 제안이며 실측 보장값이 아닙니다.

## 메모리 기준

전용 GPU의 VRAM과 Apple Silicon 통합 메모리를 구분합니다. 통합 메모리는 macOS·다른 앱과 공유하므로 설치 용량 전체를 모델에 사용할 수 없습니다. RAM 오프로딩으로 로딩할 수 있는 모델과 GPU 메모리에 상주하는 모델도 구분합니다.

가중치 크기는 공개 파일의 대략적인 GB입니다. GGUF 외에 Vision projector, KV cache, 런타임 버퍼와 운영체제 여유가 필요합니다. 양자화 계열의 개략 권장치가 특정 파일 합계보다 작으면 해당 값으로 실행 가능 여부를 판단하지 않습니다. 장치의 GB/GiB 표기 차이도 고려합니다.

[Unsloth 메모리 기준](https://unsloth.ai/docs/models/tutorials/how-to-run-llms-with-docker.md) · [Qwen3.5 실행 가이드](https://unsloth.ai/docs/models/qwen3.5.md)

## 메모리별 추천

| 메모리 | 추천 모델 | 양자화 | 가중치 크기 | 실행 조건 / Context | 특화 기능 | 공식 근거 |
|---|---|---|---|---|---|---|
| 8 GB | Qwen3.5-4B | UD-Q4_K_XL | 약 2.91 GB + projector 0.67 GB | GPU: 4–8K부터 시작. Apple 8 GB: OS 여유가 작으므로 2–4K 짧은 문맥부터 확인; 실행 여유 확인 필요 | Vision, 코딩, 추론, 다국어 | [Unsloth 가이드](https://unsloth.ai/docs/models/qwen3.5.md) · [GGUF 파일](https://huggingface.co/unsloth/Qwen3.5-4B-GGUF) |
| 16 GB | Qwen3.5-9B; GPU 한계 조합: Qwen3.8-27B | 기본 UD-Q4_K_XL; 27B 대안 UD-Q3_K_XL | 9B 약 5.97 GB + projector 0.92 GB; 27B main GGUF 약 13.1 GB | 기본 8–16K부터 시작. 27B는 16 GB GPU에서 KV cache·인코더 여유가 작으므로 짧은 문맥 조건부; Apple은 9B 우선 | Vision, 코딩, 추론 | [Qwen3.5 가이드](https://unsloth.ai/docs/models/qwen3.5.md) · [9B GGUF](https://huggingface.co/unsloth/Qwen3.5-9B-GGUF) · [Qwen3.8 가이드](https://unsloth.ai/docs/models/qwen3.8.md) · [27B GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) |
| 24 GB | GLM-4.7-Flash | UD-Q4_K_XL | 약 17.6 GB | GPU: 8–16K부터 시작. Apple: OS·다른 앱 여유 확인 후 짧은 문맥부터 시작. 모델 최대 202,752 tokens를 이 용량에서 보장하지 않음 | 코딩, 추론, 에이전트 작업 | [Unsloth 가이드](https://unsloth.ai/docs/models/tutorials/glm-4.7-flash.md) · [GGUF 파일](https://huggingface.co/unsloth/GLM-4.7-Flash-GGUF) |
| 32 GB | GPU: Qwen3.8-27B; Apple: Qwen3.5-35B-A3B | GPU UD-Q6_K_XL; Apple UD-Q4_K_XL | GPU main GGUF 약 25.3 GB; Apple 약 22.2 GB + projector 0.90 GB | GPU 4–8K, Apple 8–16K부터 시작. GPU 27B는 별도 인코더·런타임 공간 확인; 필요하면 더 낮은 양자화 사용 | Vision, 코딩, 추론, 에이전트 작업 | [Qwen3.8 가이드](https://unsloth.ai/docs/models/qwen3.8.md) · [27B GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) · [Qwen3.5 가이드](https://unsloth.ai/docs/models/qwen3.5.md) · [35B GGUF](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF) |
| 48 GB | Qwen3.5-35B-A3B | UD-Q6_K_XL | 약 32.1 GB + projector 0.90 GB | 16–32K부터 시작. native 약 262K / YaRN 확장 1M은 별도의 메모리 조건이며 이 구간의 실행 보장값이 아님 | Vision, 코딩, 추론, 에이전트 작업 | [Unsloth 가이드](https://unsloth.ai/docs/models/qwen3.5.md) · [GGUF 파일](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF) |
| 64 GB | GPU 조건부: Qwen3.5-122B-A10B; Apple: Qwen3.5-35B-A3B | GPU UD-Q3_K_XL; Apple UD-Q8_K_XL | GPU 약 57.0 GB + projector 0.91 GB; Apple 약 48.7 GB + projector 0.90 GB | GPU 122B는 한계 조합: 4–8K부터 시작하고 KV·런타임 여유 확인. Apple 35B는 8–16K부터 시작; 파일 합계 기준으로 판단 | Vision, 코딩, 추론, 에이전트 작업 | [Unsloth 가이드](https://unsloth.ai/docs/models/qwen3.5.md) · [122B GGUF](https://huggingface.co/unsloth/Qwen3.5-122B-A10B-GGUF) · [35B GGUF](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF) |
| 96 GB | Qwen3.8-Flash-Next | UD-IQ1_M | main quantization 약 74.5 GB | Unsloth는 실용 용량으로 96 GB 제시. 8–16K부터 시작. MTP 약 1–2 GB 및 인코더·KV·런타임 여유 별도 확보. 저비트 양자화의 품질 차이 고려 | Vision, 코딩, 추론, 에이전트 작업 | [Unsloth 가이드](https://unsloth.ai/docs/models/qwen3.8-next.md) · [GGUF 파일](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) |
| 128 GB | Qwen3.8-Flash-Next | GPU UD-Q4_K_XL; Apple 장문맥용 대안 UD-IQ1_M | Q4 약 111 GB; IQ1 약 74.5 GB | Q4는 8K부터 시작하여 여유 확인. Apple에서 문맥 여유를 우선하면 IQ1 사용. 모델 최대 문맥과 이 용량의 실용 문맥을 구분 | Vision, 코딩, 추론, 에이전트 작업 | [Unsloth 가이드](https://unsloth.ai/docs/models/qwen3.8-next.md) · [GGUF 파일](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) |
| 160 GB 이상 | GLM-5.3-Flash | UD-IQ3_XXS | 약 120 GB + projector 1.1 GB | Unsloth는 약 128–150 GB 요구치, 160 GB 선호 조건 제시. 128 GB를 보장 조합으로 표시하지 않음; 8–16K부터 시작 | Vision, 코딩, 추론, Computer use | [Unsloth 가이드](https://unsloth.ai/docs/models/glm-5.3-flash.md) · [공식 모델 사양](https://docs.z.ai/guides/vlm/glm-5.3-flash) |
| 256 GB 이상 검토 | Kimi K2.5 | UD-TQ1_0 | 약 240 GB | Unsloth의 성능 조건은 RAM+VRAM 또는 통합 메모리 240 GB 초과. 256 GB에서는 여유 확인 후 짧은 문맥; 128 GB는 대량 오프로딩 조건으로 동일 추천이 아님 | Vision, 코딩, Tool call, 에이전트 작업 | [Unsloth 가이드](https://unsloth.ai/docs/models/tutorials/kimi-k2.5.md) |

## 대체 모델과 미확인 실행 조건

| 메모리 | 추천 모델 | 양자화 | 가중치 크기 | 실행 조건 / Context | 특화 기능 | 공식 근거 |
|---|---|---|---|---|---|---|
| GPU 8 GB 대안 | Nemotron-3-Nano-4B | Q8_0 | 약 4.23 GB | Unsloth 개략 요구치 약 5 GB. 4–8K부터 시작; Apple 8 GB는 OS 여유 별도 확인 | 텍스트, 코딩, 추론 | [Unsloth 가이드](https://unsloth.ai/docs/models/nemotron-3.md) |
| 32 GB 이상에서 검토 | Nemotron-3-Nano-30B-A3B | UD-Q4_K_XL | 약 22.8 GB | 가이드의 개략 요구치 약 24 GB와 KV·런타임 여유를 구분. 24 GB 장치의 기본 추천으로 확정하지 않음 | 코딩, 추론, Tool call | [Unsloth 가이드](https://unsloth.ai/docs/models/nemotron-3.md) · [GGUF 파일](https://huggingface.co/unsloth/Nemotron-3-Nano-30B-A3B-GGUF) |
| 16 GB 이상에서 검토 | MiMo-VL-7B-RL | UD-Q4_K_XL | 약 4.76 GB + projector 1.37 GB | 전체 런타임 요구치는 미상. 파일 크기만으로 8 GB 실행을 보장하지 않음 | Vision, 코딩, 추론 | [Unsloth GGUF](https://huggingface.co/unsloth/MiMo-VL-7B-RL-GGUF) |
| 실행 용량 미확정 | MiMo-V2.5 | UD-IQ1_M | 약 92.5 GB | KV·인코더·런타임 포함 요구치는 미상. 128 GB 추천으로 확정하기 전에 실제 실행 환경에서 확인 | Vision, 음성·영상 입력, 코딩, 에이전트 작업 | [Unsloth GGUF](https://huggingface.co/unsloth/MiMo-V2.5-GGUF) · [공식 모델 카드](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) |

## MoE 모델의 메모리

MoE도 전체 가중치가 필요합니다. 활성 파라미터 수는 주로 연산량·처리량에 영향을 주며 전체 모델 파일 크기를 대신하지 않습니다. GLM-4.7-Flash는 약 30B total / 3.6B active이지만 Q4 파일은 약 17.6 GB입니다. Kimi K2.5는 약 1T total / 32B active이지만 위 양자화 파일은 약 240 GB입니다.
