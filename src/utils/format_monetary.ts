export default function(valorEmCentavos: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorEmCentavos / 100);
};