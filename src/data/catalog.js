import mse335_ch0 from './chapters/mse335_chapter0.js'
import mse335_ch1 from './chapters/mse335_chapter1.js'
import mse335_ch2 from './chapters/mse335_chapter2.js'
import mse335_ch3 from './chapters/mse335_chapter3.js'
import mse335_ch4 from './chapters/mse335_chapter4.js'
import mse335_ch5 from './chapters/mse335_chapter5.js'
import mse335_ch6 from './chapters/mse335_chapter6.js'
import mse335_ch7 from './chapters/mse335_chapter7.js'
import mse335_ch8 from './chapters/mse335_chapter8.js'
import mse335_ch9 from './chapters/mse335_chapter9.js'
import mse335_ch10 from './chapters/mse335_chapter10.js'
import mse219_ch1_1 from './chapters/mse219_chapter1_1.js'
import mse219_ch1_2 from './chapters/mse219_chapter1_2.js'
import mse219_ch1_3 from './chapters/mse219_chapter1_3.js'
import mse219_ch1_4 from './chapters/mse219_chapter1_4.js'
import mse219_ch2_1 from './chapters/mse219_chapter2_1.js'
import mse219_ch2_2 from './chapters/mse219_chapter2_2.js'
import mse219_ch2_3 from './chapters/mse219_chapter2_3.js'
import mse316_ch1 from './chapters/mse316_chapter1_review.js'
import mse316_ch2_1 from './chapters/mse316_chapter2_1.js'
import mse316_ch2_2 from './chapters/mse316_chapter2_2.js'
import mse316_ch2_3 from './chapters/mse316_chapter2_3.js'

export const CATALOG = {
  MSE120: {
    id: "MSE120",
    name: "MSE 120 – Intro to Materials Science",
    chapters: [{ id: "m120-ch1", title: "Chapter 1: Materials Overview (sample)", questions: [
      { q: "Four primary materials classes are often listed as:", choices: ["Metals, ceramics, polymers, composites","Solids, liquids, gases, plasmas","Crystalline, amorphous, quasicrystal, liquid","Ferrous, nonferrous, organic, inorganic"], answer: 0, explanation: "Standard classification in intro materials texts." },
      { q: "A composite is best described as:", choices: ["A solid solution of two metals","A material made by combining two or more constituents to achieve superior properties","A ceramic doped with polymers","A polymer with metallic bonding"], answer: 1, explanation: "Composites combine phases (e.g., fiber + matrix)." }
    ]}],
  },
  MSE219: {
    id: "MSE219",
    name: "MSE 219 – Structure and Characterization of Materials",
    chapters: [
      mse219_ch1_1,
      mse219_ch1_2,
      mse219_ch1_3,
      mse219_ch1_4,
      mse219_ch2_1,
      mse219_ch2_2,
      mse219_ch2_3
    ],
  },
  MSE316: {
    id: "MSE316",
    name: "MSE 316 – Mechanical Behaviour of Materials",
    chapters: [
      mse316_ch1,
      mse316_ch2_1,
      mse316_ch2_2,
      mse316_ch2_3
    ],
  },
  MSE335: {
    id: "MSE335",
    name: "MSE 335 – Materials Physics",
    chapters: [
      mse335_ch0,
      mse335_ch1,
      mse335_ch2,
      mse335_ch3,
      mse335_ch4,
      mse335_ch5,
      mse335_ch6,
      mse335_ch7,
      mse335_ch8,
      mse335_ch9,
      mse335_ch10
    ],
  },
};
