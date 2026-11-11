/** Deixa apenas a primeira letra maiúscula ("novembro de 2026" → "Novembro de 2026"). */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
