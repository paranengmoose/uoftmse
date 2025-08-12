// src/data/chapters/mse335_chapter4.js
export default {
  id: "module4",
  title: "Module 4: Free Electron Gas & Energy Transport",
  questions: [
    // Models & statistics
    { q: "The Drude model treats conduction electrons as:", choices: ["A classical gas with randomizing collisions", "Bound harmonic oscillators", "Localized polarons", "A perfect quantum fluid"], answer: 0, explanation: "Drude is classical: free particles with relaxation time τ." },
    { q: "Sommerfeld’s free electron model improves Drude by:", choices: ["Including electron–phonon coupling explicitly", "Using Fermi–Dirac statistics and quantum states", "Adding lattice periodic potential exactly", "Forbidding scattering"], answer: 1, explanation: "It quantizes states in k‑space and uses Fermi–Dirac occupancy." },
    { q: "At T = 0 K, electrons occupy states up to:", choices: ["Boltzmann energy", "Debye energy", "Fermi energy E_F", "Work function"], answer: 2, explanation: "All states with E ≤ E_F are filled at 0 K." },
    { q: "The Fermi–Dirac distribution is:", choices: ["f(E)=1/(e^{(E-μ)/k_BT}+1)", "f(E)=e^{-E/k_BT}", "f(E)=1/(e^{(E-μ)/k_BT}-1)", "f(E)=δ(E-μ)"], answer: 0, explanation: "Applies to fermions with chemical potential μ≈E_F at low T." },
    { q: "In 3D, the electronic density of states g(E) near E_F varies roughly as:", choices: ["√E", "Constant", "1/√E", "E²"], answer: 0, explanation: "Free‑electron 3D DOS ∝ √E; evaluated at E_F for many properties." },

    // Conductivity, mobility, relaxation
    { q: "Drude electrical conductivity is:", choices: ["σ = ne²τ/m", "σ = n e τ/m", "σ = e²τ/(nm)", "σ = 1/ρ₀"], answer: 0, explanation: "n: carrier density; e: charge; τ: relaxation time; m: electron mass." },
    { q: "Mobility μ is related to τ by:", choices: ["μ = eτ/m", "μ = m/(eτ)", "μ = ne²τ/m", "μ = v_F τ"], answer: 0, explanation: "μ links drift velocity to field: v_d = μE." },
    { q: "Mean free path ℓ is:", choices: ["ℓ = v_F τ", "ℓ = μE/τ", "ℓ = k_BT τ", "ℓ = 1/(nσ_scatt) only"], answer: 0, explanation: "In metals, take velocity at the Fermi surface: v_F τ." },
    { q: "Resistivity temperature dependence in simple metals at high T is often:", choices: ["ρ ∝ 1/T", "ρ ∝ T", "ρ ∝ T² always", "ρ independent of T"], answer: 1, explanation: "Acoustic phonon scattering gives roughly linear‑T behavior above Θ_D/2." },
    { q: "Impurity (static) scattering contributes a resistivity that is:", choices: ["∝ T", "∝ 1/T", "Temperature‑independent (residual ρ₀)", "Oscillatory in T"], answer: 2, explanation: "Defect/impurity scattering is elastic and weakly T‑dependent." },

    // Matthiessen & Hall
    { q: "Matthiessen’s rule states:", choices: ["Conductivities add", "Resistivities add from independent mechanisms", "Mobilities add", "Scattering rates subtract"], answer: 1, explanation: "ρ_total ≈ ρ_phonon + ρ_impurity + … (approximate)." },
    { q: "For a single free‑electron band, the Hall coefficient R_H is:", choices: ["+1/(ne)", "−1/(ne)", "0", "Depends only on τ"], answer: 1, explanation: "Sign indicates electron carriers; magnitude is −1/(ne)." },
    { q: "Electron drift velocity v_d under field E is:", choices: ["v_d = μE", "v_d = eE/m only", "v_d = v_F", "v_d = E/μ"], answer: 0, explanation: "Drift is proportional to mobility and field." },
    { q: "A negative Hall coefficient typically implies:", choices: ["Hole conduction", "Mixed conduction only", "Electron‑dominant conduction", "Insulating sample"], answer: 2, explanation: "Negative R_H is characteristic of electron carriers." },
    { q: "In a compensated metal with electron and hole pockets, R_H:", choices: ["Must be −1/(ne)", "Must be +1/(pe)", "Can deviate strongly from ±1/(ne) form", "Is always zero"], answer: 2, explanation: "Multi‑band effects alter magnitude and even sign." },

    // Thermal transport (electrons) & Wiedemann–Franz
    { q: "Wiedemann–Franz law links:", choices: ["σ and Seebeck coefficient", "Thermal and electrical conductivities", "Mobility and Hall coefficient", "DOS and E_F"], answer: 1, explanation: "k_e / (σT) ≈ constant for simple metals." },
    { q: "The Lorenz number L₀ (degenerate free electrons) is about:", choices: ["2.44×10⁻⁸ WΩK⁻²", "1.00×10⁻⁶ WΩK⁻²", "2.44×10⁻⁶ WΩK⁻²", "2.44×10⁻¹⁰ WΩK⁻²"], answer: 0, explanation: "L₀ = (π²/3)(k_B/e)² ≈ 2.44×10⁻⁸ WΩK⁻²." },
    { q: "In metals at room T, dominant heat carriers are often:", choices: ["Phonons only", "Electrons", "Photons", "Magnons"], answer: 1, explanation: "Electronic contribution usually dominates k in good metals." },
    { q: "Electron thermal conductivity in kinetic theory is:", choices: ["k_e ≈ (1/3) C_e v_F ℓ", "k_e ≈ σ/τ", "k_e ≈ n e v_F", "k_e ≈ C_lattice T"], answer: 0, explanation: "Analogous to phonons: capacity × speed × mean free path." },
    { q: "Seebeck coefficient sign in n‑type metals is typically:", choices: ["Positive", "Zero", "Negative", "Undefined"], answer: 2, explanation: "Electron‑like carriers yield negative thermopower (often small)." },

    // Electronic heat capacity & degeneracy
    { q: "Electronic specific heat in degenerate metals is:", choices: ["∝ T³", "∝ T²", "∝ T", "Constant"], answer: 2, explanation: "C_e = γT from excitations near E_F." },
    { q: "The smallness of C_e relative to 3Nk_B at room T arises because:", choices: ["Few electrons exist", "Only a shell ~k_BT around E_F is thermally active", "Phonons suppress electrons", "Electrons are localized"], answer: 1, explanation: "Pauli blocking limits excitations to near E_F." },
    { q: "Fermi velocity v_F in simple metals is typically:", choices: ["~10⁴–10⁵ m/s", "~10⁶ m/s", "~10² m/s", "~c"], answer: 1, explanation: "v_F is of order 10⁶ m/s in many metals." },
    { q: "Degeneracy condition for a metal is usually:", choices: ["k_BT ≪ E_F", "k_BT ≫ E_F", "k_BT ≈ E_F", "No condition needed"], answer: 0, explanation: "Metals remain highly degenerate up to very high T." },
    { q: "The chemical potential μ(T) of a metal at low T:", choices: ["Rises linearly with T", "Drops to midgap", "Stays near E_F with small T‑corrections", "Becomes undefined"], answer: 2, explanation: "Quantum statistics pin μ close to E_F for k_BT ≪ E_F." },

    // Scattering mechanisms
    { q: "Electron–phonon scattering rate at high T behaves roughly as:", choices: ["∝ T", "∝ 1/T", "Independent of T", "∝ T² always"], answer: 0, explanation: "More phonons → more scattering events." },
    { q: "Electron–impurity scattering rate is usually:", choices: ["Strongly ∝ T", "Weakly T‑dependent (elastic)", "Zero", "Oscillatory with T"], answer: 1, explanation: "Elastic off static disorder; gives residual ρ₀." },
    { q: "At very low T in pure metals, resistivity often varies as:", choices: ["ρ ∝ T", "ρ ≈ ρ₀ + AT² (electron–electron)", "ρ ∝ T³", "ρ ∝ 1/T"], answer: 1, explanation: "Fermi‑liquid e–e scattering yields T² corrections." },
    { q: "The Debye temperature Θ_D relates to:", choices: ["Saturation magnetization", "Phonon spectrum cutoff", "Fermi surface area", "Work function"], answer: 1, explanation: "Sets phonon energy scale; affects e–ph T‑dependence." },
    { q: "Saturation of resistivity at very high T is sometimes observed because:", choices: ["Phonon population vanishes", "Mean free path approaches interatomic spacing", "Electrons localize completely", "Hall effect disappears"], answer: 1, explanation: "Ioffe–Regel limit restricts ℓ from shrinking indefinitely." },

    // Hall, magnetotransport
    { q: "Cyclotron frequency for a free electron (SI) is:", choices: ["ω_c = eB/m", "ω_c = eE/m", "ω_c = eB/ħ", "ω_c = v_F / B"], answer: 0, explanation: "Lorentz force in B gives circular motion with ω_c = eB/m." },
    { q: "Magnetoresistance in simple metals arises mainly from:", choices: ["Zeeman splitting", "Curved carrier trajectories changing scattering", "Band gap opening", "Spin–orbit only"], answer: 1, explanation: "Bends paths, modifying effective transport." },
    { q: "In a single‑band Drude metal, the sign of the Seebeck coefficient usually matches:", choices: ["Sign of Hall coefficient", "Crystal symmetry", "Lorenz number", "Magnetization"], answer: 0, explanation: "Both reflect dominant carrier type (n vs p)." },
    { q: "Quantum oscillations (Shubnikov–de Haas) probe:", choices: ["Phonon dispersion", "Fermi surface extremal areas", "Work function only", "Debye temperature"], answer: 1, explanation: "Landau quantization yields periodicity vs 1/B that maps FS areas." },
    { q: "In Drude, AC conductivity σ(ω) is:", choices: ["σ₀/(1+iωτ)", "σ₀(1+iωτ)", "iωε₀", "Independent of ω"], answer: 0, explanation: "Relaxation‑time form gives a Lorentzian response vs frequency." },

    // Free‑electron gas energetics
    { q: "Total electron energy at T=0 for a free 3D gas scales as:", choices: ["∝ N E_F/2", "∝ N E_F (3/5)", "∝ N k_B T", "∝ N²"], answer: 1, explanation: "Average energy per electron is 3E_F/5 at T=0." },
    { q: "Pressure of a T=0 free electron gas (degeneracy pressure) is:", choices: ["Zero", "Finite due to Pauli principle", "Infinite", "Only at high T"], answer: 1, explanation: "Fermi statistics produce pressure even at 0 K." },
    { q: "E_F increases when carrier density n:", choices: ["Decreases", "Stays constant", "Increases", "Is replaced by holes"], answer: 2, explanation: "E_F ∝ n^{2/3} in 3D free‑electron gas." },
    { q: "Work function is:", choices: ["Energy to remove an electron from vacuum to metal", "Band gap", "Fermi energy from band bottom", "Magnetic energy"], answer: 0, explanation: "Minimum energy to extract an electron to vacuum level." },
    { q: "Pauli paramagnetism of a free electron gas arises from:", choices: ["Orbital currents only", "Spin alignment in a field", "Phonon coupling", "Coulomb blockade"], answer: 1, explanation: "Field polarizes spins near E_F, giving weak paramagnetism." },

    // Lattice vs electrons (who carries what)
    { q: "In good metals at room T, which typically dominates electrical conductivity?", choices: ["Phonons", "Electrons", "Ions", "Photons"], answer: 1, explanation: "Charge is carried by electrons." },
    { q: "In good insulators, heat at room T is mainly carried by:", choices: ["Electrons", "Phonons", "Photons", "Ions in drift"], answer: 1, explanation: "Lattice vibrations dominate thermal transport in insulators." },
    { q: "The Mott formula connects the Seebeck coefficient with:", choices: ["Derivative of conductivity vs energy at E_F", "Hall coefficient directly", "Lorenz number", "Phonon velocity"], answer: 0, explanation: "S ∝ (π²k_B²T/3e) d ln σ(E)/dE|_{E_F} for degenerate conductors." },
    { q: "In a simple metal, increasing impurity concentration generally:", choices: ["Raises mobility", "Lowers mobility", "Leaves mobility unchanged", "Flips Hall sign necessarily"], answer: 1, explanation: "More elastic scattering reduces τ and μ." },
    { q: "The relaxation time approximation assumes:", choices: ["Instantaneous thermal equilibrium", "A single average time between momentum‑randomizing events", "No scattering", "Only electron–electron scattering"], answer: 1, explanation: "Encapsulates scattering complexity into τ." },

    // Practical numbers & trends
    { q: "Typical room‑temperature resistivity of a good metal (order of magnitude):", choices: ["10⁻² Ω·m", "10⁻⁸–10⁻⁷ Ω·m", "1 Ω·m", "10³ Ω·m"], answer: 1, explanation: "Cu, Ag are ~10⁻⁸ Ω·m at RT." },
    { q: "For a simple metal, raising T from 100 K to 300 K usually makes σ:", choices: ["Increase ~3×", "Decrease roughly by a factor ~3", "Unchanged", "Oscillate strongly"], answer: 1, explanation: "More phonon scattering reduces conductivity." },
    { q: "If τ doubles while n and m stay fixed, σ:", choices: ["Halves", "Doubles", "Stays same", "Becomes negative"], answer: 1, explanation: "σ ∝ τ directly." },
    { q: "If carrier density n increases while τ,m fixed, the Hall coefficient magnitude:", choices: ["Increases", "Decreases", "Unchanged", "Changes sign"], answer: 1, explanation: "R_H = −1/(ne); larger n reduces |R_H|." },
    { q: "Under the WF law, doubling σ at fixed T tends to:", choices: ["Halve k_e", "Double k_e", "Leave k_e unchanged", "Invalidate the law"], answer: 1, explanation: "k_e ≈ L₀ σ T; proportional to σ." }
  ]
};
