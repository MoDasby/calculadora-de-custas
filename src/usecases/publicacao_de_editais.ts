import { defaultOutput, UFESP_2024 } from "./helper"

type output = defaultOutput | {
    custoPorCaractere: number,
    total: number
}

export default function CustosEditais(caracteres: number): output {
    const custoPorCaractere = Math.round(UFESP_2024 * 0.008)
    const total = custoPorCaractere * caracteres

    return {
        custoPorCaractere,
        total,
        recolhimento: "Recolhimento em favor do Fundo Especial de Despesa do Tribunal - FEDT. Código 435-9",
    }
}