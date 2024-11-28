import { useState } from "react"
import { porteRemessaDeAutos } from "../../usecases/porte_remessa_autos"
import format_monetary from "../../utils/format_monetary"

export default function () {

    const [volumes, setVolumes] = useState<undefined | number>(undefined)
    const [result, setResult] = useState<any>()

    function calculate() {
        if (!volumes) return

        setResult(porteRemessaDeAutos(volumes))
    }

    return (
        <div>
            <input
                className="bg-[#242424] w-full border-[1px] border-gray-600 p-1 pl-2 focus:outline-none"
                type="text"
                placeholder="Volume por autos"
                onInput={(e) => {
                    const value = e.currentTarget.value;

                    // Permitir apenas números
                    if (/^\d*$/.test(value)) {
                        setVolumes(Number.parseInt(value) || 0); // Atualiza o estado com o número ou 0 se vazio
                    } else {
                        e.currentTarget.value = volumes?.toString() || ""; // Restaura o valor válido
                    }
                }}
                value={volumes}
            />

            <button
                className="my-2 w-full bg-slate-700 p-2"
                onClick={calculate}
            >
                Calcular
            </button>

            {
                result && (
                    <div>
                        <p>Valor por volume: {format_monetary(result.valorPorVolume)}</p>
                        <p>Total: {format_monetary(result.total)}</p>
                        <p>Recolhimento: {result.recolhimento}</p>
                        <p>Observações: {result.obs}</p>
                    </div>
                )
            }
        </div>
    )
}