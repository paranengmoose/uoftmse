// src/data/chapters/mse335_chapter2.js
export default {
  id: "module2",
  title: "Module 2: Crystal Structure & Binding",
  questions: [
    { q: "A Bravais lattice is defined as:", choices: ["An infinite array of discrete points with translational symmetry", "A single unit cell only", "A set of atoms forming a molecule", "The Wigner–Seitz cell"], answer: 0, explanation: "Translationally invariant set of points that looks identical from any lattice point." },
    { q: "A crystal structure is obtained by:", choices: ["Lattice + basis", "Basis only", "Lattice only", "Supercell only"], answer: 0, explanation: "Attach a basis (group of atoms) to every lattice point." },
    { q: "A primitive cell:", choices: ["Contains exactly one lattice point", "Is always cubic", "Contains the full basis at only some points", "Is larger than a conventional cell by definition"], answer: 0, explanation: "By construction its volume corresponds to one lattice point." },
    { q: "The Wigner–Seitz cell in real space is:", choices: ["The Voronoi cell around a lattice point", "Always a cube", "Half the conventional cell", "The reciprocal lattice cell"], answer: 0, explanation: "Constructed by perpendicular bisectors to nearest lattice points." },
    { q: "Coordination number is:", choices: ["Number of nearest neighbors of an atom", "Number of atoms per unit cell", "Number of electrons in valence shell", "Number of next-nearest neighbors"], answer: 0, explanation: "Counts immediate neighbors in the structure." },

    { q: "Which pair are reciprocal-lattice pairs?", choices: ["FCC ↔ BCC", "SC ↔ HCP", "BCC ↔ HCP", "FCC ↔ SC"], answer: 0, explanation: "FCC and BCC are reciprocal to each other." },
    { q: "Packing fraction is highest for:", choices: ["FCC/HCP", "SC", "BCC", "Diamond"], answer: 0, explanation: "Close-packed structures maximize packing." },
    { q: "APF (atomic packing factor) for FCC is:", choices: ["0.74", "0.68", "0.52", "0.34"], answer: 0, explanation: "FCC/HCP APF ≈ 0.74." },
    { q: "APF for BCC is approximately:", choices: ["0.74", "0.68", "0.52", "0.34"], answer: 1, explanation: "BCC APF ≈ 0.68." },
    { q: "APF for simple cubic (SC) is:", choices: ["0.74", "0.68", "0.52", "0.34"], answer: 2, explanation: "SC APF ≈ 0.52." },

    { q: "In HCP, the ideal c/a ratio is close to:", choices: ["1.633", "1.414", "1.732", "2.000"], answer: 0, explanation: "Ideal HCP has c/a ≈ √(8/3) ≈ 1.633." },
    { q: "Number of atoms per conventional cell in FCC:", choices: ["1", "2", "4", "8"], answer: 2, explanation: "8 corners ×1/8 + 6 faces ×1/2 = 4." },
    { q: "Number of atoms per conventional cell in BCC:", choices: ["1", "2", "4", "8"], answer: 1, explanation: "8 corners ×1/8 + 1 body ×1 = 2." },
    { q: "Nearest-neighbor count in FCC is:", choices: ["6", "8", "12", "4"], answer: 2, explanation: "FCC is 12‑coordinated." },
    { q: "Nearest-neighbor count in BCC is:", choices: ["6", "8", "12", "4"], answer: 1, explanation: "BCC is 8‑coordinated." },

    { q: "For FCC of hard spheres, a (lattice parameter) relates to atomic radius r via:", choices: ["a = 2r", "a = 2√2 r", "a = 4r", "a = √3 r"], answer: 1, explanation: "Close-packed along face diagonal: 4r = √2 a ⇒ a = 2√2 r." },
    { q: "For BCC of hard spheres, the relation is:", choices: ["a = 2r", "a = 4r/√2", "a = 4r/√3", "a = √3 r"], answer: 2, explanation: "Close-packed along body diagonal: 4r = √3 a ⇒ a = 4r/√3." },
    { q: "For SC of hard spheres, the relation is:", choices: ["a = 2r", "a = 4r/√2", "a = 4r/√3", "a = √2 r"], answer: 0, explanation: "Atoms touch along the cube edge for SC." },

    { q: "Miller indices (hkl) label:", choices: ["Directions only", "Planes in real space", "Atoms in basis", "Reciprocal vectors only"], answer: 1, explanation: "They index plane families; (hkl) corresponds to a reciprocal vector." },
    { q: "In cubic crystals, interplanar spacing is:", choices: ["d_{hkl} = a/√(h²+k²+l²)", "d_{hkl} = √(h²+k²+l²)/a", "d_{hkl} = a(h+k+l)", "d_{hkl} = 2π/a"], answer: 0, explanation: "Standard cubic formula." },
    { q: "Which plane family is most widely spaced (largest d) in a cubic crystal?", choices: ["(100)", "(110)", "(111)", "(210)"], answer: 0, explanation: "d decreases as √(h²+k²+l²) increases; (100) is largest among these." },
    { q: "[uvw] denotes:", choices: ["A plane normal", "A direction in the lattice", "A set of planes", "A reciprocal vector"], answer: 1, explanation: "Square brackets indicate directions." },
    { q: "{hkl} denotes:", choices: ["A single plane", "A set of symmetry‑equivalent planes", "A direction", "A unit cell"], answer: 1, explanation: "Curly braces indicate plane families." },

    { q: "Diamond structure can be described as:", choices: ["SC with monoatomic basis", "FCC with two‑atom basis", "BCC with monoatomic basis", "HCP with two‑atom basis"], answer: 1, explanation: "Two atoms per FCC lattice point at (0,0,0) and (¼,¼,¼)." },
    { q: "Zincblende (e.g., GaAs) differs from diamond by:", choices: ["Coordination changes to 6", "Two different species on the two sublattices", "Becoming BCC", "Metallic bonding only"], answer: 1, explanation: "Same geometry as diamond but with two species." },
    { q: "Rock salt (NaCl) structure can be viewed as:", choices: ["Two interpenetrating FCC lattices", "Simple cubic with two‑atom basis", "HCP with monoatomic basis", "BCC with two‑atom basis"], answer: 0, explanation: "Na and Cl occupy interpenetrating FCC sublattices." },
    { q: "Cesium chloride (CsCl) is:", choices: ["FCC with two‑atom basis", "SC with body‑center substitution (B2)", "HCP", "Diamond"], answer: 1, explanation: "CsCl: simple cubic with the other ion at (½,½,½)." },

    { q: "Number of formula units per conventional cell in NaCl (rock salt):", choices: ["1", "2", "4", "8"], answer: 2, explanation: "Rock salt has 4 NaCl per conventional FCC cell." },
    { q: "Density calculation for a crystal typically uses:", choices: ["ρ = (mass per unit cell)/a³ (for cubic)", "ρ = a³/(mass per unit cell)", "ρ = Z/M only", "ρ = 1/a"], answer: 0, explanation: "Compute mass from atoms per cell; divide by cell volume." },

    { q: "Ionic bonding is dominated by:", choices: ["Coulomb attraction between ions", "Shared electron pairs", "Delocalized electron sea", "Permanent dipole‑dipole only"], answer: 0, explanation: "Electrostatic attraction is primary." },
    { q: "Covalent bonding is characterized by:", choices: ["Directional bonds via orbital overlap", "Non‑directional long‑range forces", "Complete charge transfer", "Only s‑orbital participation"], answer: 0, explanation: "Hybridization and directionality are key." },
    { q: "Metallic bonding is characterized by:", choices: ["Localized electrons", "A delocalized electron sea", "Ionic cores with no electrons", "Directional bonding"], answer: 1, explanation: "Conduction electrons are shared and delocalized." },
    { q: "van der Waals (vdW) bonding arises from:", choices: ["Permanent covalent bonds", "Long‑range dipole interactions, often induced", "Nuclear forces", "Ionic exchange"], answer: 1, explanation: "Dispersion and dipole interactions provide weak cohesion." },
    { q: "Typical trend of bonding vs. properties:", choices: ["Ionic → high melting point; covalent → directional & brittle; metallic → conductive, malleable; vdW → soft/low Tm", "All bonding types have similar properties", "Metallic → brittle insulators", "vdW → highest melting points"], answer: 0, explanation: "Qualitative property map for bonding types." },

    { q: "The equilibrium bond length r₀ occurs where:", choices: ["Attractive and repulsive forces balance (dU/dr=0)", "Potential energy is maximum", "Only repulsion acts", "Only attraction acts"], answer: 0, explanation: "Minimum of U(r) at force balance gives r₀." },
    { q: "A generic repulsive term in interatomic potentials often scales roughly as:", choices: ["1/r", "1/rⁿ with n≫1", "r", "ln r"], answer: 1, explanation: "Repulsion rises steeply at short range due to Pauli exclusion/overlap." },
    { q: "The Lennard‑Jones potential U(r)=4ε[(σ/r)¹² − (σ/r)⁶] has its minimum at approximately:", choices: ["r=σ", "r=2σ", "r≈2^{1/6} σ", "r≈σ/2"], answer: 2, explanation: "Minimization yields r_min ≈ 2^{1/6}σ." },
    { q: "Cohesive energy of a crystal is:", choices: ["Energy required to assemble the crystal from infinite separation", "Always positive", "Zero at 0 K", "Independent of bonding"], answer: 0, explanation: "It’s the negative of the binding energy (convention dependent)." },

    { q: "In an ionic crystal model, the Madelung constant accounts for:", choices: ["Short‑range repulsion", "Quantum exchange", "Long‑range Coulomb lattice sum", "Thermal expansion"], answer: 2, explanation: "Captures electrostatic energy from all pair interactions." },
    { q: "Greater ionicity (larger Δχ on Pauling scale) generally correlates with:", choices: ["Higher covalency", "Lower melting point", "More ionic character and often larger band gaps", "Metallic conductivity"], answer: 2, explanation: "Ionic compounds tend to be insulating with larger gaps." },

    { q: "Slip tends to occur on planes that are:", choices: ["Densely packed with high atomic density", "Randomly chosen", "Least densely packed", "Always {100}"], answer: 0, explanation: "Dense planes/directions minimize energy barrier for dislocation motion." },
    { q: "In FCC, the close‑packed planes are:", choices: ["{110}", "{100}", "{111}", "{210}"], answer: 2, explanation: "{111} are close‑packed in FCC." },
    { q: "In HCP, the close‑packed plane is:", choices: ["{0001}", "{10-10}", "{10-11}", "{11-20}"], answer: 0, explanation: "Basal plane (0001) is close‑packed." },
    { q: "A direction with high linear atomic density in FCC is typically:", choices: ["⟨110⟩", "⟨111⟩", "⟨100⟩", "⟨210⟩"], answer: 0, explanation: "⟨110⟩ are close‑packed directions in FCC." },

    { q: "Which statement is true about polymorphism?", choices: ["A material can adopt multiple crystal structures depending on conditions", "Only compounds show it", "It violates thermodynamics", "It is the same as amorphization"], answer: 0, explanation: "Many elements/compounds have multiple phases (e.g., Ti: HCP ↔ BCC)." },
    { q: "Graphite vs diamond illustrates that:", choices: ["Same composition can yield very different structures and properties", "Only bonding type matters", "Both are metals", "Both are ionic"], answer: 0, explanation: "Allotropy: sp² layered vdW vs sp³ tetrahedral covalent." },

    { q: "The number of octahedral interstitial sites per FCC conventional cell is:", choices: ["1", "2", "4", "6"], answer: 2, explanation: "There are 4 octahedral sites per FCC conventional cell." },
    { q: "The number of tetrahedral interstitial sites per FCC conventional cell is:", choices: ["2", "4", "8", "12"], answer: 2, explanation: "There are 8 tetrahedral sites per FCC conventional cell." },
    { q: "In an HCP stacking sequence, the layer order is:", choices: ["ABCABC", "ABABAB", "AABBCC", "ABCAAC"], answer: 1, explanation: "HCP is ABAB…, whereas FCC is ABCABC…" },
    { q: "Bragg’s law connects interplanar spacing d and diffraction angle θ via:", choices: ["2d sinθ = λ", "d = λ", "2θ = λ/d", "sinθ = d/λ"], answer: 0, explanation: "Constructive interference condition." }
  ],
};
