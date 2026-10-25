# 반응 평형상수 계산기

정해진 반응식과 표준상태에 대응하는 표준 반응 깁스에너지에서 무차원 열역학 평형상수를 계산합니다.

- ID: E155
- App: https://nanalab.kr/eng-reaction-equilibrium/
- Repository: https://github.com/NaNaCompany/eng-reaction-equilibrium
- Formula: K = exp(−ΔᵣG°/(RT))

## Model and data

ΔᵣG°는 입력 온도에서의 표준 몰 반응 깁스에너지이며 반응식의 계수와 방향에 맞아야 합니다. K는 무차원 활동도로 정의하며 원시 농도나 압력에 단위를 붙인 값이 아닙니다. 한 온도의 ΔᵣG°를 다른 온도에 그대로 적용하지 마세요. 반응속도·도달시간·평형 조성은 계산하지 않습니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
