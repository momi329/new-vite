import { type Navigation } from "@shared-features/home";

const navigation: Navigation = [
  { label: "Search", route: "./search.html" },
  { label: "Detail", route: "./detail.html" },
  {
    label: "Map",
    route: "./map.html",
    query:
      'mapParam={"CheckIn":"2021/03/11","CheckOut":"2021/04/10","Rooms":[{"AdultQty":"2","ChildQty":"0","ChildAges":[]}],"Filter":{"Allotment":"0"},"Destination":{"Code":"TW_TPE_3518","Kind":"10","Txt":"台北,%20台灣',
  },
];

export default navigation;
