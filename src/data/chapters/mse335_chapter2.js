// src/data/chapters/mse335_chapter2.js
export default {
  id: "module2",
  title: "Module 2: Bonding in Solids — Ionic, Covalent, Metallic, van der Waals",
  questions: [
    // General bonding concepts
    { q: "Primary bonds in solids include:", choices: ["Covalent only", "Ionic, covalent, metallic", "Hydrogen and metallic", "Ionic and van der Waals"], answer: 1, explanation: "Primary bonds are ionic, covalent, and metallic." },
    { q: "Secondary bonding refers mainly to:", choices: ["Metallic bonding", "Covalent bonding", "van der Waals and hydrogen bonding", "Ionic bonding"], answer: 2, explanation: "They are weaker, intermolecular interactions." },
    { q: "Most strongly directional primary bond:", choices: ["Ionic", "van der Waals", "Covalent", "Metallic"], answer: 2, explanation: "Covalent bonds arise from orbital overlap and are directional." },
    { q: "Least directional primary bond:", choices: ["van der Waals", "Hydrogen", "Covalent", "Metallic"], answer: 3, explanation: "The electron sea in metals is delocalized and non‑directional." },
    { q: "Typical relative bond strengths (largest to smallest):", choices: ["Covalent ≈ Ionic > Metallic >> van der Waals", "vdW > Metallic > Ionic > Covalent", "All roughly equal", "Metallic > Ionic > Covalent > vdW"], answer: 0, explanation: "Primary bonds are far stronger than secondary ones." },

    // Ionic bonding
    { q: "Ionic bonding is driven mainly by:", choices: ["Dipole–dipole forces", "Electron sea", "Coulomb attraction between ions", "Electron sharing"], answer: 2, explanation: "Oppositely charged ions attract electrostatically." },
    { q: "Greater electronegativity difference (Δχ) implies:", choices: ["No trend", "More covalent character", "More metallic character", "More ionic character"], answer: 3, explanation: "Larger Δχ favors electron transfer." },
    { q: "A qualitative indicator of strong ionic bonding is:", choices: ["High ductility", "Room‑temperature metallic conductivity", "Large thermal expansion only", "High melting point and brittleness"], answer: 3, explanation: "Ionic solids are hard, brittle, with high Tm." },
    { q: "In ionic crystals, lattice energy scales roughly with:", choices: ["(z+ z−)/r₀", "r₀²", "1/Δχ", "Electron effective mass"], answer: 0, explanation: "Electrostatic attraction increases with charge and decreases with separation." },
    { q: "The Madelung constant accounts for:", choices: ["Polarizability only", "Short‑range repulsion only", "Long‑range Coulomb sums", "Band dispersion"], answer: 2, explanation: "It sums pairwise Coulomb interactions over the lattice." },
    { q: "Ionic solids at room temperature are typically:", choices: ["Semimetals", "Electrical insulators", "Superconductors", "Excellent conductors"], answer: 1, explanation: "Mobile electrons are absent; ions are fixed." },
    { q: "Ionic bonding directionality is:", choices: ["Along d‑orbitals", "Along sp³ hybrids", "Strongly directional", "Largely non‑directional"], answer: 3, explanation: "Coulomb forces act isotropically." },

    // Covalent bonding
    { q: "Covalent bonding forms by:", choices: ["Dipole induction", "Complete electron transfer", "Sharing electron pairs", "Electron sea"], answer: 2, explanation: "Orbitals overlap and share electrons." },
    { q: "Covalent solids (e.g., diamond) typically show:", choices: ["High hardness and brittleness", "High ductility", "High ionic conductivity", "Metallic luster and malleability"], answer: 0, explanation: "Directional bonds resist shear; fractures are brittle." },
    { q: "Covalent bond direction is set by:", choices: ["Random orientation", "Fermi surface shape", "Electrostatics only", "Hybridization/orbital geometry"], answer: 3, explanation: "Bond angles follow orbital hybrids (e.g., sp³)." },
    { q: "Increasing covalency generally:", choices: ["Ensures metallic behavior", "Lowers hardness", "Eliminates brittleness", "Raises band gaps in insulators"], answer: 3, explanation: "Strong localized bonds widen band gaps." },
    { q: "Covalent bond energies are typically:", choices: ["~1–10 eV per bond", "≤0.1 eV per bond", "~meV per bond", "Undefined"], answer: 0, explanation: "They are strong primary bonds." },
    { q: "Polarity in a covalent bond arises from:", choices: ["Band folding", "Dislocations", "Thermal noise", "Electronegativity difference"], answer: 3, explanation: "Unequal sharing produces partial charges." },
    { q: "Example dominated by covalent bonding:", choices: ["Solid Ar", "Cu", "NaCl", "Diamond"], answer: 3, explanation: "Diamond is a classic covalent network solid." },

    // Metallic bonding
    { q: "Metallic bonding is described by:", choices: ["Hydrogen bridges", "Delocalized electron sea", "Localized electron pairs", "Ionic charge networks"], answer: 1, explanation: "Valence electrons are shared by many atoms." },
    { q: "Key property from metallic bonding:", choices: ["Ionic conduction", "High transparency", "High electrical/thermal conductivity", "Extreme brittleness"], answer: 2, explanation: "Mobile electrons carry charge and heat." },
    { q: "Metals tend to be:", choices: ["Amorphous at RT", "Insulating covalent networks", "Brittle ionic crystals", "Ductile and malleable"], answer: 3, explanation: "Non‑directional bonds allow slip." },
    { q: "Metallic cohesive energies are usually:", choices: ["Always >10 eV/atom", "Exactly the same for all metals", "Intermediate (∼1–4 eV/atom)", "Negligible (meV)"], answer: 2, explanation: "They sit between covalent/ionic and vdW." },
    { q: "A good metallic example:", choices: ["Ice", "NaCl", "SiO₂ glass", "Cu"], answer: 3, explanation: "Copper shows classic metallic behavior." },

    // van der Waals & hydrogen bonding
    { q: "van der Waals forces include primarily:", choices: ["Ionic attraction", "Electron sea", "Covalent sharing", "London dispersion"], answer: 3, explanation: "Induced dipoles cause weak attraction." },
    { q: "van der Waals solids typically have:", choices: ["Strong ductility", "High Tm and high hardness", "Metallic conductivity", "Low melting points and softness"], answer: 3, explanation: "Weak cohesion gives low Tm and softness." },
    { q: "Hydrogen bonding compared to dispersion is:", choices: ["Primary and metallic", "Stronger but still secondary", "Identical to covalent", "Weaker than dispersion"], answer: 1, explanation: "It’s stronger than London dispersion but weaker than primary bonds." },
    { q: "Graphite’s interlayer bonding is largely:", choices: ["Hydrogen bonding", "Metallic", "Ionic", "van der Waals"], answer: 3, explanation: "Layers are held by vdW; in‑plane bonds are covalent." },
    { q: "Noble‑gas crystals at low T are bound by:", choices: ["Hydrogen bonds", "Covalent bonds", "van der Waals (dispersion)", "Ionic bonds"], answer: 2, explanation: "Closed shells interact via dispersion." },
    { q: "van der Waals bond energies are typically:", choices: ["~0.01–0.1 eV per interaction", "~>10 eV", "~1–10 eV", "Exactly 0 eV"], answer: 0, explanation: "They are much weaker than primary bonds." },

    // Mixed bonding & polarity
    { q: "Most real bonds are:", choices: ["Purely metallic", "Partially ionic and partially covalent", "Purely ionic", "Purely vdW"], answer: 1, explanation: "Bonding often has mixed character." },
    { q: "Ionic character increases with:", choices: ["Higher electron density overlap", "Δχ (Pauling) increasing", "Lower charge states", "Decreasing Δχ"], answer: 1, explanation: "Electronegativity contrast promotes ionicity." },
    { q: "Covalent character increases with:", choices: ["Directional overlap and small Δχ", "Large Δχ", "Large interatomic spacing", "Free‑electron density"], answer: 0, explanation: "Similar electronegativities and good overlap favor covalency." },
    { q: "A ceramic like SiC is best described as:", choices: ["Predominantly covalent with some ionic character", "Purely vdW", "Purely metallic", "Purely ionic"], answer: 0, explanation: "Si–C bonds are largely covalent but polar." },
    { q: "NaCl is best described as:", choices: ["Predominantly covalent", "Metallic", "Predominantly ionic", "vdW solid"], answer: 2, explanation: "Large Δχ leads to electron transfer." },
    { q: "GaAs bonding is often described as:", choices: ["Purely metallic", "Purely ionic", "Partially ionic, partially covalent", "Purely vdW"], answer: 2, explanation: "Heteropolar covalent bonds carry partial ionicity." },

    // Bond energy curves & cohesive energy
    { q: "Equilibrium bond length r₀ occurs where:", choices: ["U is maximum", "At infinite separation", "Repulsion dominates", "dU/dr = 0 at a minimum"], answer: 3, explanation: "Attractive and repulsive forces balance at the minimum of U(r)." },
    { q: "The repulsive wall at short r mainly arises from:", choices: ["Pauli exclusion/overlap", "Blackbody radiation", "Gravitational forces", "Compton scattering"], answer: 0, explanation: "Electron clouds resist overlap strongly." },
    { q: "Cohesive energy of a crystal is:", choices: ["Independent of bonding", "Energy required to separate atoms to infinity", "Always positive by definition", "Zero at 0 K exactly"], answer: 1, explanation: "It is the magnitude of binding per atom (sign convention varies)." },
    { q: "Deeper potential wells generally mean:", choices: ["More vdW character", "Lower melting points", "Higher melting points and moduli", "Lower stiffness"], answer: 2, explanation: "Stronger bonding increases Tm and stiffness." },
    { q: "Thermal expansion is larger when:", choices: ["Electrons are fully localized", "U(r) is more anharmonic", "U(r) is perfectly harmonic", "Bonds are infinitely stiff"], answer: 1, explanation: "Anharmonicity skews average bond length with T." },

    // Property trends & comparisons
    { q: "Which set best matches bonding vs typical property?", choices: ["Ionic → ductile; Metallic → insulating", "vdW → highest Tm", "Covalent → very ductile", "Metallic → conductive; Ionic → insulating & brittle; Covalent → hard/brittle; vdW → soft"], answer: 3, explanation: "Canonical property map for bonding types." },
    { q: "Good ductility is most consistent with:", choices: ["Ionic bonding", "vdW solids", "Metallic bonding", "Strong covalent networks"], answer: 2, explanation: "Non‑directional bonds allow dislocation glide." },
    { q: "High transparency in many ionic solids (e.g., alkali halides) is due to:", choices: ["Large band gaps", "Magnetic ordering", "Strong plasmon absorption", "Free electrons"], answer: 0, explanation: "Few electronic states in the visible range." },
    { q: "Covalent network solids (e.g., Si, Ge, diamond) tend to have:", choices: ["High hardness; variable electrical behavior", "Metallic luster always", "Very high ductility", "High ionic conductivity"], answer: 0, explanation: "Directional bonds yield hardness; band gaps vary with structure." },
    { q: "Polymers are often held between chains by:", choices: ["van der Waals and sometimes H‑bonding", "Metallic bonds", "No interactions", "Pure ionic bonds"], answer: 0, explanation: "Interchain cohesion is typically secondary." },

    // Quantitative/trend checks
    { q: "Order of cohesive energies (highest → lowest), typical:", choices: ["Covalent/Ionic > Metallic >> van der Waals", "All equal", "vdW > Metallic > Ionic > Covalent", "Metallic > Covalent > Ionic > vdW"], answer: 0, explanation: "Primary bonds exceed secondary by orders of magnitude." },
    { q: "Which bonding type most strongly increases stiffness (elastic modulus)?", choices: ["Covalent (directional)", "Hydrogen bonding", "None", "vdW"], answer: 0, explanation: "Strong directional bonds resist deformation." },
    { q: "Electrical conductivity at room temperature is highest for:", choices: ["vdW molecular crystals", "Ionic solids", "Covalent insulators", "Metallic solids"], answer: 3, explanation: "Metals have mobile electrons." },
    { q: "Among these, which typically has the lowest melting point?", choices: ["vdW molecular solid", "Metal", "Covalent network solid", "Ionic ceramic"], answer: 0, explanation: "Weak secondary bonding melts easily." },
    { q: "Hydrogen bonding can significantly raise:", choices: ["Boiling/melting points of molecular solids", "Ionic charge states", "Electrical conductivity of metals", "Metal ductility"], answer: 0, explanation: "Extra cohesion elevates phase‑change temperatures." }
  ]
};
