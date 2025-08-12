// src/data/chapters/mse335_chapter5.js
export default {
  id: "module5",
  title: "Module 5: Energy Band Structure",
  questions: [
    // Fundamentals & Bloch theorem
    { q: "Bloch’s theorem states that electron states in a periodic potential can be written as:", choices: ["Localized atomic orbitals only", "Plane waves times a periodic function u_k(r)", "Pure plane waves e^{ik·r}", "Delta functions at lattice sites"], answer: 1, explanation: "ψ_k(r)=u_k(r)e^{ik·r}, with u_k having lattice periodicity." },
    { q: "The first Brillouin zone (BZ) is:", choices: ["A Wigner–Seitz cell in reciprocal space", "A supercell in real space", "Always a cube", "The set of allowed k with |k|<k_F"], answer: 0, explanation: "It’s the WS cell of the reciprocal lattice; unique primitive region in k‑space." },
    { q: "Energy gaps form at zone boundaries primarily due to:", choices: ["Electron–electron interactions only", "Bragg reflection from the periodic lattice", "Phonon freeze‑out", "External fields"], answer: 1, explanation: "Backscattering by G‑vectors mixes k and k+G, opening gaps." },
    { q: "The crystal momentum k is conserved up to:", choices: ["Any vector", "A reciprocal lattice vector G", "Only zero", "Real‑space lattice vector a"], answer: 1, explanation: "k is defined modulo G in a periodic solid." },
    { q: "Band index n in E_n(k) labels:", choices: ["Atomic number", "Different energy bands at the same k", "Spin only", "Valley index only"], answer: 1, explanation: "Each k can host multiple bands distinguished by n." },

    // Nearly-free & tight-binding views
    { q: "Nearly‑free electron model treats electrons as:", choices: ["Bound to atoms strongly", "Free electrons weakly perturbed by periodic potential", "Completely localized states", "Classical particles only"], answer: 1, explanation: "Small periodic potential opens gaps near zone boundaries." },
    { q: "Tight‑binding model emphasizes:", choices: ["Weak overlap of atomic orbitals", "Free plane waves", "Only s‑p mixing in vacuum", "No hopping between sites"], answer: 0, explanation: "Bands arise from hopping between nearby atomic orbitals." },
    { q: "Bandwidth in tight‑binding is mainly set by:", choices: ["On‑site energy only", "Hopping integrals (overlap)", "Debye temperature", "Sample size"], answer: 1, explanation: "Larger hopping → wider bands." },
    { q: "At the edge of the BZ, degenerate free‑electron states k and k+G:", choices: ["Remain uncoupled", "Are mixed by the periodic potential", "Are forbidden", "Become classical"], answer: 1, explanation: "Mixing lifts degeneracy and opens a gap." },
    { q: "In a weak periodic potential, the largest deviations from free‑electron E(k) occur:", choices: ["Near Γ only", "Near zone boundaries", "Far outside the BZ", "At random k"], answer: 1, explanation: "Bragg planes cause strong modifications." },

    // Effective mass & curvature
    { q: "Effective mass tensor relates to band curvature via:", choices: ["m* ∝ dE/dk", "1/m* ∝ d²E/dk²", "m* independent of E(k)", "m* = m_e always"], answer: 1, explanation: "In 1D, 1/m* = (1/ħ²) d²E/dk²; generalized tensor in 3D." },
    { q: "Negative curvature (d²E/dk²<0) implies:", choices: ["Positive effective mass", "Negative effective mass", "Infinite mass", "No carriers"], answer: 1, explanation: "Valence‑band tops have negative curvature → hole‑like response." },
    { q: "Holes behave as:", choices: ["Electrons with negative charge", "Positive charge carriers with positive effective mass", "Neutral quasiparticles", "Phonons"], answer: 1, explanation: "Missing electrons near band tops act like positive carriers." },
    { q: "Near a parabolic minimum E≈E_c+ħ²k²/2m* the velocity is:", choices: ["v=ħk/m*", "v=E/k", "v=const.", "v=0"], answer: 0, explanation: "Group velocity v= (1/ħ)∇_kE = ħk/m*." },
    { q: "Anisotropic bands lead to:", choices: ["Scalar m* only", "Effective mass tensor and ellipsoidal constant‑E surfaces", "No transport", "Zero DOS"], answer: 1, explanation: "Different curvature along axes → tensor mass & ellipsoids." },

    // Direct vs indirect semiconductors
    { q: "A direct‑gap semiconductor has:", choices: ["Conduction minimum and valence maximum at the same k", "Valence maximum at k≠ conduction minimum", "No band gap", "Only indirect optical transitions"], answer: 0, explanation: "Direct gap at same k (often Γ) enables vertical optical transitions." },
    { q: "Indirect gap transitions typically require:", choices: ["A phonon to conserve momentum", "Only photons", "No momentum conservation", "Magnons"], answer: 0, explanation: "Photon carries negligible k; phonon supplies the momentum change." },
    { q: "Optical absorption near the band edge is generally stronger in:", choices: ["Indirect semiconductors", "Metals", "Direct semiconductors", "Insulators only"], answer: 2, explanation: "Direct vertical transitions have larger matrix elements." },
    { q: "Photoluminescence efficiency is often higher for:", choices: ["Indirect semiconductors", "Direct semiconductors", "All equal", "Metals"], answer: 1, explanation: "Radiative recombination is easier without phonon assistance." },
    { q: "An example trend: Si vs GaAs:", choices: ["Si is direct, GaAs is indirect", "Both direct", "Si is indirect, GaAs is direct", "Both indirect"], answer: 2, explanation: "Si has an indirect gap; GaAs has a direct gap at Γ." },

    // Density of states (DOS) & dimensionality
    { q: "3D free‑electron DOS g(E) scales as:", choices: ["∝ E^{-1/2}", "∝ E^{1/2}", "Constant", "∝ E"], answer: 1, explanation: "In 3D, g(E) ∝ √E for parabolic bands." },
    { q: "2D DOS for a parabolic band is:", choices: ["Constant with E", "∝ √E", "∝ E^{-1/2}", "∝ E"], answer: 0, explanation: "2D parabolic bands yield step‑like constant DOS per subband." },
    { q: "1D DOS for a parabolic band shows:", choices: ["Square‑root rise", "Constant behavior", "Divergent van Hove singularities ∝ 1/√(E−E_n)", "No features"], answer: 2, explanation: "1D subband edges produce divergences." },
    { q: "Van Hove singularities arise from:", choices: ["Zeros of wavefunctions", "Extrema/saddle points in E(k)", "Disorder only", "Magnetic fields"], answer: 1, explanation: "Critical points in band structure generate DOS anomalies." },
    { q: "Filling the valence band completely with an empty conduction band yields:", choices: ["Metal", "Semiconductor/insulator depending on gap", "Superconductor", "Semimetal only"], answer: 1, explanation: "A finite gap separates filled/empty states." },

    // Bragg planes & gaps
    { q: "At k where ε_k=ε_{k+G} (free electron), adding a periodic potential causes:", choices: ["No change", "Level repulsion and a band gap 2|V_G|", "Localization only", "Elastic scattering only"], answer: 1, explanation: "Degenerate perturbation opens a gap proportional to Fourier component V_G." },
    { q: "Zone folding maps states outside the 1st BZ to:", choices: ["Higher BZs only", "Equivalent k inside the 1st BZ", "Real space", "No states"], answer: 1, explanation: "k is defined modulo G; states fold back into the first zone." },
    { q: "Tight‑binding band for a 1D chain E(k)=E₀−2t cos(ka) has bandwidth:", choices: ["t", "2t", "4t", "πt"], answer: 2, explanation: "Max–min = (E₀+2t)−(E₀−2t)=4t." },
    { q: "In the 1D tight‑binding cosine band, the effective mass at k≈0 is:", choices: ["m* ∝ 1/t", "m* ∝ t", "Independent of t", "Negative always"], answer: 0, explanation: "Curvature ∝ t → m* ∝ 1/t (larger t gives lighter mass)." },
    { q: "Bandwidth generally increases when:", choices: ["Overlap/hopping increases", "Lattice constant increases with fixed overlap", "Orbitals localize more", "Potential becomes infinitely strong"], answer: 0, explanation: "More hopping broadens bands." },

    // Fermi surface & metals/semimetals
    { q: "A metal has:", choices: ["Fermi level within a band", "A full band and empty band separated by a large gap", "No carriers at any T", "Always a direct gap"], answer: 0, explanation: "Partially filled band → Fermi surface → metallic conduction." },
    { q: "A semimetal features:", choices: ["Wide gap", "Touching/overlapping bands with small carrier pockets", "No density of states", "Strong localization"], answer: 1, explanation: "Small overlap yields low electron and hole densities." },
    { q: "Band structure along high‑symmetry k‑paths (e.g., Γ→X) is useful because:", choices: ["Shows real‑space paths", "Highlights extrema and gaps along key directions", "Eliminates anisotropy", "Gives DOS directly"], answer: 1, explanation: "Critical features often occur at high‑symmetry points." },
    { q: "A flat band segment implies:", choices: ["Large group velocity", "Small group velocity and heavy m*", "No states", "Superconductivity"], answer: 1, explanation: "v_g= (1/ħ)∇_kE is small; curvature small/zero → heavy carriers." },
    { q: "Electron pockets form near:", choices: ["Band maxima", "Band minima", "Any k", "Only at Γ"], answer: 1, explanation: "Minima in conduction bands create electron pockets." },

    // Symmetry, degeneracy, spin–orbit
    { q: "In crystals with inversion + time‑reversal symmetry and negligible SOC, bands are:", choices: ["Non‑degenerate", "At least spin‑degenerate (Kramers)", "Always fourfold", "Completely flat"], answer: 1, explanation: "Spin degeneracy persists without SOC/magnetism." },
    { q: "Strong spin–orbit coupling can cause:", choices: ["No changes", "Band splitting and Rashba‑like effects (if inversion broken)", "Only gap closing", "Only phonon changes"], answer: 1, explanation: "SOC lifts spin degeneracy under broken inversion." },
    { q: "Degeneracy at Dirac points requires:", choices: ["Symmetry protection", "Strong disorder", "High temperature", "No periodicity"], answer: 0, explanation: "Symmetries protect linear crossings; broken symmetry gaps them." },
    { q: "Folding a larger real‑space cell (e.g., due to order) does what to bands?", choices: ["Expands BZ and reduces bands", "Reduces BZ and increases number of bands", "Has no effect", "Eliminates gaps"], answer: 1, explanation: "Superlattice halves BZ and yields more subbands." },
    { q: "Crystal potential strength increasing generally:", choices: ["Narrows bands and enlarges gaps", "Widens bands and closes gaps", "Only shifts Fermi level", "Removes periodicity"], answer: 0, explanation: "Stronger periodic modulation localizes electrons more." },

    // k·p, parabolic approximations, transport links
    { q: "Near an extremum, bands are often approximated as:", choices: ["Linear always", "Parabolic with an effective mass", "Cubic in k", "Constant"], answer: 1, explanation: "k·p theory justifies parabolic expansions near extrema." },
    { q: "Mobility generally increases when:", choices: ["Effective mass decreases and scattering weakens", "m* increases", "Scattering increases", "Gap increases"], answer: 0, explanation: "μ ∝ τ/m* for a given scattering time." },
    { q: "Anisotropic effective mass implies conductivity:", choices: ["Is isotropic", "May be anisotropic along crystal axes", "Is zero", "Is quantized"], answer: 1, explanation: "Transport follows mass tensor and scattering anisotropy." },
    { q: "At the top of the valence band, carriers are best treated as:", choices: ["Electrons with negative mass", "Holes with positive charge", "Photons", "Ions"], answer: 1, explanation: "Holes simplify transport description." },
    { q: "Fermi velocity at E_F in a parabolic band is:", choices: ["v_F = ħk_F/m*", "v_F = m*/ħk_F", "v_F = c", "v_F independent of m*"], answer: 0, explanation: "Comes from v = ħk/m* evaluated at k_F." },

    // Concept checks & consequences
    { q: "If a band is completely flat (idealized), its carriers would have:", choices: ["Infinite velocity", "Zero group velocity and localized character", "Finite large velocity", "No quantum numbers"], answer: 1, explanation: "Flat dispersions imply v_g≈0 and strong localization tendencies." },
    { q: "A larger lattice constant (weaker overlap) tends to make:", choices: ["Wider bands", "Narrower bands", "No change", "Only spin splitting"], answer: 1, explanation: "Reduced overlap narrows bandwidths." },
    { q: "Narrow‑band materials are more prone to:", choices: ["Strong correlation/Mott physics (beyond band theory)", "Perfect metallicity", "No magnetism", "Zero DOS"], answer: 0, explanation: "Small bandwidth enhances correlation effects (U/W large)." },
    { q: "Filling a band exactly (no overlap) typically yields:", choices: ["Metal", "Insulator/semiconductor", "Semimetal", "Superconductor"], answer: 1, explanation: "No partially filled states → no low‑energy carriers." },
    { q: "The number of states in one band per unit cell (including spin) is:", choices: ["Infinite", "Two per k‑point only", "2 per unit cell per band when fully counted over BZ", "Zero"], answer: 2, explanation: "Each band holds 2 electrons per unit cell (spin‑½) when completely filled." }
  ]
};
