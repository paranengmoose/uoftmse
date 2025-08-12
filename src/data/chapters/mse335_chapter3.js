// src/data/chapters/mse335_phonons.js
export default {
  id: "module3_phonons",
  title: "Module 3: Phonons & Thermal Properties",
  questions: [
    { q: "A phonon is best described as:", choices: ["A quantized lattice vibration", "A free electron", "A magnon", "A photon in a crystal"], answer: 0, explanation: "Phonons are quanta of lattice vibrational energy." },
    { q: "The occupation number of phonons follows:", choices: ["Fermi–Dirac statistics", "Maxwell–Boltzmann", "Bose–Einstein statistics", "Uniform distribution"], answer: 2, explanation: "Phonons are bosons and obey Bose–Einstein statistics." },
    { q: "In a 1D monatomic chain, near k≈0 the dispersion is:", choices: ["Linear (ω∝|k|)", "Quadratic (ω∝k²)", "Flat (ω≈const.)", "Gapped"], answer: 0, explanation: "Acoustic modes are linear at small k." },
    { q: "Group velocity of a phonon is:", choices: ["v_g = dω/dk", "v_g = ω/k", "v_g = c", "Zero for all modes"], answer: 0, explanation: "Energy transport speed is the slope of the dispersion." },
    { q: "An optical phonon branch appears in:", choices: ["Monatomic lattices only", "Diatomic (or multi‑atom) bases", "Amorphous solids only", "Liquids"], answer: 1, explanation: "Out‑of‑phase motion of basis atoms produces optical modes." },

    { q: "At k=0, acoustic and optical branches differ because:", choices: ["Acoustic: ω→0; Optical: ω finite", "Both have ω→0", "Both have ω finite", "Acoustic has higher ω than optical"], answer: 0, explanation: "Optical modes have a nonzero gap at Γ." },
    { q: "The Brillouin zone (BZ) is:", choices: ["A Wigner–Seitz cell in k‑space", "A unit cell in real space", "A region in real space around an atom", "A band gap"], answer: 0, explanation: "It’s the Wigner–Seitz construction in reciprocal space." },
    { q: "The Debye model assumes:", choices: ["Linear dispersion up to a cutoff k_D", "Parabolic dispersion always", "Flat dispersion", "Only optical branches"], answer: 0, explanation: "Debye linearizes acoustic modes and imposes a cutoff." },
    { q: "Einstein’s model treats the solid as:", choices: ["A continuum of modes up to k_D", "Independent oscillators of one frequency", "Free particles in a box", "Only transverse waves"], answer: 1, explanation: "All atoms oscillate at the same frequency in the Einstein model." },
    { q: "Dulong–Petit law predicts at high T:", choices: ["C_V ≈ 3Nk_B", "C_V ≈ (1/2)Nk_B", "C_V → 0", "C_V ≈ Nk_B ln T"], answer: 0, explanation: "High‑T classical limit gives 3k_B per atom." },

    { q: "Debye T³ law states that at low T:", choices: ["C_V ∝ T", "C_V ∝ T²", "C_V ∝ T³", "C_V constant"], answer: 2, explanation: "Acoustic phonon DoS gives T³ specific heat at low T." },
    { q: "Thermal conductivity (phonon) in kinetic theory:", choices: ["k = (1/3) C v l", "k = C v / l", "k = (1/3) v / (C l)", "k = C l / v"], answer: 0, explanation: "C is volumetric heat capacity, v group velocity, l mean free path." },
    { q: "Normal (N) processes:", choices: ["Do not conserve crystal momentum", "Conserve crystal momentum (mod G=0)", "Create electrons", "Always reduce heat flow"], answer: 1, explanation: "N processes conserve quasi‑momentum and don’t directly resist heat flow." },
    { q: "Umklapp (U) processes:", choices: ["Always conserve k without a reciprocal vector", "Transfer k by a reciprocal lattice vector", "Have no effect on k", "Only occur at T=0 K"], answer: 1, explanation: "U processes break heat flow by effectively reversing momentum." },
    { q: "Mean free path typically:", choices: ["Increases with T at high T", "Decreases with T at high T due to U processes", "Is T‑independent", "Is infinite in real crystals"], answer: 1, explanation: "Anharmonic scattering increases with T, shortening l." },

    { q: "Longitudinal acoustic (LA) vs transverse acoustic (TA):", choices: ["LA has atoms moving ⟂ to k", "TA has atoms ∥ to k", "LA is usually faster than TA", "TA is usually faster than LA"], answer: 2, explanation: "Sound speed is generally higher for LA modes." },
    { q: "Number of acoustic branches in 3D crystal with r atoms per cell:", choices: ["1", "2", "3", "3r"], answer: 2, explanation: "Always 3 acoustic branches (one LA, two TA)." },
    { q: "Total number of phonon branches in a crystal with r atoms/unit cell:", choices: ["3", "r", "3r", "3r−3"], answer: 2, explanation: "3 acoustic + 3(r−1) optical = 3r." },
    { q: "Optical phonons in polar crystals can exhibit:", choices: ["LO–TO splitting", "No splitting", "Only acoustic gaps", "Magnetic resonance"], answer: 0, explanation: "Long‑range Coulomb forces split longitudinal and transverse optical modes." },
    { q: "The Debye temperature Θ_D is:", choices: ["The melting temperature", "The temperature scale set by highest acoustic frequency", "Room temperature", "A magnetic ordering temperature"], answer: 1, explanation: "Θ_D ~ ħω_D/k_B sets the crossover in heat capacity." },

    { q: "At T ≫ Θ_D, the Debye model predicts:", choices: ["C_V → 3Nk_B", "C_V → 0", "C_V ∝ T³", "C_V ∝ T²"], answer: 0, explanation: "It approaches the Dulong–Petit limit." },
    { q: "Phonon density of states g(ω) for acoustic modes at low ω:", choices: ["∝ ω²", "Constant", "∝ 1/ω", "∝ ω⁰.⁵"], answer: 0, explanation: "In 3D, linear dispersion yields g(ω) ∝ ω² at low ω." },
    { q: "In a 1D diatomic chain, acoustic and optical branches:", choices: ["Do not exist", "Cross each other", "Are separated by a gap at the zone boundary", "Are identical"], answer: 2, explanation: "Mass contrast leads to a band gap between branches." },
    { q: "Zone boundary (k=π/a) often corresponds to:", choices: ["Minimum frequency always", "Group velocity v_g = 0", "Maximum group velocity", "No special property"], answer: 1, explanation: "dω/dk vanishes at band edges." },
    { q: "Specific heat of an Einstein solid at low T behaves as:", choices: ["∝ T³", "Exponential freeze‑out", "Constant", "∝ T"], answer: 1, explanation: "A single frequency causes activated behavior at low T." },

    { q: "Thermal conductivity of high‑purity crystals vs T (phonon‑dominated):", choices: ["Monotonic decrease", "Monotonic increase", "Often peaks at intermediate T", "Flat"], answer: 2, explanation: "Boundary scattering dominates low T; U‑processes dominate high T." },
    { q: "Boundary scattering matters most:", choices: ["At very low T", "At very high T", "Near Θ_D", "Only in liquids"], answer: 0, explanation: "Few phonons are present; l limited by sample size." },
    { q: "Anharmonicity is essential to explain:", choices: ["Zero thermal expansion", "Finite thermal expansion and U‑processes", "Band gaps", "Fermi surfaces"], answer: 1, explanation: "Asymmetric potential leads to expansion and Umklapp scattering." },
    { q: "Heat capacity C_P vs C_V in solids:", choices: ["C_P = C_V at all T", "C_P > C_V generally", "C_P < C_V generally", "Unrelated"], answer: 1, explanation: "Work done at constant pressure makes C_P slightly larger." },
    { q: "In kinetic theory, increasing phonon velocity v generally:", choices: ["Lowers k", "Raises k if other factors fixed", "Has no effect", "Eliminates U‑processes"], answer: 1, explanation: "k ∝ C v l; larger v increases conductivity." },

    { q: "Heat current is primarily carried by:", choices: ["Electrons only", "Phonons only in all solids", "Phonons in insulators, electrons in metals", "Photons in all cases"], answer: 2, explanation: "Carriers depend on material type." },
    { q: "Bose–Einstein distribution for phonons is n(ω) =", choices: ["1/(e^{ħω/k_BT}−1)", "1/(e^{(ε−μ)/k_BT}+1)", "e^{−ħω/k_BT}", "δ(ω−ω_D)"], answer: 0, explanation: "BE occupancy with zero chemical potential for phonons." },
    { q: "The acoustic sum rule ensures:", choices: ["Three zero‑frequency modes at k=0", "No acoustic modes", "Optical gap at k=0", "Magnetic excitations"], answer: 0, explanation: "Translational invariance gives ω→0 for 3 acoustic modes at Γ." },
    { q: "Sound velocity relates to elastic constants and density roughly as:", choices: ["v ∼ √(C/ρ)", "v ∼ Cρ", "v ∼ 1/(Cρ)", "v independent of C"], answer: 0, explanation: "Wave speed grows with stiffness and falls with density." },
    { q: "Debye cutoff is chosen to:", choices: ["Match total number of modes to 3N", "Maximize thermal conductivity", "Minimize energy", "Eliminate optical modes"], answer: 0, explanation: "Cutoff ensures correct total mode count." },

    { q: "Thermal conductivity in insulators often decreases ~1/T at high T because:", choices: ["Boundary scattering grows", "U‑process scattering increases", "C decreases strongly", "v goes to zero"], answer: 1, explanation: "Umklapp rates increase with T, reducing l." },
    { q: "Isotopic disorder primarily:", choices: ["Shifts Θ_D strongly", "Scatters phonons and lowers k", "Creates optical branches", "Raises C_V at low T"], answer: 1, explanation: "Mass disorder adds elastic scattering, reducing l." },
    { q: "In 2D materials (e.g., graphene), an extra acoustic branch is:", choices: ["LO", "TO", "ZA (out‑of‑plane flexural)", "None"], answer: 2, explanation: "Flexural ZA mode has quadratic dispersion near Γ." },
    { q: "The Grüneisen parameter γ measures:", choices: ["Electron effective mass", "Anharmonicity/volume dependence of phonon frequency", "Magnetic moment", "Band curvature"], answer: 1, explanation: "It links phonon frequencies to strain/volume changes." },
    { q: "Optical phonons are often excited by:", choices: ["Microwave only", "Infrared/Raman radiation", "Gamma rays", "Static fields only"], answer: 1, explanation: "IR and Raman couple to optical modes under selection rules." },

    { q: "In polar semiconductors, strong coupling between electrons and optical phonons leads to:", choices: ["Polarons/Fröhlich interaction", "Magnons", "Excitons only", "Plasmons only"], answer: 0, explanation: "LO phonons can couple strongly to carriers." },
    { q: "The specific heat of metals at low T includes:", choices: ["Only T³ term", "Electronic ∝ T term plus phonon ∝ T³ term", "Only constant term", "Only exponential term"], answer: 1, explanation: "Electrons add a linear term; phonons give T³." },
    { q: "At very low T, dominant phonon scattering is often:", choices: ["Boundary scattering", "Umklapp", "Isotope scattering only", "Four‑phonon processes"], answer: 0, explanation: "Few phonons exist; surfaces limit l." },
    { q: "The phonon mean free path in ultrapure crystals at low T can be:", choices: ["Ångström scale", "Comparable to sample size (mm–cm)", "Always <1 nm", "Undefined"], answer: 1, explanation: "Boundary‑limited l can approach macroscopic dimensions." },
    { q: "In a simple cubic monatomic crystal, the number of optical branches is:", choices: ["0", "1", "2", "3"], answer: 0, explanation: "With one atom per cell there are only 3 acoustic branches." },

    { q: "Raman selection rules depend on:", choices: ["Magnetic order only", "Crystal symmetry/phonon symmetry", "Electron mass", "Sample thickness only"], answer: 1, explanation: "Group theory of modes dictates activity." },
    { q: "Heat capacity saturation to 3Nk_B fails when:", choices: ["T ≪ Θ_D", "T ≫ Θ_D", "No phonons exist", "Electrons dominate"], answer: 0, explanation: "Quantum freeze‑out at low T reduces C well below 3Nk_B." },
    { q: "The energy of a phonon mode is:", choices: ["E = ħω(n+1/2)", "E = ħω n²", "E = k_B T", "E = mc²"], answer: 0, explanation: "Harmonic oscillator quantization applies." },
    { q: "Acoustic phonon polarization refers to:", choices: ["Spin of phonons", "Direction of atomic displacement relative to k", "Electron polarization", "Ionic charge state"], answer: 1, explanation: "LA/TA indicate displacement orientation vs wavevector." },
    { q: "Thermal diffusivity α is:", choices: ["α = k/(ρ C_p)", "α = ρ C_p/k", "α = k ρ C_p", "α = k C_p"], answer: 0, explanation: "Relates heat conduction to thermal storage." },

    { q: "In crystals, the first BZ boundary often corresponds to:", choices: ["Standing waves and band edges", "Infinite velocity", "No modes", "Uniform displacement"], answer: 0, explanation: "Bragg reflection leads to standing waves/band edges." },
    { q: "Anharmonic phonon–phonon scattering involves:", choices: ["Only two phonons", "Three‑phonon and higher‑order processes", "Electrons only", "Magnons only"], answer: 1, explanation: "Three‑phonon (N/U) processes dominate many regimes." },
    { q: "Heat capacity integral in Debye model sums over:", choices: ["Only one frequency", "All modes up to ω_D with BE weights", "Only optical modes", "Only LA branch"], answer: 1, explanation: "Integration uses the Debye DoS and BE occupation." },
    { q: "If v_g → 0 at a flat band, then contribution to k:", choices: ["Increases strongly", "Is zero from that mode", "Is infinite", "Unchanged"], answer: 1, explanation: "No group velocity means no heat flux from that mode." },
    { q: "The physical meaning of k in phonon dispersion ω(k):", choices: ["Real‑space position", "Crystal momentum (wavevector)", "Temperature", "Frequency only"], answer: 1, explanation: "k labels Bloch wavevectors in the BZ." }
  ]
};
