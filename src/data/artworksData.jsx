import images from "../images/images";

function getArtworksData() {
  return [
    { 
      id: 1, 
      title: "Paz e Concórdia", 
      image: images["paz_e_concordia"], 
      description: "Uma obra que representa a harmonia entre os povos." 
    },
    { 
      id: 2, 
      title: "Alegoria da República", 
      image: images["alegoria_da_republica"], 
      description: "Simboliza os ideais republicanos e a liberdade." 
    },
    { 
      id: 3, 
      title: "Tempora Mutantur", 
      image: images["tempora_mutantur"], 
      description: "O tempo muda e nos mudamos com ele." 
    },
    { 
      id: 4, 
      title: "O Violeiro", 
      image: images["o_violeiro"], 
      description: "Retrata a cultura musical do sertão brasileiro." 
    },
    { 
      id: 5, 
      title: "A Ventania", 
      image: images["a_ventania"], 
      description: "Uma pintura que captura a força dos ventos." 
    }
  ];  
}


export default getArtworksData;
