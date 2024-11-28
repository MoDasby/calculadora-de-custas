import { useState } from 'react'
import CustasRemessaRetornoAutos from './components/CustasRemessaRetornoAutos';
import CustasRemessaObjetos from './components/CustasRemessaObjetos';
import PublicacaoEditais from './components/PublicacaoEditais';
import Diligencia from './components/Diligencia';

const custas = [
  {
    title: "DESPESAS COM PORTE DE REMESSA E RETORNO DE AUTOS",
    calculadoras: [
      {
        description: "Porte de Remessa e Retorno de Autos",
        component: <CustasRemessaRetornoAutos />
      },
      {
        description: "Porte de Remessa e Retorno - Mídias ou Objetos",
        component: <CustasRemessaObjetos />
      }
    ]
  },
  {
    title: "DESPESAS COM PUBLICAÇÃO DE EDITAIS NO DIÁRIO DA JUSTIÇA ELETRÔNICO",
    calculadoras: [
      {
        description: "Custos de publicação de editais",
        component: <PublicacaoEditais />
      }
    ]
  },
  {
    title: "DILIGÊNCIA DOS OFICIAIS DE JUSTIÇA",
    calculadoras: [
      {
        description: "Diligência dos Oficiais de Justiça",
        component: <Diligencia />
      }
    ]
  }
]


const App = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>(custas[0].title);
  const [selectedDescription, setSelectedDescription] = useState<string>(
    custas[0].calculadoras[0].description
  );

  // Busca o grupo de calculadoras baseado no título selecionado
  const selectedGroup = custas.find((group) => group.title === selectedTitle);

  // Busca o componente baseado na descrição selecionada
  const selectedCalculadora =
    selectedGroup?.calculadoras.find(
      (calc) => calc.description === selectedDescription
    );

  return (
    <div className='w-full flex flex-col max-w-[600px] mx-auto pt-12 gap-4 it justify-center'>
      <h1 className='text-2xl font-semibold'>
        Calculadora de custas
      </h1>
      {/* Select para Titles */}
      <div className='flex flex-col'>
        <label htmlFor="titles">Selecione um título:</label>
        <select
          id="titles"
          value={selectedTitle}
          className='bg-[#222222] border-[1px] border-gray-600 p-1 px-0 focus:outline-none'
          onChange={(e) => {
            const newTitle = e.target.value;
            setSelectedTitle(newTitle);

            // Atualiza a descrição selecionada para o primeiro item do novo título
            const firstCalculadora = custas
              .find((group) => group.title === newTitle)
              ?.calculadoras[0];
            if (firstCalculadora) {
              setSelectedDescription(firstCalculadora.description);
            }
          }}
        >
          {custas.map((group) => (
            <option key={group.title} value={group.title}>
              {group.title}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col'>
        {selectedGroup && (
          <>
            <label htmlFor="descriptions">Selecione uma calculadora:</label>
            <select
              id="descriptions"
              value={selectedDescription}
              className='bg-[#222222] border-[1px] border-gray-600 p-1 px-0 focus:outline-none'
              onChange={(e) => setSelectedDescription(e.target.value)}
            >
              {selectedGroup.calculadoras.map((calc) => (
                <option key={calc.description} value={calc.description}>
                  {calc.description}
                </option>
              ))}
            </select>
          </>
        )}
      </div>

      {/* Renderização do componente */}
      <div>
        {selectedCalculadora?.component}
      </div>
    </div>
  );
};


export default App;
