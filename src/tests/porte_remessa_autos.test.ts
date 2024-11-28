import { UFESP_2024 } from "../usecases/helper";
import { porteRemessaDeAutos } from "../usecases/porte_remessa_autos";

describe('porteRemessaDeAutos', () => {
    it('deve calcular corretamente o valor por volume e o total para múltiplos volumes', () => {
        const volumes = 3; 
        const expectedValorPorVolume = 1.672 * UFESP_2024; 
        const expectedTotal = volumes * expectedValorPorVolume;

        const result = porteRemessaDeAutos(volumes);

        expect(result.valorPorVolume).toBeCloseTo(expectedValorPorVolume, 2);
        expect(result.total).toBeCloseTo(expectedTotal, 2); 
    });

    it('deve retornar as observações e informações de recolhimento corretamente', () => {
        const volumes = 1;
        const result = porteRemessaDeAutos(volumes);

        expect(result.recolhimento).toBe(
            'Recolhimento em favor do Fundo Especial de Despesa do Tribunal - FEDT. Código 110-4 *'
        );
        expect(result.obs).toBe('Somente para processos físicos');
    });
});
