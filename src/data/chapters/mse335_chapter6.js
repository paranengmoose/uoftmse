// src/data/chapters/mse335_chapter6.js
export default {
  id: "module6_graphene",
  title: "Module 6: Graphene Case Study",
  questions: [
    { q: "The graphene lattice is best described as:", choices: ["Square Bravais with 1-atom basis", "Honeycomb (hexagonal) lattice with 2-atom basis", "Triangular lattice with 3-atom basis", "BCC with 2-atom basis"], answer: 1, explanation: "Honeycomb = two interpenetrating triangular sublattices (A,B)." },
    { q: "The low‑energy electronic structure of graphene features:", choices: ["Parabolic bands at Γ", "Linear Dirac cones at K and K′", "A large direct gap at K", "Flat bands across the BZ"], answer: 1, explanation: "π and π* bands cross linearly at the K points." },
    { q: "Each graphene unit cell contains:", choices: ["1 carbon atom", "2 carbon atoms", "3 carbon atoms", "4 carbon atoms"], answer: 1, explanation: "Two atoms, one on each sublattice A and B." },
    { q: "The relevant orbitals forming the π bands are:", choices: ["sp2 σ bonds", "2s only", "pz orbitals perpendicular to the plane", "dxz orbitals"], answer: 2, explanation: "pz orbitals hybridize into π and π* bands." },
    { q: "Typical Fermi velocity v_F in graphene is about:", choices: ["10^3 m/s", "10^4 m/s", "10^6 m/s", "3×10^8 m/s"], answer: 2, explanation: "v_F ≈ 1×10^6 m/s near the Dirac points." },

    { q: "At charge neutrality (ideal, clean graphene), the band gap is:", choices: ["≈ 1 eV", "Zero (semimetal)", "≈ 5 eV", "Temperature‑dependent gap"], answer: 1, explanation: "Dirac cones cross at E_F with no intrinsic gap." },
    { q: "The two inequivalent valleys in graphene are located at:", choices: ["Γ and M", "K and K′", "X and L", "Z and R"], answer: 1, explanation: "Corners of the hexagonal Brillouin zone." },
    { q: "Pseudospin in graphene refers to:", choices: ["Real electron spin", "Nuclear spin", "Sublattice degree of freedom (A/B)", "Valley index only"], answer: 2, explanation: "Wavefunction has two components from A and B sublattices." },
    { q: "Berry phase associated with cyclotron orbits in graphene is approximately:", choices: ["0", "π", "2π", "π/2"], answer: 1, explanation: "Linear dispersion yields a Berry phase of π, seen in QHE." },
    { q: "Quantum Hall effect in graphene shows:", choices: ["Integer plateaus at ν = …, ±1, ±2, ±3 …", "Half‑integer sequence with 4‑fold degeneracy", "Only fractional plateaus", "No Hall plateaus"], answer: 1, explanation: "Relativistic Landau levels give half‑integer series (±2, ±6, …) including spin/valley." },

    { q: "Graphene’s in‑plane σ bonds come from:", choices: ["sp3 hybrids", "sp2 hybrids forming a hexagonal network", "s-only bonds", "d-orbital overlap"], answer: 1, explanation: "sp2 provides strong in‑plane σ bonding." },
    { q: "Measured optical absorption of monolayer graphene (visible) is about:", choices: ["~0.1%", "~2.3%", "~10%", "~50%"], answer: 1, explanation: "≈ πα ≈ 2.3% per layer." },
    { q: "The dominant Raman peaks for graphene are:", choices: ["G and 2D (G′)", "D and F", "M and L", "A and B"], answer: 0, explanation: "G (~1580 cm⁻¹) and 2D (~2700 cm⁻¹); D indicates defects." },
    { q: "The D peak in Raman is activated primarily by:", choices: ["Perfect crystallinity", "Defects/edges", "High temperature only", "Magnetic field"], answer: 1, explanation: "Intervalley double‑resonance scattering requires defects/edges." },
    { q: "Graphene’s Young’s modulus (in‑plane) is roughly:", choices: ["~1 GPa", "~100 GPa", "~1 TPa", "~10 TPa"], answer: 2, explanation: "Exceptional in‑plane stiffness ≈ 1 TPa." },

    { q: "Common edge terminations of graphene are:", choices: ["Zigzag and armchair", "Square and triangle", "Kagome and dice", "Sawtooth only"], answer: 0, explanation: "Crystallographic edges align along zigzag or armchair directions." },
    { q: "Zigzag edges are notable for:", choices: ["No electronic states", "Edge‑localized states near E_F", "Opening a large bulk gap", "Superconductivity"], answer: 1, explanation: "Tight‑binding predicts flatband edge states at zigzag edges." },
    { q: "Armchair nanoribbons can:", choices: ["Never be semiconducting", "Have width‑dependent gaps", "Always be metallic", "Show superconducting gaps only"], answer: 1, explanation: "Quantization along width can open or tune a gap." },
    { q: "Bilayer graphene with AB (Bernal) stacking has low‑energy dispersion:", choices: ["Linear like monolayer", "Parabolic near K/K′", "Flat everywhere", "Strongly gapped intrinsically"], answer: 1, explanation: "Interlayer coupling makes bands quadratic at low energy." },
    { q: "A perpendicular electric field in AB bilayer graphene can:", choices: ["Close any gap", "Open/tune a band gap", "Only shift Dirac point", "Destroy carriers"], answer: 1, explanation: "Breaking layer symmetry opens a tunable gap." },

    { q: "Graphene’s minimum conductivity phenomenon occurs near:", choices: ["High doping", "Charge neutrality (Dirac point)", "Valence band maximum", "Conduction band minimum"], answer: 1, explanation: "Even at low n, disorder/puddles yield finite σ of order e²/h." },
    { q: "Room‑temperature carrier mobility on clean suspended samples can reach:", choices: ["~10^2 cm²/Vs", "~10^3 cm²/Vs", "~10^4–10^5 cm²/Vs", "~1 cm²/Vs"], answer: 2, explanation: "Very high mobilities when substrate/disorder minimized." },
    { q: "Dominant scattering on SiO₂‑supported graphene at RT is often from:", choices: ["Neutral phonons only", "Coulomb impurities/charged traps and surface phonons", "Nuclear spins", "Magnetic impurities"], answer: 1, explanation: "Substrate charge disorder and remote phonons limit μ." },
    { q: "Klein tunneling in graphene refers to:", choices: ["Suppressed transmission through barriers", "Perfect transmission at normal incidence", "Spin flip scattering", "Phonon‑assisted tunneling only"], answer: 1, explanation: "Chiral carriers transmit through potential steps at normal incidence." },
    { q: "Landau level energies in monolayer graphene scale as:", choices: ["E_n ∝ nB", "E_n ∝ √(nB)", "E_n ∝ B²", "Independent of B"], answer: 1, explanation: "Relativistic spectrum: E_n = ±v_F√(2eħBn)." },

    { q: "Graphene is typically classified (electrically) as:", choices: ["Wide‑gap insulator", "Zero‑gap semimetal", "Conventional semiconductor", "Metal with large DOS at E_F"], answer: 1, explanation: "Linear band crossing gives vanishing DOS at E_F in ideal limit." },
    { q: "The Brillouin zone of graphene is:", choices: ["Square", "Hexagonal", "Circular", "Rectangular"], answer: 1, explanation: "Reciprocal lattice of honeycomb yields a hexagonal BZ." },
    { q: "Nearest‑neighbor tight‑binding hopping parameter t (π‑band) is roughly:", choices: ["~0.01 eV", "~0.1 eV", "~2.7–3 eV", "~10 eV"], answer: 2, explanation: "Standard π‑band fits use t ≈ 2.7–3.0 eV." },
    { q: "Interlayer spacing in graphite is about:", choices: ["~0.142 nm", "~0.246 nm", "~0.335 nm", "~1.0 nm"], answer: 2, explanation: "~0.335 nm between layers; 0.142 nm is the C–C bond length." },
    { q: "Graphene’s work function is approximately:", choices: ["~2 eV", "~3 eV", "~4.5–4.7 eV", "~6 eV"], answer: 2, explanation: "Typically mid‑4 eV range depending on environment/doping." },

    { q: "Optical conductivity of graphene (per layer) in the visible is near:", choices: ["0", "e²/4ħ (approximately constant)", "e²/ħ times 10", "Depends strongly on wavelength"], answer: 1, explanation: "Universal interband value gives ~2.3% absorption." },
    { q: "Thermal conductivity of high‑quality suspended graphene is:", choices: ["Very low (~1 W/mK)", "Moderate (~100 W/mK)", "Very high (>1000 W/mK)", "Undefined"], answer: 2, explanation: "Among the highest measured in solids." },
    { q: "Strain in graphene can generate:", choices: ["Phonon gaps only", "Pseudo‑magnetic fields in the Dirac equation", "Real magnetic domains", "Strong spin‑orbit coupling"], answer: 1, explanation: "Non‑uniform strain acts like gauge fields for Dirac fermions." },
    { q: "Chemical functionalization (e.g., hydrogenation) tends to:", choices: ["Increase mobility", "Open a band gap and reduce conductivity", "Have no effect", "Make it superconducting"], answer: 1, explanation: "Breaking π network localizes electrons and can open gaps." },
    { q: "Substrate choice (e.g., h‑BN vs SiO₂) mainly affects:", choices: ["Lattice constant", "Charge inhomogeneity and mobility", "Dirac cone slope", "Atomic mass"], answer: 1, explanation: "Cleaner dielectric reduces puddles and boosts μ." },

    { q: "Valley index (K vs K′) can be manipulated by:", choices: ["Uniform electric fields only", "Circularly polarized light and certain strain/edges", "Changing atomic mass", "Cooling below 1 K only"], answer: 1, explanation: "Selection rules and symmetry breaking can be valley‑selective." },
    { q: "Spin–orbit coupling in pristine graphene is:", choices: ["Very strong (>100 meV)", "Moderate (~10 meV)", "Weak (≪ 10 meV)", "Infinite"], answer: 2, explanation: "Low atomic number carbon → weak intrinsic SOC." },
    { q: "Charge puddles in supported graphene arise from:", choices: ["Perfect screening", "Random charged impurities and traps", "Intrinsic magnetism", "Quantum Hall effect"], answer: 1, explanation: "Local doping variations near the Dirac point." },
    { q: "Contact resistance in graphene devices is often dominated by:", choices: ["Bulk phonons", "Metal–graphene interface and doping under contacts", "Edge roughness only", "Radiative losses"], answer: 1, explanation: "Metal contacts modify local carrier density and add series resistance." },
    { q: "The lattice constant (C–C nearest neighbor distance) in graphene is:", choices: ["~0.142 nm for C–C bond", "~0.246 nm for lattice constant a", "Both are correct but describe different lengths", "Neither value is correct"], answer: 2, explanation: "Bond length ≈ 0.142 nm; lattice constant a ≈ 0.246 nm." },

    { q: "AB (Bernal) stacking of graphite layers corresponds to:", choices: ["Perfect AA alignment of atoms", "Second layer shifted so half atoms lie over hexagon centers", "Random stacking", "Rotationally misaligned layers only"], answer: 1, explanation: "AB places one sublattice over hexagon centers." },
    { q: "Twisting two graphene layers (small angle) produces:", choices: ["No change", "Moiré superlattices and flat bands at magic angles", "Immediate large gap", "Only phonon changes"], answer: 1, explanation: "Twistronics yields moiré minibands; at ~1.1° flat bands emerge." },
    { q: "Graphene’s density of states at the Dirac point (ideal) is:", choices: ["Finite", "Zero", "Infinite", "Undefined"], answer: 1, explanation: "Linear dispersion gives DOS ∝ |E|; vanishes at E=0." },
    { q: "Electrostatic gating of graphene primarily:", choices: ["Moves E_F through the Dirac point", "Changes lattice constant", "Alters C–C bond length", "Breaks σ bonds"], answer: 0, explanation: "Gate voltage tunes carrier density and Fermi level." },
    { q: "The Seebeck coefficient sign in n‑doped graphene is typically:", choices: ["Positive", "Negative", "Zero", "Random"], answer: 1, explanation: "Electron‑like transport → negative thermopower." },

    { q: "Which statement about graphene nanoribbons (GNRs) is most accurate?", choices: ["All are metallic", "Band gap depends on width/edge type", "Band gap is fixed at 1 eV", "They are superconducting"], answer: 1, explanation: "Quantum confinement and edge symmetry control Eg." },
    { q: "In transport, short‑range scatterers (e.g., vacancies) mainly:", choices: ["Cause long‑range Coulomb scattering", "Mix valleys and reduce mobility", "Only affect phonons", "Open a universal gap"], answer: 1, explanation: "Intervalley scattering from short‑range disorder degrades μ." },
    { q: "Room‑temperature sheet resistance near neutrality is often:", choices: ["Gigohms/sq", "On the order of h/4e² per square", "~1 mΩ/sq", "Undefined"], answer: 1, explanation: "Minimum conductivity gives ~6.5 kΩ/sq scale." },
    { q: "Graphene’s chemical stability is largely due to:", choices: ["Weak covalent bonds", "Strong sp2 σ bonding", "Ionic character", "Hydrogen bonds"], answer: 1, explanation: "Robust σ framework stabilizes the lattice." },
    { q: "The 2D (G′) Raman peak shape in monolayer vs multilayer:", choices: ["Identical always", "Single sharp Lorentzian in monolayer; broader/multiple in multilayer", "Only appears in multilayer", "Disappears in monolayer"], answer: 1, explanation: "Electronic dispersion and stacking change the 2D lineshape." },

    { q: "Charge neutrality point shifts under ambient due to:", choices: ["Adsorbates (e.g., H₂O/O₂) causing p‑doping", "Intrinsic superconductivity", "Spin ordering", "Strong SOC"], answer: 0, explanation: "Surface adsorbates act as dopants and shift Dirac point." },
    { q: "Graphene’s out‑of‑plane flexural (ZA) phonons:", choices: ["Have linear dispersion", "Have quadratic dispersion near Γ", "Do not exist", "Are optical modes"], answer: 1, explanation: "Membrane‑like out‑of‑plane modes are quadratic at small k." },
    { q: "Electron–phonon coupling in graphene at RT primarily limits:", choices: ["Quantum Hall effect", "High‑field mobility/saturation velocity", "σ bonds", "Work function"], answer: 1, explanation: "Optical and acoustic phonons set high‑T/high‑field transport." },
    { q: "Opening a gap in monolayer graphene (on substrate) commonly relies on:", choices: ["Uniform gating alone", "Sublattice symmetry breaking or patterning", "Raising temperature", "Reducing t to zero"], answer: 1, explanation: "Breaking A/B equivalence (e.g., h‑BN alignment) can gap Dirac cones." },
    { q: "Electronic specific heat at low T in ideal graphene varies roughly as:", choices: ["∝ T", "∝ T²", "∝ e^{-Δ/T}", "Constant"], answer: 1, explanation: "Linear DOS → C_e ∝ T² at low T." }
  ]
};
