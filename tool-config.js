export const tool={
  "id": "E155",
  "slug": "eng-reaction-equilibrium",
  "title": "반응 평형상수 계산기",
  "title_en": "Reaction equilibrium constant calculator",
  "category": "화학·화학공학",
  "category_en": "Chemistry and chemical engineering",
  "fields": [
    {
      "key": "gibbs",
      "label": "반응식 기준 표준 몰 반응 깁스에너지 ΔᵣG°",
      "label_en": "Standard molar reaction Gibbs energy ΔᵣG° for the written reaction",
      "dimension": "activation",
      "example": -5000,
      "constraint": "signed",
      "display_unit": "kJmol",
      "display_value": "-5"
    },
    {
      "key": "temperature",
      "label": "깁스에너지를 평가한 절대온도 T",
      "label_en": "Absolute temperature T at which Gibbs energy is evaluated",
      "dimension": "temperature",
      "example": 300,
      "constraint": "positive",
      "display_unit": "K",
      "display_value": "300"
    }
  ],
  "result_label": "활동도 기준 평형상수 K",
  "result_label_en": "Activity-based equilibrium constant K",
  "result_dimension": "ratio",
  "formula": "K = exp(−ΔᵣG°/(RT))",
  "purpose": "정해진 반응식과 표준상태에 대응하는 표준 반응 깁스에너지에서 무차원 열역학 평형상수를 계산합니다.",
  "purpose_en": "Calculate the dimensionless thermodynamic equilibrium constant from the standard reaction Gibbs energy for a specified reaction and standard state.",
  "assumptions": "ΔᵣG°는 입력 온도에서의 표준 몰 반응 깁스에너지이며 반응식의 계수와 방향에 맞아야 합니다. K는 무차원 활동도로 정의하며 원시 농도나 압력에 단위를 붙인 값이 아닙니다. 한 온도의 ΔᵣG°를 다른 온도에 그대로 적용하지 마세요. 반응속도·도달시간·평형 조성은 계산하지 않습니다.",
  "assumptions_en": "Required: standard molar reaction Gibbs energy at the entered temperature, matching the coefficients and direction of the written reaction. K is defined with dimensionless activities, rather than raw dimensional concentrations or pressures. Use temperature-specific Gibbs energy. Excluded: reaction rates, equilibration time and equilibrium composition.",
  "sources": [
    {
      "label": "OpenStax Chemistry 2e, free energy and equilibrium",
      "url": "https://openstax.org/books/chemistry-2e/pages/16-4-free-energy"
    }
  ],
  "condition": "입력 온도·반응식·표준상태에 맞는 ΔᵣG°이며 K는 무차원 활동도 기준임을 확인했습니다.",
  "condition_en": "I confirm that ΔᵣG° matches the temperature, reaction and standard state, and that K uses dimensionless activities.",
  "site": "https://nanalab.kr/eng-reaction-equilibrium/",
  "repository": "https://github.com/NaNaCompany/eng-reaction-equilibrium",
  "groups": [],
  "output_unit": "1"
};
