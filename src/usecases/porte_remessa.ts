import { defaultOutput, UFESP_2024 } from "./helper"

type output = defaultOutput | {
    valorPorVolume: number,
    total: number,
}

export default function(volumes: number): output {
    const valorPorVolume = 1.672 * UFESP_2024;

    const total = volumes * valorPorVolume

    return {
        valorPorVolume: valorPorVolume,
        total: total,
        recolhimento: "Recolhimento em favor do Fundo Especial de Despesa do Tribunal - FEDT. Código 110-4 *"
    }
}