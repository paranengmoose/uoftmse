// src/data/chapters/mse335_chapter7.js
export default {
  id: "module7_semiconductors",
  title: "Module 7: Semiconductors",
  questions: [
    // Fundamentals & bands
    { q: "A semiconductor is characterized by:", choices: ["No band gap", "A small band gap between VB and CB", "A partially filled valence band at 0 K", "Infinite carrier mobility"], answer: 1, explanation: "Semiconductors have a finite but relatively small Eg between valence and conduction bands." },
    { q: "At T = 0 K in an ideal semiconductor:", choices: ["Both bands are half full", "Valence band is full and conduction band is empty", "Conduction band is partially filled", "There are intrinsic carriers"], answer: 1, explanation: "All VB states are filled and CB states empty at 0 K." },
    { q: "When an electron is excited from the VB to the CB, it leaves behind:", choices: ["A photon", "A magnon", "A hole", "An exciton only"], answer: 2, explanation: "The vacant VB state behaves as a positively charged hole." },
    { q: "The crystal momentum of a hole relates to the missing electron as:", choices: ["k_h = k_e", "k_h = −k_e", "k_h = 0", "Undefined"], answer: 1, explanation: "Removing an electron at k leaves a hole with −k." },
    { q: "Hole energy relative to VB top relates to electron energy as:", choices: ["E_h(k) = E_e(k)", "E_h(k) = −E_e(−k)", "E_h(k) = 2E_e(k)", "No relation"], answer: 1, explanation: "Energy scales are opposite; using k↦−k gives E_h(k)=−E_e(k)." },

    // DOS & statistics
    { q: "3D parabolic‑band DOS near a band edge varies as:", choices: ["√(E−E_edge)", "(E−E_edge)^0", "1/√(E−E_edge)", "(E−E_edge)^2"], answer: 0, explanation: "For 3D, ρ(E) ∝ √(E−E_edge)." },
    { q: "Fermi–Dirac distribution satisfies:", choices: ["0 ≤ f ≤ 1", "f > 1 possible", "f < 0 possible", "Unbounded"], answer: 0, explanation: "Occupancy probability is bounded between 0 and 1 for fermions." },
    { q: "At any T, f(E=E_F) equals:", choices: ["0", "1", "1/2", "k_BT/E_F"], answer: 2, explanation: "By definition, f(E_F,T)=1/2 for T>0." },
    { q: "A semiconductor is non‑degenerate when:", choices: ["E−E_F ≪ k_BT", "E−E_F ≫ k_BT (≈3k_BT rule‑of‑thumb)", "E_F inside a band", "DOS is constant"], answer: 1, explanation: "If E is several k_BT from E_F, Maxwell–Boltzmann approximation applies." },
    { q: "In metals at ordinary T, the electron gas is:", choices: ["Non‑degenerate", "Degenerate (k_BT ≪ E_F)", "Classical", "Empty"], answer: 1, explanation: "E_F ~ eV; k_BT is much smaller even near melting." },

    // Carrier concentrations (non-degenerate)
    { q: "Conduction‑band electron concentration (3D, non‑degenerate) is:", choices: ["n = N_C exp((E_C − E_F)/k_BT)", "n = N_C exp((E_F − E_C)/k_BT)", "n = N_V exp((E_F − E_V)/k_BT)", "n = n_i^2 / p only"], answer: 1, explanation: "n increases as E_F approaches E_C: n = N_C e^{(E_F−E_C)/kT}." },
    { q: "Valence‑band hole concentration (non‑degenerate) is:", choices: ["p = N_V exp((E_V − E_F)/k_BT)", "p = N_C exp((E_F − E_C)/k_BT)", "p = N_V exp((E_F − E_V)/k_BT)", "p = 0"], answer: 0, explanation: "p grows as E_F moves toward E_V." },
    { q: "Intrinsic concentration satisfies (thermal equilibrium):", choices: ["n p = 0", "n p = n_i", "n p = n_i^2", "n = p = 0"], answer: 2, explanation: "Law of mass action: n p = n_i^2." },
    { q: "Intrinsic carrier concentration depends primarily on:", choices: ["Eg and the effective DOS N_C,N_V", "Sample length", "Magnetic field only", "Contact metal"], answer: 0, explanation: "n_i(T) ∝ √(N_C N_V) e^{−Eg/(2kT)}." },
    { q: "In an intrinsic semiconductor at equilibrium:", choices: ["n = p = n_i", "n ≫ p", "p ≫ n", "n = 0, p = 0"], answer: 0, explanation: "Excitations create electrons and holes in equal numbers." },

    // Effective DOS & Fermi level position
    { q: "The effective DOS N_C and N_V scale with:", choices: ["(m^*)^{3/2} T^{3/2}", "T only", "m* only", "Eg only"], answer: 0, explanation: "For 3D parabolic bands, N_{C,V} ∝ (m^* T)^{3/2}." },
    { q: "The intrinsic Fermi level E_i lies:", choices: ["At midgap exactly always", "Near midgap with a small correction ∝ ln(N_V/N_C)", "At E_C", "At E_V"], answer: 1, explanation: "E_i ≈ (E_C+E_V)/2 + (3/4)kT ln(m_h*/m_e*)." },
    { q: "For a material with m_e* ≪ m_h*:", choices: ["E_i shifts toward E_C", "E_i shifts toward E_V", "E_i fixed at midgap", "Undefined"], answer: 1, explanation: "Larger hole mass (and N_V) pushes E_i slightly toward the valence band." },
    { q: "Law of mass action in a doped semiconductor (equilibrium):", choices: ["np is arbitrary", "np = n_i^2 still holds", "np = n_i", "n/p = n_i"], answer: 1, explanation: "It holds so long as the system is in thermal equilibrium." },
    { q: "Raising T in an intrinsic semiconductor generally:", choices: ["Decreases n_i", "Increases n_i strongly", "Leaves n_i unchanged", "Only changes N_C"], answer: 1, explanation: "Thermal excitation over Eg increases n_i rapidly." },

    // Doping basics
    { q: "A donor in Si contributes:", choices: ["A hole level near E_V", "An electron level just below E_C", "A deep level at midgap", "No carriers"], answer: 1, explanation: "Shallow donors add electrons; donor level lies slightly below E_C." },
    { q: "An acceptor in Si contributes:", choices: ["A level just above E_V", "A level just below E_C", "Only deep traps", "Conduction electrons"], answer: 0, explanation: "Shallow acceptors create hole states near E_V." },
    { q: "Hydrogenic donor binding energies are small because:", choices: ["ε_r large and m* reduced", "ε_r small and m* huge", "No screening", "Relativistic effects"], answer: 0, explanation: "E_B ∝ m*/ε_r^2; large ε_r and small m* reduce binding." },
    { q: "At room temperature, shallow donors/acceptors in Si/GaAs are typically:", choices: ["Un‑ionized", "Partially ionized only at high pressure", "Largely ionized", "Always neutral"], answer: 2, explanation: "Shallow levels (tens of meV) ionize at RT." },
    { q: "For n‑type material with N_D ≫ n_i and full ionization:", choices: ["n ≈ p ≈ n_i", "n ≈ N_D and p ≈ n_i^2 / N_D", "p ≈ N_D", "n ≈ N_V"], answer: 1, explanation: "Majority carriers set by donors; minority via mass action." },

    // Charge neutrality & regimes
    { q: "Charge neutrality in a compensated n‑type sample implies:", choices: ["n + N_A− = p + N_D+", "n + N_D+ = p + N_A−", "n = p always", "N_D+ = N_A− = 0"], answer: 1, explanation: "Total positive charge equals total negative charge." },
    { q: "Temperature regimes for donor‑doped Si (in order of increasing T):", choices: ["Intrinsic → Ionization → Exhaustion", "Ionization (freeze‑out) → Exhaustion (saturation) → Intrinsic", "Exhaustion → Intrinsic → Ionization", "Only intrinsic"], answer: 1, explanation: "Freeze‑out (low T), then saturation (≈N_D), then intrinsic (high T)." },
    { q: "In the intrinsic regime at high T:", choices: ["n ≈ N_D", "n ≈ p ≫ N_D", "p ≈ N_A", "n ≈ 0"], answer: 1, explanation: "Thermally generated carriers dominate: n≈p≈n_i ≫ dopants." },
    { q: "In the exhaustion (saturation) regime:", choices: ["Donors largely neutral", "Donors largely ionized and n ≈ N_D", "n ≈ n_i", "Holes dominate"], answer: 1, explanation: "Ionization complete; carrier density plateaus near N_D (ignoring compensation)." },
    { q: "In the ionization (freeze‑out) regime:", choices: ["All dopants ionized", "Few dopants ionized and n rises steeply with T", "Intrinsic carriers dominate", "p ≈ N_D"], answer: 1, explanation: "Activation from shallow levels controls n(T)." },

    // Mobility & scattering
    { q: "Carrier mobility μ relates to relaxation time τ and effective mass m* as:", choices: ["μ = eτ/m*", "μ = m*/eτ", "μ = τ/e m*", "μ independent of m*"], answer: 0, explanation: "μ = eτ/m* by definition." },
    { q: "Mean free path ℓ for electrons (thermal picture) is approximately:", choices: ["ℓ = v_th τ", "ℓ = μE τ", "ℓ = k_BT τ", "ℓ = 1/(nσ) only"], answer: 0, explanation: "Between momentum‑randomizing collisions, carriers travel v_th τ." },
    { q: "At high T, the dominant mobility limiter is typically:", choices: ["Ionized impurity scattering", "Lattice (phonon) scattering", "Boundary scattering only", "Magnetic scattering"], answer: 1, explanation: "Phonon population grows with T, reducing μ." },
    { q: "At low/intermediate T in doped semiconductors, μ is often limited by:", choices: ["Neutral impurities only", "Ionized impurity scattering", "Phonon scattering", "Photon drag"], answer: 1, explanation: "Charged centers dominate when phonons are sparse." },
    { q: "A common additivity rule for independent scattering mechanisms is:", choices: ["μ_total = μ_1 + μ_2", "1/μ_total ≈ 1/μ_1 + 1/μ_2", "τ_total = τ_1 τ_2", "ρ_total = ρ_1 ρ_2"], answer: 1, explanation: "Rates add: 1/τ_total ≈ Σ 1/τ_i ⇒ 1/μ_total ≈ Σ 1/μ_i." },

    // Trends with T and doping
    { q: "Electron mobility μ_n in Si vs T typically:", choices: ["Monotonic increase with T", "Non‑monotonic (rises at low T, falls at high T)", "Constant", "Only decreases"], answer: 1, explanation: "Competing impurity and phonon scattering make μ(T) non‑monotonic." },
    { q: "Increasing ionized impurity concentration generally:", choices: ["Raises μ", "Lowers μ via stronger Coulomb scattering", "Leaves μ unchanged", "Only affects n_i"], answer: 1, explanation: "More charged centers increase scattering and reduce μ." },
    { q: "In GaAs, which effective mass trend is typical?", choices: ["m_e* ≫ m_h*", "m_e* ≈ m_h*", "m_e* < m_h*", "No distinction"], answer: 2, explanation: "Electron effective mass is usually lighter than hole mass." },
    { q: "As T increases well above room temperature in intrinsic regime:", choices: ["n_i decreases", "n_i increases rapidly; mobility falls due to phonons", "n_i constant; μ rises", "μ independent of T"], answer: 1, explanation: "Thermal generation grows while phonon scattering increases." },
    { q: "For a fixed doping, conductivity σ = q(nμ_n + pμ_p) at high T in intrinsic regime:", choices: ["Decreases only", "May increase due to large n_i despite lower μ", "Unaffected", "Goes to zero"], answer: 1, explanation: "Carrier density increase can offset mobility loss." },

    // Fermi level movement with doping
    { q: "Donor doping shifts E_F:", choices: ["Toward E_V", "Toward E_C", "Leaves E_F at midgap", "Randomly"], answer: 1, explanation: "n‑type doping raises E_F toward the conduction band." },
    { q: "Acceptor doping shifts E_F:", choices: ["Toward E_C", "Toward E_V", "Toward vacuum level", "Has no effect"], answer: 1, explanation: "p‑type doping lowers E_F toward the valence band." },
    { q: "In compensated n‑type (both donors and acceptors present), majority carrier density is roughly:", choices: ["n ≈ N_D − N_A (if ≫ n_i)", "n ≈ N_A − N_D", "n ≈ n_i", "n ≈ 0"], answer: 0, explanation: "Net donors after compensation set majority carriers." },
    { q: "The minority carrier concentration in strongly n‑type material is:", choices: ["p ≈ n_i^2 / n", "p ≈ n", "p ≈ N_A", "Zero"], answer: 0, explanation: "From mass action: p = n_i^2 / n." },
    { q: "If N_D increases at fixed T (non‑degenerate):", choices: ["n decreases", "n increases roughly toward N_D", "p increases", "n_i changes"], answer: 1, explanation: "More donors increase electron concentration (until intrinsic regime dominates at high T)." },

    // Graphs & regimes recognition
    { q: "On a plot of n vs 1/T for donor‑doped Si, the low‑T slope relates to:", choices: ["Eg/2", "(E_D − E_C)/2", "E_V − E_F", "Work function"], answer: 1, explanation: "Freeze‑out regime activation reflects donor binding to the CB edge." },
    { q: "On the same plot, the high‑T slope in intrinsic regime relates to:", choices: ["Eg/2", "E_D", "E_A", "No slope"], answer: 0, explanation: "n_i ∝ e^{−Eg/(2kT)} gives slope −Eg/2 on ln scale vs 1/T." },
    { q: "In the exhaustion plateau (intermediate T), n is approximately:", choices: ["n_i", "N_D (assuming full ionization and weak compensation)", "Zero", "N_V"], answer: 1, explanation: "Carrier density saturates near ionized donor density." },
    { q: "Mobility μ(T) curves for Si and GaAs differ because:", choices: ["Different band gaps only", "Different effective masses and scattering strengths", "Only phonon energies differ", "They are identical"], answer: 1, explanation: "Material parameters (m*, phonon spectrum, impurities) set μ(T) trends." },
    { q: "At very low T in doped semiconductors, conductivity often:", choices: ["Becomes purely intrinsic", "Drops due to freeze‑out of carriers", "Rises due to more phonons", "Is unchanged"], answer: 1, explanation: "Ionization incomplete; carrier density falls." },

    // Drift, velocity, and definitions
    { q: "Drift velocity under a small electric field E is:", choices: ["v_d = μE", "v_d = v_th", "v_d = eE/m*", "Zero"], answer: 0, explanation: "By definition, v_d = μE (sign differs for e and h)." },
    { q: "Electron vs hole drift directions in an applied E:", choices: ["Same direction", "Opposite: electrons against E, holes along E", "Random", "Both against E"], answer: 1, explanation: "Electrons (−q) drift opposite to E; holes (+q) along E." },
    { q: "Thermal velocity v_th relates to:", choices: ["v_th ≈ √(3k_BT/m*)", "v_th = μE", "v_th = constant", "v_th = 0 at RT"], answer: 0, explanation: "Equipartition gives an estimate for random thermal speed." },
    { q: "Conductivity σ of a semiconductor is:", choices: ["σ = q n μ_n only", "σ = q p μ_p only", "σ = q(n μ_n + p μ_p)", "σ independent of carriers"], answer: 2, explanation: "Both electrons and holes contribute." },
    { q: "A negative Hall coefficient typically implies:", choices: ["Hole‑dominated transport", "Electron‑dominated transport", "No carriers", "Compensation always"], answer: 1, explanation: "Negative R_H indicates electron‑like majority carriers." }
  ]
};
