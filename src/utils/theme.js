import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#91CC42",
  secondary: "#3088D5",
  background: "#FFFFFF",
  
  // non-colors
  black: "#000020",
  white: "#FFFFFF",
  
  // color variations
  gray: '#3F3F3F',
  muted: '#A8A8A8',
  inactive: '#D8D8D8',

};

export const SIZES = {
  // global sizes
  base: 4,
  radius: 4,
  padding: 16,
  btnRadius: 11,
  cardRadius: 4,

  // font sizes
  h1: 34,
  h2: 24,
  h3: 22,
  h4: 20,
  h5: 18,
  h6: 16,
  list: 14,
  body: 12,
  tiny: 8,  

  // app dimensions
  width,
  height
};

export const LINEHEIGHT ={
  // line height
 ten: 10,
 fourteen: 14,
 fiften: 15,
 sixteen: 16,
 seventeen: 17,
 ninteen: 19,
 twenty: 20,
 twenty_1: 21,
 twenty_4: 24,
 twenty_9: 29,
 thirty_4: 34,
 fourty_1: 41,
}

export const LETTERSPACING ={
  // line spacing
  zero: 0,
  point_15: 0.15,
  point_25: 0.25,
  point_35: 0.35,
  point_4: 0.4,
  two_point_4: 2.4,
   
}

export const STYLES = {
  header1: { fontSize: SIZES.h1, letterHeight: LINEHEIGHT.fourty_1 },
  header2: { fontSize: SIZES.h4, letterHeight: LINEHEIGHT.twenty_4 },
  header3: { fontSize: SIZES.body, letterHeight: LINEHEIGHT.fiften },
  body1: { fontSize: SIZES.body, letterHeight: LINEHEIGHT.fourteen },
  title1: { fontSize: SIZES.h4, letterHeight: LINEHEIGHT.twenty_4 },
  title2: { fontSize: SIZES.body, letterHeight: LINEHEIGHT.fiften },
  titleList: { fontSize: SIZES.list, letterHeight: LINEHEIGHT.twenty_4 },
  subtitle: { fontSize: SIZES.body, letterHeight: LINEHEIGHT.fiften },
};


export default { COLORS, SIZES, STYLES };