// src/data/chapters/mse335_chapter10.js
export default {
  id: "module10_magnetism_interacting_spins",
  title: "Module 10: Magnetism – Interacting Spins",
  questions: [
    // 1–5 Ordered magnetic phases & basics
    { q: "A ferromagnet is characterized by:", choices: ["Antiparallel equal moments with zero net M", "Parallel alignment of equal moments below Tc", "No long-range order", "Opposite sublattices with equal but opposite M"], answer: 1, explanation: "Below Tc, spins align parallel giving spontaneous magnetization." },
    { q: "An antiferromagnet has:", choices: ["Parallel moments on all sites", "Two sublattices with antiparallel equal moments", "Random frozen spins", "A single domain only"], answer: 1, explanation: "AFM order: equal and opposite sublattice moments (net M≈0) below TN." },
    { q: "A ferrimagnet differs from an antiferromagnet because:", choices: ["It has no sublattices", "Sublattices have unequal moments, giving nonzero net M", "It only exists at T>Tc", "It is always paramagnetic"], answer: 1, explanation: "Unequal opposing sublattice moments leave a net magnetization." },
    { q: "Magnetic ordering requires (choose the best set):", choices: ["No unpaired spins; strong phonons; high T", "Unpaired spins; intersite interactions; sufficiently low T", "Only strong fields", "Zero exchange and zero temperature"], answer: 1, explanation: "Moments + interactions + low enough T for order to win over fluctuations." },
    { q: "Above the Curie or Néel temperature, ordered magnets become:", choices: ["Diamagnetic", "Paramagnetic", "Superconducting", "Spin glass necessarily"], answer: 1, explanation: "Thermal agitation destroys long-range order → paramagnetism." },

    // 6–10 Two-electron singlet/triplet (exchange origin)
    { q: "For two electrons, the singlet spin state has total S:", choices: ["S = 1", "S = 0", "S = 2", "Undefined"], answer: 1, explanation: "Antiparallel pairing gives S=0; triplet has S=1." },
    { q: "Triplet spin states (two electrons) are:", choices: ["ms = −1, 0, +1", "Only ms = 0", "ms = −2, 0, +2", "Forbidden by Pauli"], answer: 0, explanation: "Threefold degenerate: ms ∈ {−1,0,+1}." },
    { q: "Pauli antisymmetry implies for two-electron states:", choices: ["Spin and spatial parts are both symmetric", "Exactly one of spin/spatial parts is antisymmetric", "Both parts antisymmetric", "No constraint"], answer: 1, explanation: "Total wavefunction must be antisymmetric under exchange." },
    { q: "In the simple two-site picture, which has lower Coulomb energy?", choices: ["Parallel spins (triplet)", "Antiparallel spins (singlet)", "They are identical", "Depends only on field, not wavefunction symmetry"], answer: 0, explanation: "Parallel spins reduce overlap → electrons avoid each other on average." },
    { q: "Energy splitting between triplet and singlet is associated with:", choices: ["Spin–orbit energy only", "Exchange interaction J", "Zeeman energy exclusively", "Crystal-field energy only"], answer: 1, explanation: "Exchange sets E_triplet − E_singlet and sign determines FM/AFM tendency." },

    // 11–15 Heisenberg Hamiltonian & sign of J
    { q: "A simple Heisenberg model for interacting spins is:", choices: ["H = Σi μB Si·B", "H = − 2 Σ⟨ij⟩ J S_i·S_j", "H = kBT Σi S_i", "H = λM²"], answer: 1, explanation: "Heisenberg exchange couples neighboring spins; sign of J sets FM/AFM." },
    { q: "Positive exchange constant J (>0) in Heisenberg model favors:", choices: ["Antiferromagnetism", "Ferromagnetism", "Paramagnetism", "Diamagnetism"], answer: 1, explanation: "For the −2J S_i·S_j convention, J>0 lowers energy for parallel alignment." },
    { q: "Negative J (<0) generally leads to:", choices: ["Ferromagnetic order", "Antiferromagnetic order", "No order possible", "Superconductivity"], answer: 1, explanation: "Energy minimized by antiparallel neighbors." },
    { q: "Mean-field replacement used for interactions is roughly:", choices: ["S_j → 0", "S_j → ⟨S_j⟩", "J → 0", "S_i → 0"], answer: 1, explanation: "Replace neighbors by their average to get a tractable effective field." },
    { q: "With z nearest neighbors, the exchange field scales like:", choices: ["H_int ∝ λ M with λ ∝ zJ", "H_int ∝ B²", "H_int ∝ 1/z", "No dependence on coordination"], answer: 0, explanation: "More neighbors/intersite coupling → stronger mean internal field." },

    // 16–20 Curie–Weiss law & Tc
    { q: "Curie–Weiss susceptibility has the form:", choices: ["χ = C/T", "χ = C/(T − Θ)", "χ = C(T − Θ)", "χ = constant"], answer: 1, explanation: "Mean-field interactions shift Curie law by Weiss temperature Θ (≈Tc for FM)." },
    { q: "In a ferromagnet, the transition temperature is:", choices: ["Debye temperature", "Curie temperature Tc", "Néel temperature", "Blocking temperature"], answer: 1, explanation: "FM order disappears at Tc; AFM uses TN." },
    { q: "In CW theory for ferromagnets (H→H+λM), χ diverges when:", choices: ["T → 0", "T → Θ (≈Tc)", "B → 0", "λ → 0"], answer: 1, explanation: "Denominator T−Θ → 0 gives divergence at the ordering temperature." },
    { q: "Below Tc and zero applied field, the bulk magnetization:", choices: ["Is zero", "Is finite due to spontaneous symmetry breaking", "Oscillates with time", "Is negative definite"], answer: 1, explanation: "Spontaneous magnetization appears below Tc." },
    { q: "The Brillouin function is used in mean-field to determine:", choices: ["M(T) for superconductors", "M(H,T) for localized moments", "Only diamagnetic χ", "Only domain sizes"], answer: 1, explanation: "Gives equation of state for localized spins; used to get M(T) below Tc." },

    // 21–25 Reduced variables & spin-1/2 mean-field
    { q: "For spin-½, the Brillouin function reduces to:", choices: ["B_{1/2}(x) = coth x − 1/x", "B_{1/2}(x) = tanh x", "B_{1/2}(x) = x/3", "B_{1/2}(x) = 0"], answer: 1, explanation: "Spin‑½ magnetization follows tanh of the argument." },
    { q: "In reduced variables m_r and t_r (magnetization and temperature):", choices: ["m_r = tanh(m_r / t_r)", "m_r = m_r^2 / t_r", "t_r = tanh(m_r)", "m_r = 1 − t_r"], answer: 0, explanation: "Mean-field self-consistency for spin‑½: m = tanh(m/t)." },
    { q: "Near Tc, mean-field predicts the spontaneous magnetization behaves like:", choices: ["m_r ∝ (1 − t_r)^{1/2}", "m_r ∝ (1 − t_r)", "m_r ∝ (1 − t_r)^{3/2}", "m_r ∝ constant"], answer: 0, explanation: "Critical exponent β=1/2 in mean-field." },
    { q: "In zero field, the order parameter m(T) vanishes:", choices: ["Discontinuously at Tc", "Continuously at Tc", "Only at absolute zero", "Never"], answer: 1, explanation: "Second-order (continuous) transition in mean-field picture." },
    { q: "The Weiss constant Θ is physically linked to:", choices: ["Exchange strength and z", "Only lattice constant", "Only spin-orbit coupling", "Only Zeeman energy"], answer: 0, explanation: "Microscopic exchange and coordination set the mean-field scale." },

    // 26–30 Magnetocrystalline anisotropy (MCA)
    { q: "Magnetocrystalline anisotropy originates mainly from:", choices: ["Exchange only", "Spin–orbit coupling and crystal symmetry", "Phonon drag", "Zeeman energy"], answer: 1, explanation: "SOC couples spin to lattice, favoring easy/hard directions." },
    { q: "A common uniaxial anisotropy energy density is:", choices: ["U_A ≈ K₁ sin²θ + K₂ sin⁴θ", "U_A ≈ K sin θ", "U_A ≈ K cos θ", "U_A ≈ 0"], answer: 0, explanation: "Series in even powers reflects inversion of ±M along axis." },
    { q: "The anisotropy field is defined as:", choices: ["H_A = 2K₁/μ₀M_s", "H_A = K₁/μ₀", "H_A = μ₀M_s/2K₁", "H_A = K₂/μ₀M_s"], answer: 0, explanation: "Field scale competing with anisotropy in SW model." },
    { q: "Easy axis is the direction where:", choices: ["U_A is maximum", "U_A is minimum", "M is forbidden", "Exchange vanishes"], answer: 1, explanation: "Spins prefer orientations minimizing anisotropy energy." },
    { q: "Hard axis is the direction where:", choices: ["U_A minimal", "U_A maximal", "Zeeman energy zero", "No hysteresis possible"], answer: 1, explanation: "Alignment there costs anisotropy energy." },

    // 31–35 Stoner–Wohlfarth (single-domain) model
    { q: "The SW reduced energy for a uniaxial particle is often written:", choices: ["e = −2h cosφ + sin²(φ−θ)", "e = −h sinφ + cos²φ", "e = h cosφ", "e = sinφ − cosφ"], answer: 0, explanation: "With h=H/H_A and θ the angle between field and easy axis." },
    { q: "In SW, the coercive/switching field depends on:", choices: ["Temperature only", "Angle θ between H and easy axis", "Sample thickness only", "Grain size only"], answer: 1, explanation: "Angular dependence gives different h_sw(θ)." },
    { q: "For θ = 0° (field along easy axis), the reduced switching field is:", choices: ["h_sw = 0", "h_sw = 1", "h_sw = 1/2", "Undefined"], answer: 1, explanation: "Maximum switching field equals H_A along easy axis." },
    { q: "For θ = 45° in SW, a classic result is:", choices: ["h_sw ≈ 1", "h_sw ≈ 0.5", "h_sw ≈ 0", "h_sw ≈ 2"], answer: 1, explanation: "Oblique fields reduce switching field relative to H_A." },
    { q: "The quantity measured along the field is:", choices: ["m_h = sinφ", "m_h = cosφ", "m_h = tanφ", "m_h = φ"], answer: 1, explanation: "Projection of M on H direction." },

    // 36–40 Domains & domain walls
    { q: "Ferromagnets form domains primarily to reduce:", choices: ["Exchange energy", "Magnetostatic (demagnetizing) energy", "Zeeman energy", "Joule heating"], answer: 1, explanation: "Closed-flux configurations lower magnetostatic energy." },
    { q: "A Bloch wall separates:", choices: ["Paramagnet and ferromagnet", "Two domains of different magnetization directions", "Core and shell of a nanoparticle", "AFM and FM phases"], answer: 1, explanation: "Magnetization rotates across the wall between domains." },
    { q: "Domain wall width δ (180° wall) scales approximately as:", choices: ["δ ∝ √(A/K)", "δ ∝ K/A", "δ ∝ A·K", "δ ∝ 1/√(AK)"], answer: 0, explanation: "Exchange stiffness A widens walls; anisotropy K narrows them." },
    { q: "Domain wall specific energy σ scales as:", choices: ["σ ∝ √(A K)", "σ ∝ A/K", "σ ∝ K/A", "σ ∝ A+K only"], answer: 0, explanation: "Competition of exchange and anisotropy gives σ ~ π√(AK)." },
    { q: "At low fields, magnetization often changes first by:", choices: ["Rotation of all spins together", "Domain wall motion", "Lattice expansion", "Reversing anisotropy sign"], answer: 1, explanation: "Wall motion is energetically cheaper at small H." },

    // 41–45 Hysteresis & hard/soft magnets
    { q: "A hysteresis loop shows:", choices: ["No memory effect", "Irreversible switching and coercive field", "Only reversible rotation", "Zero remanence"], answer: 1, explanation: "Irreversibility leads to remanent magnetization and coercivity." },
    { q: "Hard magnets are engineered to have:", choices: ["Low anisotropy and narrow loops", "Large anisotropy and high coercivity", "Zero domains", "Only soft iron"], answer: 1, explanation: "High K and pinning yield large coercive fields for permanent magnets." },
    { q: "Soft magnets are preferred for transformers because they have:", choices: ["High coercivity", "Low coercivity and narrow loops", "Zero permeability", "Gigantic hysteresis losses"], answer: 1, explanation: "Low losses under AC cycling require small hysteresis area." },
    { q: "Coercivity depends strongly on:", choices: ["Anisotropy, microstructure, and pinning", "Curie temperature only", "Bohr magneton value", "Lattice thermal conductivity"], answer: 0, explanation: "Pinning centers and K1 dominate domain reversal processes." },
    { q: "Remanent magnetization M_r is:", choices: ["Magnetization at zero field after saturation", "Field at zero magnetization", "Slope of M–H", "The same as saturation magnetization"], answer: 0, explanation: "M retained after removing H." },

    // 46–50 Applications & wrap-up
    { q: "Magnetic recording exploits:", choices: ["Superconducting vortices", "Controlled reversal of small magnetic domains", "Diamagnetic levitation", "Curie–Weiss susceptibility"], answer: 1, explanation: "Bits are stored by stable domain orientations in grains." },
    { q: "Demagnetizing fields arise from:", choices: ["Uniform internal charge density", "Surface magnetic poles from nonuniform M", "Spin–orbit coupling", "Crystal fields only"], answer: 1, explanation: "Divergence of M at surfaces creates stray fields opposing M." },
    { q: "Mean-field theory typically overestimates:", choices: ["Critical temperatures", "Anisotropy constants", "Bohr magneton", "Exchange stiffness"], answer: 0, explanation: "Neglects fluctuations → higher Tc than experiment (esp. low‑D)." },
    { q: "At T just above Tc, ferromagnets obey:", choices: ["Curie law (χ ∝ 1/T)", "Curie–Weiss law (χ ∝ 1/(T−Tc))", "Pauli paramagnetism", "Diamagnetism only"], answer: 1, explanation: "Interacting moments yield CW with Θ≈Tc." },
    { q: "In AFM materials, the ordering temperature is called:", choices: ["Curie temperature", "Néel temperature", "Blocking temperature", "Kosterlitz temperature"], answer: 1, explanation: "AFM order sets in below TN." }
  ]
};
