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
    name: "MSE 219 – Thermodynamics of Materials (sample)",
    chapters: [{ id: "m219-ch1", title: "Chapter 1: Thermo Basics (sample)", questions: [
      { q: "Which is a state function?", choices: ["Work","Heat","Enthalpy","Path length"], answer: 2, explanation: "Enthalpy depends only on state; heat/work are path functions." },
      { q: "The Gibbs free energy is defined as:", choices: ["G = U + pV − TS","G = H − TS","G = F + pV","G = U − TS"], answer: 1, explanation: "G = H − TS for constant T,p work." }
    ]}],
  },
  MSE316: {
    id: "MSE316",
    name: "MSE 316 – Kinetics & Diffusion (sample)",
    chapters: [{ id: "m316-ch1", title: "Chapter 1: Diffusion (sample)", questions: [
      { q: "Fick's first law (1D):", choices: ["J = −D dC/dx","∂C/∂t = D ∂²C/∂x²","J = D dC/dx","J = kC"], answer: 0, explanation: "Flux proportional to concentration gradient with minus sign." },
      { q: "Units of D:", choices: ["m/s","m²/s","1/s","kg/(m·s)"], answer: 1, explanation: "Diffusion coefficient has units of area per time." }
    ]}],
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
