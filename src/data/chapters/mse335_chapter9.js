// src/data/chapters/mse335_chapter9.js
export default {
  id: "module9_magnetism_independent_spins",
  title: "Module 9: Magnetism – Independent Spins",
  questions: [
    // A) Basics & definitions
    { q: "In vacuum the relation between B and H is:", choices: ["B = μ0 H", "B = H/μ0", "B = μ0(H + M)", "B = μ0 M"], answer: 0, explanation: "In vacuum M=0, so B = μ0 H." },
    { q: "In a material, the magnetic induction is given by:", choices: ["B = μ0 H only", "B = μ0(H + M)", "B = H + M", "B = μ0 M only"], answer: 1, explanation: "Material response enters via magnetization M: B = μ0(H + M)." },
    { q: "Magnetic susceptibility χ is defined (differentially) as:", choices: ["χ = M/H always", "χ = ∂M/∂H", "χ = B/H", "χ = μ0 M"], answer: 1, explanation: "Rigorous definition: χ = ∂M/∂H." },
    { q: "Diamagnets typically have χ that is:", choices: ["Large positive (~10^5)", "Small negative (~−10⁻⁶ to −10⁻⁵)", "Zero", "Huge negative (≤ −1)"], answer: 1, explanation: "Weak, negative susceptibility due to orbital response." },
    { q: "Paramagnets typically have χ that is:", choices: ["Small positive (~10⁻⁴ to 10⁻⁵)", "Large negative", "Exactly zero", "Divergent at any T"], answer: 0, explanation: "Unpaired moments align weakly with H." },

    // B) Atomic sources & Hamiltonian pieces
    { q: "In diamagnetic ions the ground‑state quantum numbers are usually:", choices: ["S=0, L=0", "S≠0, L≠0", "S=1/2, L=1", "Undefined"], answer: 0, explanation: "Closed shells → no net spin or orbital moment." },
    { q: "The Bohr magneton μB equals:", choices: ["eħ/m0", "eħ/2m0", "ħ/2e", "μ0eħ/2m0"], answer: 1, explanation: "μB = eħ/(2m0) ≈ 5.79×10⁻⁵ eV/T." },
    { q: "In a uniform field B, minimal coupling replaces p by:", choices: ["p − eA", "p + eA", "p + qE", "p − qB"], answer: 1, explanation: "For electron charge −e (they write +eA in operator form convention used in slides)." },
    { q: "Spin interaction energy in field B (slide convention) is:", choices: ["Hspin = μB B S", "Hspin = 2 μB B S", "Hspin = −μB B S", "Hspin = g μN B I"], answer: 1, explanation: "Slides write Hspin = 2 μB B S (g≈2 for electron)." },
    { q: "The diamagnetic energy shift (Langevin diamagnetism) is proportional to:", choices: ["+B", "−B", "−B²⟨x² + y²⟩", "−B·M only"], answer: 2, explanation: "Second‑order orbital term → negative χ with B² dependence." },

    // C) Classification & signs
    { q: "Which class exhibits spontaneous magnetization below a critical temperature?", choices: ["Paramagnets", "Diamagnets", "Ferromagnets", "Superparamagnets only"], answer: 2, explanation: "Ferromagnets have spontaneous order; χ can be very large." },
    { q: "A positive susceptibility that follows Curie behavior at high T indicates:", choices: ["Diamagnetism", "Paramagnetism", "Perfect diamagnetism", "Antiferromagnetism"], answer: 1, explanation: "Independent localized moments → Curie law." },
    { q: "The order of magnitude of χ for ferromagnets (low fields) can be:", choices: ["~10⁵", "~10⁻⁶", "~1", "~10⁻³ only"], answer: 0, explanation: "Very large near low fields (before saturation)." },
    { q: "Diamagnetic response originates from:", choices: ["Spin alignment", "Orbital current opposing field", "Exchange interactions", "Crystal defects"], answer: 1, explanation: "Field‑induced orbital motion yields Lenz‑law‑like opposition." },
    { q: "Paramagnetism in isolated ions primarily originates from:", choices: ["Paired spins", "Unpaired spins and/or orbital moments", "Lattice phonons", "Band electrons only"], answer: 1, explanation: "Unpaired electrons contribute magnetic moments." },

    // D) Curie law & two‑level (spin‑½) model
    { q: "For a spin‑½ paramagnet with energies ±μBB, the population ratio N2/N1 is:", choices: ["exp(−μBB/kBT)", "exp(+2μBB/kBT)", "exp(+2kBT/μBB)", "tanh(μBB/kBT)"], answer: 1, explanation: "Excited/ground ratio ∝ exp(+2μBB/kBT) with energies ±μBB." },
    { q: "Magnetization for spin‑½ moments is M = N μB tanh(μB B / kBT). At high T (small x):", choices: ["M ≈ N μB", "M ≈ N μB x", "M ≈ 0", "M diverges"], answer: 1, explanation: "tanh x ≈ x, giving Curie behavior." },
    { q: "Curie’s law for paramagnets predicts:", choices: ["χ ∝ 1/T", "χ ∝ T", "χ constant", "χ ∝ 1/T²"], answer: 0, explanation: "Independent spins: χ = C/T." },
    { q: "In the low‑T/high‑B limit for independent spins, M tends to:", choices: ["Zero", "Linear in B", "A saturation value", "Oscillatory"], answer: 2, explanation: "Moments align → saturation magnetization." },
    { q: "The Curie constant C for N non‑interacting identical moments is proportional to:", choices: ["N μB²", "N μB", "1/(N μB²)", "Independent of N"], answer: 0, explanation: "C ∝ μ0 N μ_eff² / (3kB)." },

    // E) Landé g, J, and Brillouin
    { q: "The Landé g‑factor gJ depends on:", choices: ["Only spin S", "Only orbital L", "L and S combined into J", "Neither L nor S"], answer: 2, explanation: "gJ = 1 + [J(J+1)+S(S+1)−L(L+1)]/(2J(J+1))." },
    { q: "For a pure spin‑½ (L=0, S=½), gJ is:", choices: ["1", "2", "3", "0"], answer: 1, explanation: "Spin‑only moment with g≈2." },
    { q: "The Brillouin function BJ(α) describes:", choices: ["Band magnetization", "Magnetization of localized J‑multiplets", "Diamagnetic screening", "Exchange splitting only"], answer: 1, explanation: "Gives M(H,T) for independent local moments with total J." },
    { q: "In the limit α → 0, the Brillouin function behaves as:", choices: ["BJ ≈ α/3 J(J+1)", "BJ ≈ α", "BJ ≈ 0", "BJ ≈ 1/α"], answer: 0, explanation: "Linear response → Curie law with J(J+1) factor." },
    { q: "The effective paramagnetic moment (in Bohr magnetons) is p_eff =:", choices: ["gJ", "gJ √[J(J+1)]", "√J", "J+S"], answer: 1, explanation: "μ_eff/μB = gJ √(J(J+1))." },

    // F) Hund’s rules & spectroscopic notation
    { q: "Hund’s rules (qualitatively) select:", choices: ["Maximize S, then L, then J depending on filling", "Minimize S and L", "Only maximize L", "Only maximize J"], answer: 0, explanation: "Hund’s rules: maximize S, then L; J depends on shell filling." },
    { q: "Spectroscopic term symbol 2S+1LJ represents:", choices: ["Only S", "Only L", "Spin multiplicity, orbital letter, and J", "Crystal field only"], answer: 2, explanation: "Example: ⁶S₅/₂ with multiplicity 2S+1, letter for L, and subscript J." },
    { q: "For 4f ions (lanthanides), orbital angular momentum:", choices: ["Is often quenched strongly", "Is largely retained (weaker crystal‑field quenching)", "Never contributes", "Is negative"], answer: 1, explanation: "4f are shielded → behave close to free‑ion values." },
    { q: "For 3d ions (iron group) in crystals, L is often:", choices: ["Unquenched", "Quenched by crystal fields", "Undefined", "Doubled"], answer: 1, explanation: "Crystal fields mix mL and quench orbital contribution." },
    { q: "For 3d ions with L quenched, the appropriate J to use is:", choices: ["J = L − S", "J = S", "J = L + S", "J = 0 always"], answer: 1, explanation: "If L≈0, then J≈S; spin‑only moments fit experiments." },

    // G) Langevin diamagnetism details
    { q: "Langevin diamagnetic susceptibility has sign:", choices: ["Positive", "Negative", "Zero", "Undefined"], answer: 1, explanation: "Diamagnetic response opposes applied field." },
    { q: "The magnitude of diamagnetic χ compared with paramagnetic χ is typically:", choices: ["Much larger", "Similar", "Much smaller", "Always identical"], answer: 2, explanation: "Diamagnetic effects are usually tiny compared to paramagnetism." },
    { q: "Perturbation theory is used for magnetic energy shifts because:", choices: ["Fields are huge", "Energy corrections are small (μBB ≪ eV)", "States are degenerate only", "χ is zero otherwise"], answer: 1, explanation: "Zeeman energies are tiny vs typical atomic energies." },
    { q: "The diamagnetic shift involves expectation values of:", choices: ["⟨x² + y²⟩", "⟨z⟩ only", "⟨S_z⟩ only", "⟨L_z⟩ only"], answer: 0, explanation: "Orbital term contains B²(x²+y²)." },
    { q: "Diamagnetism is present in:", choices: ["Only insulators", "All materials (often masked by other contributions)", "Only paramagnets", "Only ferromagnets"], answer: 1, explanation: "It’s a universal, generally weak contribution." },

    // H) Paramagnets: Curie & Curie–Weiss forms
    { q: "Curie’s law can be written χ = C/T. The Curie constant C scales with:", choices: ["μ_eff²", "μ_eff", "1/μ_eff", "Independent of μ_eff"], answer: 0, explanation: "C ∝ μ0 N μ_eff² /(3kB)." },
    { q: "A Curie–Weiss law χ = C/(T − Θ) indicates:", choices: ["Independent spins only", "Mean‑field interactions with Weiss temperature Θ", "Diamagnetism", "Superconductivity"], answer: 1, explanation: "Θ≠0 signals net ferro/antiferromagnetic correlations." },
    { q: "For independent spin‑½ ions, μ_eff in μB is:", choices: ["√3", "√(3/4)", "√(15/4)", "1"], answer: 0, explanation: "μ_eff = g√(S(S+1)) with g≈2, S=1/2 → √3 μB." },
    { q: "At high T, the Brillouin function reduces magnetization to:", choices: ["M ∝ 1/T", "M ∝ T", "M constant", "M diverging"], answer: 0, explanation: "Linear response → Curie behavior." },
    { q: "Saturation magnetization for N spins with total J is:", choices: ["M_s = N gJ J μB", "M_s = N μB", "M_s = N gJ μB", "M_s = 0"], answer: 0, explanation: "All moments aligned along field: MJ = J." },

    // I) 3d vs 4f trends, crystal field
    { q: "Why do 3d ions often show spin‑only moments in solids?", choices: ["Strong spin–orbit coupling only", "Orbital quenching by crystal fields", "No crystal fields", "Absence of spin"], answer: 1, explanation: "Crystal fields mix mL → L contribution suppressed." },
    { q: "Why do 4f ions often follow free‑ion gJ values?", choices: ["4f are outermost", "4f are shielded (weaker CF), orbital contribution remains", "No spin–orbit coupling", "Always diamagnetic"], answer: 1, explanation: "Shielding by 5s,5p reduces CF mixing." },
    { q: "Effective moment trends agree with spin‑only predictions best for:", choices: ["Lanthanides", "3d transition ions in crystals", "Noble gases", "Metals with no moments"], answer: 1, explanation: "Spin‑only fits work well for quenched‑L 3d ions." },
    { q: "Lanthanides often show good agreement between μ_eff (exp) and:", choices: ["Spin‑only values", "Free‑ion gJ√(J(J+1))", "Zero", "Diamagnetic formula"], answer: 1, explanation: "4f behave close to free‑ion due to shielding." },
    { q: "Crystal‑field effects are stronger for:", choices: ["4f than 3d", "3d than 4f", "Equal for both", "Neither"], answer: 1, explanation: "3d orbitals are more extended → stronger CF." },

    // J) Odds & ends, sign conventions, units
    { q: "Units: in SI, B and H are related by:", choices: ["B (T) = μ0 H (A/m) in vacuum", "B (A/m) = μ0 H (T)", "B (Wb) = μ0 H (T)", "B (T) = H (A/m)"], answer: 0, explanation: "B in Tesla; H in A/m; μ0 links them." },
    { q: "For ideal diamagnetism (superconductor Meissner), χ is approximately:", choices: ["+1", "0", "−1 (dimensionless, cgs‑like)", "−10⁻⁶"], answer: 2, explanation: "Perfect flux expulsion corresponds to χ ≈ −1 in cgs‑style units." },
    { q: "In paramagnets at very low T and high B, χ tends to:", choices: ["Zero (due to saturation)", "Constant 1/T", "Diverge", "Negative"], answer: 0, explanation: "Once saturated, dM/dH is small → small χ." },
    { q: "The Zeeman splitting scale μB B at B = 1 T is roughly:", choices: ["~60 μeV", "~6 eV", "~0.6 meV", "~60 meV"], answer: 0, explanation: "μB B ≈ 5.8×10⁻⁵ eV ≈ 58 μeV." },
    { q: "Which statement is true for independent‑spin paramagnets?", choices: ["M is linear in H at all fields", "M follows Brillouin function and saturates at high H/T", "χ is negative", "There is spontaneous magnetization"], answer: 1, explanation: "Independent localized moments → Brillouin behavior with saturation." }
  ]
};
