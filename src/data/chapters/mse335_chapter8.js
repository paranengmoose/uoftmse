// src/data/chapters/mse335_chapter8.js
export default {
  id: "module8_superconductivity",
  title: "Module 8: Superconductivity",
  questions: [
    // Fundamentals & Meissner
    { q: "A defining property of the superconducting state is:", choices: ["Perfect diamagnetism (Meissner effect) and zero DC resistance", "Very low but finite resistivity", "Ferromagnetism", "Large Seebeck coefficient"], answer: 0, explanation: "Superconductors expel magnetic flux (Meissner) and show zero DC resistance below Tc." },
    { q: "The Meissner effect means a superconductor in a weak field will:", choices: ["Trap all flux", "Expel magnetic field from the bulk", "Amplify the field", "Create vortices regardless of type"], answer: 1, explanation: "Below Tc and Hc, B≈0 inside the bulk for a Type‑I superconductor." },
    { q: "The temperature at which superconductivity first appears is:", choices: ["T_D", "T_c", "T_m", "T*",], answer: 1, explanation: "Critical temperature Tc marks the superconducting transition." },
    { q: "Which is NOT typically a conventional (low‑Tc) superconductor?", choices: ["Aluminum", "Lead", "Niobium", "Diamond (undoped)"], answer: 3, explanation: "Many elemental metals (Al, Pb, Nb) are superconducting; undoped diamond is not." },
    { q: "Magnetic susceptibility χ for an ideal superconductor in the Meissner state is:", choices: ["≈ +1", "≈ 0", "≈ −1 (SI ~ −1/μ0 in units)", "Undefined"], answer: 2, explanation: "Perfect diamagnet expels flux → χ ≈ −1 (dimensionless cgs picture)." },

    // London & electrodynamics
    { q: "Magnetic field decays from a superconductor surface over the:", choices: ["Debye length", "London penetration depth λ", "Coherence length ξ", "Skin depth δ only"], answer: 1, explanation: "B(x) ∝ e^{−x/λ}; λ is material‑ and T‑dependent." },
    { q: "One London equation relates supercurrent density J_s to:", choices: ["∇×J_s ∝ B", "J_s ∝ E", "∂J_s/∂t ∝ E", "∇·J_s ∝ ρ"], answer: 2, explanation: "London: ∂J_s/∂t = (n_s e^2/m) E; the curl form gives Meissner." },
    { q: "The superfluid density n_s(T):", choices: ["Is zero below Tc", "Increases as T decreases below Tc", "Is independent of T", "Peaks at Tc"], answer: 1, explanation: "More electrons condense into the superfluid as T→0." },
    { q: "The DC resistivity in the superconducting state is:", choices: ["Finite due to phonons", "Exactly zero (ideal DC)", "Negative", "Undefined"], answer: 1, explanation: "Supercurrent can persist indefinitely without dissipation (ignoring weak links/flux flow)." },
    { q: "Electromagnetic fields penetrate a Type‑I superconductor in the Meissner state:", choices: ["Deeply (mm)", "Over λ (tens of nm–hundreds of nm)", "Not at all", "Only via vortices"], answer: 1, explanation: "Field decays exponentially over λ." },

    // BCS & gap
    { q: "In BCS theory, electrons form:", choices: ["Magnons", "Cooper pairs", "Polarons", "Excitons"], answer: 1, explanation: "Weak attractive interaction (often phonon‑mediated) binds time‑reversed states." },
    { q: "BCS predicts an energy gap Δ(0) at T=0 with ratio:", choices: ["2Δ(0)/k_B Tc ≈ 3.52", "≈ 1.76", "≈ 7.04", "≈ 0.5"], answer: 0, explanation: "For weak‑coupling s‑wave superconductors 2Δ(0)/k_B Tc ≈ 3.52." },
    { q: "The isotope effect (Tc ∝ M^{−α}) supports:", choices: ["Purely magnetic pairing", "Phonon‑mediated pairing", "No pairing", "Only d‑wave pairing"], answer: 1, explanation: "Mass dependence of phonons influences Tc in many conventional superconductors." },
    { q: "Coherence length ξ roughly measures:", choices: ["Size of a Cooper pair / order‑parameter variation scale", "Skin depth", "Mean free path of normal electrons", "Fermi wavelength only"], answer: 0, explanation: "ξ sets spatial scale for superconducting correlations." },
    { q: "At T→Tc (from below), the gap Δ(T):", choices: ["Increases", "Goes to zero", "Becomes imaginary", "Is constant"], answer: 1, explanation: "Order parameter vanishes at the transition." },

    // GL theory & Type I/II
    { q: "The Ginzburg–Landau parameter κ is defined as:", choices: ["κ = ξ/λ", "κ = λ/ξ", "κ = Hc/Hc2", "κ = Hc1/Hc2"], answer: 1, explanation: "κ compares penetration depth to coherence length." },
    { q: "Type‑I vs Type‑II boundary occurs at:", choices: ["κ = 1/√2", "κ = 1", "κ = 2", "κ = 0"], answer: 0, explanation: "κ<1/√2: Type‑I; κ>1/√2: Type‑II." },
    { q: "Type‑I superconductors in a magnetic field show:", choices: ["Vortex lattice", "Intermediate/macroscopic normal domains near Hc", "Two critical fields Hc1 and Hc2", "No Meissner state"], answer: 1, explanation: "They transition abruptly at Hc; demagnetization yields intermediate state." },
    { q: "Type‑II superconductors are characterized by:", choices: ["Single Hc", "Two fields Hc1<H<Hc2 with vortices in between", "No vortices", "Only surface superconductivity"], answer: 1, explanation: "Mixed state hosts Abrikosov flux vortices between Hc1 and Hc2." },
    { q: "In extreme Type‑II (κ ≫ 1), which length is larger?", choices: ["ξ ≫ λ", "λ ≫ ξ", "ξ ≈ λ", "Neither defined"], answer: 1, explanation: "Large κ means magnetic field penetrates much more than order parameter varies." },

    // Vortices & mixed state
    { q: "Magnetic flux through a superconducting vortex is quantized in units of:", choices: ["h/e", "h/2e", "2h/e", "e/h"], answer: 1, explanation: "Cooper pairs have charge 2e → Φ0 = h/2e." },
    { q: "The vortex core size is on the order of:", choices: ["λ", "ξ", "Mean free path", "Sample thickness"], answer: 1, explanation: "Order parameter is suppressed over ξ in the core." },
    { q: "Abrikosov predicted that vortices in clean Type‑II SCs form:", choices: ["Random glass always", "A triangular lattice (often)", "Square lattice only", "No long‑range order"], answer: 1, explanation: "Energetics typically favor triangular arrangements." },
    { q: "Flux pinning is crucial to:", choices: ["Increase Hc2 only", "Prevent vortex motion and reduce dissipation at finite current", "Lower Tc", "Create Meissner effect"], answer: 1, explanation: "Moving vortices yield voltage/resistance; pinning stabilizes zero‑loss currents." },
    { q: "Critical current density Jc is limited by:", choices: ["Vortex depinning and motion", "Phonon heat capacity", "Only the Fermi energy", "Crystal symmetry exclusively"], answer: 0, explanation: "Lorentz force on vortices causes motion unless pinned; sets Jc." },

    // Critical fields & thermodynamics
    { q: "Hc is:", choices: ["Upper critical field for Type‑II", "Thermodynamic critical field for Type‑I", "Lower critical field", "Coercive field"], answer: 1, explanation: "Type‑I loses superconductivity near Hc." },
    { q: "For a Type‑II superconductor, Hc2 is roughly related to:", choices: ["ξ via Hc2 ∼ Φ0/(2π ξ²)", "λ via Hc2 ∼ Φ0/(2π λ²)", "Mean free path only", "Tc only"], answer: 0, explanation: "Shorter ξ → larger Hc2." },
    { q: "Lower critical field Hc1 marks:", choices: ["Onset of Meissner state", "Onset of vortex penetration", "Loss of superconductivity", "Only surface superconductivity"], answer: 1, explanation: "Vortices begin to enter for H>Hc1 in Type‑II." },
    { q: "Specific heat at Tc shows:", choices: ["No feature", "A jump (BCS prediction)", "A delta‑function divergence", "Only a slope change"], answer: 1, explanation: "BCS gives a finite jump ΔC at Tc." },
    { q: "In the superconducting state at low T, electronic specific heat behaves approximately like:", choices: ["γT", "e^{−Δ/k_BT}", "T³", "Constant"], answer: 1, explanation: "s‑wave gap suppresses excitations exponentially at low T." },

    // Josephson & quantum effects
    { q: "DC Josephson effect predicts a supercurrent across an SIS junction:", choices: ["Only with voltage bias", "At zero voltage with phase difference", "Only at high temperature", "Only in Type‑I SCs"], answer: 1, explanation: "I_s = I_c sin(Δφ) without applied voltage." },
    { q: "AC Josephson effect frequency under DC voltage V is:", choices: ["ν = eV/h", "ν = 2eV/h", "ν = h/2eV", "ν = V/h"], answer: 1, explanation: "Phase evolves: d(Δφ)/dt = 2eV/ħ → ν = (2e/h) V." },
    { q: "A SQUID uses:", choices: ["Two Josephson junctions in a loop to sense flux", "A single tunnel junction only", "Only Type‑I superconductors", "Ferromagnets"], answer: 0, explanation: "Interference in a superconducting loop makes it extremely sensitive to Φ." },
    { q: "Flux quantization in a SC ring occurs in units of:", choices: ["h/e", "h/2e", "e/h", "2h/e"], answer: 1, explanation: "Again due to charge 2e of Cooper pairs." },
    { q: "Shapiro steps appear when:", choices: ["Microwave radiation is applied to a Josephson junction", "Field is zero", "Temperature is above Tc", "Current is zero"], answer: 0, explanation: "Microwave locking leads to quantized voltage steps." },

    // Materials & high-Tc
    { q: "High‑Tc cuprates are typically:", choices: ["Conventional s‑wave BCS", "Layered oxides with d‑wave gap symmetry", "Simple elemental metals", "Ferromagnetic metals"], answer: 1, explanation: "Cuprates show unconventional pairing, often d‑wave." },
    { q: "A common feature of cuprates and many iron‑based SCs is:", choices: ["Strong 3D isotropy", "Layered (quasi‑2D) structure", "No anisotropy", "Single‑band s‑wave only"], answer: 1, explanation: "Layering yields anisotropic properties and vortex behavior." },
    { q: "Which element has one of the highest Tc among elemental SCs?", choices: ["Lead", "Niobium", "Mercury", "Sodium"], answer: 1, explanation: "Nb has Tc ≈ 9.2 K; among elemental SCs it's high." },
    { q: "MgB₂ (Tc≈39 K) is considered:", choices: ["A heavy‑fermion SC", "A phonon‑mediated two‑gap superconductor", "A cuprate", "An s± iron pnictide"], answer: 1, explanation: "Two distinct gaps on σ and π bands with strong EPC." },
    { q: "Increasing impurity scattering in an s‑wave superconductor typically:", choices: ["Raises Tc strongly", "Has weak effect on Tc (Anderson’s theorem, for non‑magnetic)", "Destroys superconductivity instantly", "Induces ferromagnetism"], answer: 1, explanation: "Non‑magnetic disorder weakly affects s‑wave Tc; magnetic impurities suppress Tc." },

    // Practical & measurement
    { q: "Four‑probe DC measurement below Tc ideally reads:", choices: ["Finite slope V–I", "Zero voltage at finite current (below Jc)", "Negative resistance", "Oscillatory voltage"], answer: 1, explanation: "Zero DC resistance until exceeding Jc or causing flux flow." },
    { q: "Surface superconductivity can persist up to a field Hc3 that is:", choices: ["≈ 1.7 Hc2", "≈ 0.5 Hc2", "Equal to Hc1", "Unrelated to Hc2"], answer: 0, explanation: "GL predicts Hc3 ≈ 1.695 Hc2 for ideal surfaces." },
    { q: "In thin films with thickness d ≪ λ, effective screening is:", choices: ["Stronger than bulk", "Weaker; fields penetrate more", "Identical to bulk", "Independent of d"], answer: 1, explanation: "Finite‑size reduces shielding effectiveness." },
    { q: "Microwave surface resistance in a clean superconductor (T≪Tc) is:", choices: ["Large like normal metal", "Very small but nonzero due to quasiparticles", "Exactly zero", "Undefined"], answer: 1, explanation: "Residual quasiparticles and pair‑breaking give finite RF losses." },
    { q: "Thermal conductivity in the superconducting state at low T:", choices: ["Dominated by electrons as in normal state", "Often reduced; phonon channel may dominate", "Diverges", "Is identical to normal state"], answer: 1, explanation: "Gapped electrons contribute less; phonons can dominate." },

    // Energetics & misc
    { q: "Condensation energy of a superconductor is related to:", choices: ["Difference in free energy between SC and normal states", "Only lattice energy", "Only magnetic energy", "Work function"], answer: 0, explanation: "It’s the free‑energy gain that stabilizes the SC state." },
    { q: "Pair‑breaking is especially strong for:", choices: ["Non‑magnetic impurities in s‑wave", "Magnetic impurities", "Clean samples", "Vortex‑free samples"], answer: 1, explanation: "Magnetic scattering breaks time‑reversed pairing." },
    { q: "Thermodynamic critical field Hc(T) typically:", choices: ["Is constant in T", "Decreases to zero at Tc", "Increases to infinity at Tc", "Is independent of material"], answer: 1, explanation: "Order parameter and condensation energy vanish at Tc." },
    { q: "A hallmark of the mixed state in Type‑II is:", choices: ["Uniform B=0", "Coexistence of normal vortex cores and superconducting regions", "Only Meissner expulsion", "No currents"], answer: 1, explanation: "Vortices carry quantized flux with normal cores." },
    { q: "A superconductor with κ<1/√2 will generally:", choices: ["Be Type‑I", "Be Type‑II", "Have Hc2>Hc3", "Form stable vortex lattices"], answer: 0, explanation: "Small κ favors Type‑I behavior without a mixed state." }
  ]
};
