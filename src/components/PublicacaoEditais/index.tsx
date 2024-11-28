import { useState } from "react";
import format_monetary from "../../utils/format_monetary";
import CustosEditais from "../../usecases/publicacao_de_editais";

export default function() {
    const [caracteres, setCaracteres] = useState<number | undefined>(undefined)
    const [result, setResult] = useState<any>()

    function calculate() {
        if (!caracteres) return

        setResult(CustosEditais(caracteres))
    }

    return (
        <div>
            <input
                className="bg-[#242424] w-full border-[1px] border-gray-600 p-1 pl-2 focus:outline-none"
                type="text"
                placeholder="Caracteres"
                onInput={(e) => {
                    const value = e.currentTarget.value;

                    // Permitir apenas números
                    if (/^\d*$/.test(value)) {
                        setCaracteres(Number.parseInt(value) || 0); // Atualiza o estado com o número ou 0 se vazio
                    } else {
                        e.currentTarget.value = caracteres?.toString() || ""; // Restaura o valor válido
                    }
                }}
                value={caracteres}
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
                        <p>Valor por caractere: {format_monetary(result.custoPorCaractere)}</p>
                        <p>Total: {format_monetary(result.total)}</p>
                        <p>Recolhimento: {result.recolhimento}</p>
                        <p>Observações: {result.obs}</p>
                    </div>
                )
            }
        </div>
    )
}