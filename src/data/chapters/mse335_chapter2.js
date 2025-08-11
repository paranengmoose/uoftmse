// src/data/chapters/mse335_chapter2.js
export default {
  id: "module2",
  title: "Module 2: Bonding in Solids — Ionic, Covalent, Metallic, van der Waals",
  questions: [
    // General bonding concepts
    { q: "Primary bonds in solids include:", choices: ["Ionic, covalent, metallic", "Covalent only", "Ionic and van der Waals", "Hydrogen and metallic"], answer: 0, explanation: "Primary bonds are ionic, covalent, and metallic." },
    { q: "Secondary bonding refers mainly to:", choices: ["van der Waals and hydrogen bonding", "Ionic bonding", "Metallic bonding", "Covalent bonding"], answer: 0, explanation: "They are weaker, intermolecular interactions." },
    { q: "Most strongly directional primary bond:", choices: ["Covalent", "Ionic", "Metallic", "van der Waals"], answer: 0, explanation: "Covalent bonds arise from orbital overlap and are directional." },
    { q: "Least directional primary bond:", choices: ["Metallic", "Covalent", "Hydrogen", "van der Waals"], answer: 0, explanation: "The electron sea in metals is delocalized and non‑directional." },
    { q: "Typical relative bond strengths (largest to smallest):", choices: ["Covalent ≈ Ionic > Metallic >> van der Waals", "Metallic > Ionic > Covalent > vdW", "vdW > Metallic > Ionic > Covalent", "All roughly equal"], answer: 0, explanation: "Primary bonds are far stronger than secondary ones." },

    // Ionic bonding
    { q: "Ionic bonding is driven mainly by:", choices: ["Coulomb attraction between ions", "Electron sharing", "Electron sea", "Dipole–dipole forces"], answer: 0, explanation: "Oppositely charged ions attract electrostatically." },
    { q: "Greater electronegativity difference (Δχ) implies:", choices: ["More ionic character", "More metallic character", "More covalent character", "No trend"], answer: 0, explanation: "Larger Δχ favors electron transfer." },
    { q: "A qualitative indicator of strong ionic bonding is:", choices: ["High melting point and brittleness", "High ductility", "Room‑temperature metallic conductivity", "Large thermal expansion only"], answer: 0, explanation: "Ionic solids are hard, brittle, with high Tm." },
    { q: "In ionic crystals, lattice energy scales roughly with:", choices: ["(z+ z−)/r₀", "r₀²", "1/Δχ", "Electron effective mass"], answer: 0, explanation: "Electrostatic attraction increases with charge and decreases with separation." },
    { q: "The Madelung constant accounts for:", choices: ["Long‑range Coulomb sums", "Short‑range repulsion only", "Band dispersion", "Polarizability only"], answer: 0, explanation: "It sums pairwise Coulomb interactions over the lattice." },
    { q: "Ionic solids at room temperature are typically:", choices: ["Electrical insulators", "Excellent conductors", "Semimetals", "Superconductors"], answer: 0, explanation: "Mobile electrons are absent; ions are fixed." },
    { q: "Ionic bonding directionality is:", choices: ["Largely non‑directional", "Strongly directional", "Along sp³ hybrids", "Along d‑orbitals"], answer: 0, explanation: "Coulomb forces act isotropically." },

    // Covalent bonding
    { q: "Covalent bonding forms by:", choices: ["Sharing electron pairs", "Complete electron transfer", "Dipole induction", "Electron sea"], answer: 0, explanation: "Orbitals overlap and share electrons." },
    { q: "Covalent solids (e.g., diamond) typically show:", choices: ["High hardness and brittleness", "High ductility", "High ionic conductivity", "Metallic luster and malleability"], answer: 0, explanation: "Directional bonds resist shear; fractures are brittle." },
    { q: "Covalent bond direction is set by:", choices: ["Hybridization/orbital geometry", "Electrostatics only", "Random orientation", "Fermi surface shape"], answer: 0, explanation: "Bond angles follow orbital hybrids (e.g., sp³)." },
    { q: "Increasing covalency generally:", choices: ["Raises band gaps in insulators", "Ensures metallic behavior", "Eliminates brittleness", "Lowers hardness"], answer: 0, explanation: "Strong localized bonds widen band gaps." },
    { q: "Covalent bond energies are typically:", choices: ["~1–10 eV per bond", "≤0.1 eV per bond", "~meV per bond", "Undefined"], answer: 0, explanation: "They are strong primary bonds." },
    { q: "Polarity in a covalent bond arises from:", choices: ["Electronegativity difference", "Band folding", "Dislocations", "Thermal noise"], answer: 0, explanation: "Unequal sharing produces partial charges." },
    { q: "Example dominated by covalent bonding:", choices: ["Diamond", "NaCl", "Cu", "Solid Ar"], answer: 0, explanation: "Diamond is a classic covalent network solid." },

    // Metallic bonding
    { q: "Metallic bonding is described by:", choices: ["Delocalized electron sea", "Localized electron pairs", "Ionic charge networks", "Hydrogen bridges"], answer: 0, explanation: "Valence electrons are shared by many atoms." },
    { q: "Key property from metallic bonding:", choices: ["High electrical/thermal conductivity", "High transparency", "Ionic conduction", "Extreme brittleness"], answer: 0, explanation: "Mobile electrons carry charge and heat." },
    { q: "Metals tend to be:", choices: ["Ductile and malleable", "Brittle ionic crystals", "Insulating covalent networks", "Amorphous at RT"], answer: 0, explanation: "Non‑directional bonds allow slip." },
    { q: "Metallic cohesive energies are usually:", choices: ["Intermediate (∼1–4 eV/atom)", "Negligible (meV)", "Always >10 eV/atom", "Exactly the same for all metals"], answer: 0, explanation: "They sit between covalent/ionic and vdW." },
    { q: "A good metallic example:", choices: ["Cu", "SiO₂ glass", "NaCl", "Ice"], answer: 0, explanation: "Copper shows classic metallic behavior." },

    // van der Waals & hydrogen bonding
    { q: "van der Waals forces include primarily:", choices: ["London dispersion", "Covalent sharing", "Ionic attraction", "Electron sea"], answer: 0, explanation: "Induced dipoles cause weak attraction." },
    { q: "van der Waals solids typically have:", choices: ["Low melting points and softness", "High Tm and high hardness", "Metallic conductivity", "Strong ductility"], answer: 0, explanation: "Weak cohesion gives low Tm and softness." },
    { q: "Hydrogen bonding compared to dispersion is:", choices: ["Stronger but still secondary", "Weaker than dispersion", "Primary and metallic", "Identical to covalent"], answer: 0, explanation: "It’s stronger than London dispersion but weaker than primary bonds." },
    { q: "Graphite’s interlayer bonding is largely:", choices: ["van der Waals", "Ionic", "Metallic", "Hydrogen bonding"], answer: 0, explanation: "Layers are held by vdW; in‑plane bonds are covalent." },
    { q: "Noble‑gas crystals at low T are bound by:", choices: ["van der Waals (dispersion)", "Ionic bonds", "Covalent bonds", "Hydrogen bonds"], answer: 0, explanation: "Closed shells interact via dispersion." },
    { q: "van der Waals bond energies are typically:", choices: ["~0.01–0.1 eV per interaction", "~1–10 eV", "~>10 eV", "Exactly 0 eV"], answer: 0, explanation: "They are much weaker than primary bonds." },

    // Mixed bonding & polarity
    { q: "Most real bonds are:", choices: ["Partially ionic and partially covalent", "Purely ionic", "Purely metallic", "Purely vdW"], answer: 0, explanation: "Bonding often has mixed character." },
    { q: "Ionic character increases with:", choices: ["Δχ (Pauling) increasing", "Decreasing Δχ", "Higher electron density overlap", "Lower charge states"], answer: 0, explanation: "Electronegativity contrast promotes ionicity." },
    { q: "Covalent character increases with:", choices: ["Directional overlap and small Δχ", "Large Δχ", "Free‑electron density", "Large interatomic spacing"], answer: 0, explanation: "Similar electronegativities and good overlap favor covalency." },
    { q: "A ceramic like SiC is best described as:", choices: ["Predominantly covalent with some ionic character", "Purely ionic", "Purely metallic", "Purely vdW"], answer: 0, explanation: "Si–C bonds are largely covalent but polar." },
    { q: "NaCl is best described as:", choices: ["Predominantly ionic", "Predominantly covalent", "Metallic", "vdW solid"], answer: 0, explanation: "Large Δχ leads to electron transfer." },
    { q: "GaAs bonding is often described as:", choices: ["Partially ionic, partially covalent", "Purely metallic", "Purely ionic", "Purely vdW"], answer: 0, explanation: "Heteropolar covalent bonds carry partial ionicity." },

    // Bond energy curves & cohesive energy
    { q: "Equilibrium bond length r₀ occurs where:", choices: ["dU/dr = 0 at a minimum", "U is maximum", "Repulsion dominates", "At infinite separation"], answer: 0, explanation: "Attractive and repulsive forces balance at the minimum of U(r)." },
    { q: "The repulsive wall at short r mainly arises from:", choices: ["Pauli exclusion/overlap", "Gravitational forces", "Blackbody radiation", "Compton scattering"], answer: 0, explanation: "Electron clouds resist overlap strongly." },
    { q: "Cohesive energy of a crystal is:", choices: ["Energy required to separate atoms to infinity", "Always positive by definition", "Zero at 0 K exactly", "Independent of bonding"], answer: 0, explanation: "It is the magnitude of binding per atom (sign convention varies)." },
    { q: "Deeper potential wells generally mean:", choices: ["Higher melting points and moduli", "Lower melting points", "Lower stiffness", "More vdW character"], answer: 0, explanation: "Stronger bonding increases Tm and stiffness." },
    { q: "Thermal expansion is larger when:", choices: ["U(r) is more anharmonic", "U(r) is perfectly harmonic", "Bonds are infinitely stiff", "Electrons are fully localized"], answer: 0, explanation: "Anharmonicity skews average bond length with T." },

    // Property trends & comparisons
    { q: "Which set best matches bonding vs typical property?", choices: ["Metallic → conductive; Ionic → insulating & brittle; Covalent → hard/brittle; vdW → soft", "Ionic → ductile; Metallic → insulating", "Covalent → very ductile", "vdW → highest Tm"], answer: 0, explanation: "Canonical property map for bonding types." },
    { q: "Good ductility is most consistent with:", choices: ["Metallic bonding", "Ionic bonding", "Strong covalent networks", "vdW solids"], answer: 0, explanation: "Non‑directional bonds allow dislocation glide." },
    { q: "High transparency in many ionic solids (e.g., alkali halides) is due to:", choices: ["Large band gaps", "Free electrons", "Strong plasmon absorption", "Magnetic ordering"], answer: 0, explanation: "Few electronic states in the visible range." },
    { q: "Covalent network solids (e.g., Si, Ge, diamond) tend to have:", choices: ["High hardness; variable electrical behavior", "High ionic conductivity", "Very high ductility", "Metallic luster always"], answer: 0, explanation: "Directional bonds yield hardness; band gaps vary with structure." },
    { q: "Polymers are often held between chains by:", choices: ["van der Waals and sometimes H‑bonding", "Metallic bonds", "Pure ionic bonds", "No interactions"], answer: 0, explanation: "Interchain cohesion is typically secondary." },

    // Quantitative/trend checks
    { q: "Order of cohesive energies (highest → lowest), typical:", choices: ["Covalent/Ionic > Metallic >> van der Waals", "Metallic > Covalent > Ionic > vdW", "vdW > Metallic > Ionic > Covalent", "All equal"], answer: 0, explanation: "Primary bonds exceed secondary by orders of magnitude." },
    { q: "Which bonding type most strongly increases stiffness (elastic modulus)?", choices: ["Covalent (directional)", "vdW", "Hydrogen bonding", "None"], answer: 0, explanation: "Strong directional bonds resist deformation." },
    { q: "Electrical conductivity at room temperature is highest for:", choices: ["Metallic solids", "Ionic solids", "Covalent insulators", "vdW molecular crystals"], answer: 0, explanation: "Metals have mobile electrons." },
    { q: "Among these, which typically has the lowest melting point?", choices: ["vdW molecular solid", "Ionic ceramic", "Covalent network solid", "Metal"], answer: 0, explanation: "Weak secondary bonding melts easily." },
    { q: "Hydrogen bonding can significantly raise:", choices: ["Boiling/melting points of molecular solids", "Electrical conductivity of metals", "Ionic charge states", "Metal ductility"], answer: 0, explanation: "Extra cohesion elevates phase‑change temperatures." }
  ]
};
