import lolChampions from "../champions_data/lol_champions.json"

const initialChampions = lolChampions
const initialChampionToShow = JSON.parse(window.localStorage.getItem("championToShow")) || null

const initialFilters = JSON.parse(
   window.localStorage.getItem("filters")) ||
{
   type: "All",
   minAd: 0,
   minAp: 0
}


export { initialFilters, initialChampions, initialChampionToShow }