import images from "../images/images";

function getArtworksData() {
  return [
    { id: 1, title: "Paz e Concórdia1", year: 1895, image: images["paz_e_concordia"] },
    { id: 2, title: "Alegoria da República2", year: 1896, image: images["alegoria_da_republica"] },
    { id: 3, title: "Tempora Mutantur3", year: 1898, image: images["tempora_mutantur"] },
    { id: 4, title: "O Violeiro4", year: 1899, image: images["o_violeiro"] },
    { id: 5, title: "A Ventania5", year: 1915, image: images["a_ventania"] },
  ];  
}

export default getArtworksData;
