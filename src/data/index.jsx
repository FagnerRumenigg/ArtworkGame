import getArtworksData from "./artworksData";
import getHarryPotterData from "./harryPotterData";

function getThemes() {
  return [
    { key: "art", name: "Arte", data: getArtworksData() },
    { key: "harryPotter", name: "Harry Potter", data: getHarryPotterData() }
  ];
}

export default getThemes;
