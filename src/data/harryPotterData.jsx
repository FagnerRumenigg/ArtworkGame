import images from "../images/images";

function getArtworksData() {
  return [
    { id: 1, title: "H", year: 1895, image: images["paz_e_concordia"] },
    { id: 2, title: "A", year: 1896, image: images["alegoria_da_republica"] },
    { id: 3, title: "R", year: 1898, image: images["tempora_mutantur"] },
    { id: 4, title: "R", year: 1899, image: images["o_violeiro"] },
    { id: 5, title: "Y", year: 1915, image: images["a_ventania"] },
  ];  
}

export default getArtworksData;
