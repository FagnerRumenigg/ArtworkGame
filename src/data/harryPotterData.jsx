import images from "../images/images";

function getHarryPotterData() {
  return [
    {
      id: 1,
      title: "A Pedra Filosofal",
      image: images["pedra_filosofal"], // Altere para a imagem correspondente
      description: "A primeira aventura de Harry Potter no mundo mágico.",
    },
    {
      id: 2,
      title: "A Câmara Secreta",
      image: images["camara_secreta"],
      description: "O mistério da Câmara Secreta e a ameaça do basilisco.",
    },
    {
      id: 3,
      title: "O Prisioneiro de Azkaban",
      image: images["prisioneiro_azkaban"],
      description: "A fuga de Sirius Black e a verdade sobre seu passado.",
    },
    {
      id: 4,
      title: "O Cálice de Fogo",
      image: images["calice_fogo"],
      description: "O Torneio Tribruxo e os perigos que ele esconde.",
    },
    {
      id: 5,
      title: "A Ordem da Fênix",
      image: images["ordem_fenix"],
      description: "Harry lidera a resistência contra Lord Voldemort e a Ordem da Fênix.",
    },
    {
      id: 6,
      title: "O Enigma do Príncipe",
      image: images["enigma_principe"],
      description: "Segredos do passado revelam a chave para derrotar Voldemort.",
    },
    {
      id: 7,
      title: "As Relíquias da Morte",
      image: images["reliquias_morte"],
      description: "A batalha final entre luz e trevas decidirá o destino do mundo bruxo.",
    },
  ];
}


export default getHarryPotterData;
