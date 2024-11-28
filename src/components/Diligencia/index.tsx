import { UFESP_2024 } from "../../usecases/helper";
import format_monetary from "../../utils/format_monetary";

export default function() {
    return (
        <ol className="list-disc list-inside flex flex-col gap-2">
            <li>
                Mandados com deslocamento, independentemente de atos a serem praticados no mesmo endereço ou em 
                endereços contíguos ou lindeiros: {format_monetary(UFESP_2024 * 3)} por diligência.
            </li>

            <li>
                Mandados exclusivamente remotos ou na própria sede do Juízo: {format_monetary(UFESP_2024)} por diligência.
            </li>

            <li>
                Mandados inicialmente remotos, verificada necessidade de conversão para mandado com deslocamento: 
                {format_monetary(UFESP_2024 * 2)} por diligência, para complementar a diferença.
            </li>
        </ol>
    )
}