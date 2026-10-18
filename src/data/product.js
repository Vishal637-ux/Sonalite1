const products = [
  // ==================== TILE ADHESIVES ====================
  {
    id: 1,
    category: "Tile Adhesives",
    name: "Sonalite Tile Adhesive Type 1",
    image: "/tile-adhesive.jpg",
    shortDescription:
      "Tile fixing solution for suitable wall and floor applications.",
    description:
      "Sonalite Tile Adhesive Type 1 is a construction adhesive solution designed for suitable tile installation applications.",

    applications: [
      "Wall tile applications",
      "Floor tile applications",
      "Residential construction",
      "Commercial construction",
    ],

    features: [
      "Easy to use",
      "Reliable tile fixing",
      "Suitable for selected applications",
    ],

    packaging: "20 KG",
  },

  {
    id: 2,
    category: "Tile Adhesives",
    name: "Sonalite Tile Adhesive Type 2",
    image: "/tile-adhesive.jpg",
    shortDescription:
      "Reliable tile fixing solution for selected construction applications.",
    description:
      "Sonalite Tile Adhesive Type 2 provides a practical solution for suitable tile installation requirements.",

    applications: [
      "Wall tile applications",
      "Floor tile applications",
      "Residential projects",
      "Commercial projects",
    ],

    features: [
      "Reliable bonding solution",
      "Easy application",
      "Suitable for selected construction applications",
    ],

    packaging: "20 KG",
  },

  {
    id: 3,
    category: "Tile Adhesives",
    name: "Sonalite Tile Adhesive Type 3",
    image: "/tile-adhesive.jpg",
    shortDescription:
      "Construction adhesive solution designed for tile installation.",
    description:
      "Sonalite Tile Adhesive Type 3 is designed to support suitable tile installation requirements in construction projects.",

    applications: [
      "Tile installation",
      "Wall applications",
      "Floor applications",
      "Construction projects",
    ],

    features: [
      "Practical tile fixing solution",
      "Easy application",
      "Reliable construction solution",
    ],

    packaging: "20 KG",
  },

  // ==================== BLOCK JOINING MORTAR ====================
  {
    id: 4,
    category: "Block Joining Mortar",
    name: "Sonalite Block Joining Mortar Type 1",
    image: "/Bond Block Joining Mortar Bag.png",
    shortDescription:
      "Block joining solution for suitable AAC and CLC block construction.",
    description:
      "Sonalite Block Joining Mortar Type 1 is a construction solution for suitable block joining applications.",

    applications: [
      "AAC block construction",
      "CLC block construction",
      "Residential construction",
      "Commercial construction",
    ],

    features: [
      "Easy application",
      "Reliable block joining solution",
      "Suitable for selected block construction",
    ],

    packaging: "25 KG",
  },

  {
    id: 5,
    category: "Block Joining Mortar",
    name: "Sonalite Block Joining Mortar Type 2",
    image: "/Bond Block Joining Mortar Bag.png",
    shortDescription:
      "Reliable mortar solution for selected block construction applications.",
    description:
      "Sonalite Block Joining Mortar Type 2 is designed for suitable block joining requirements.",

    applications: [
      "AAC block construction",
      "CLC block construction",
      "Building construction",
    ],

    features: [
      "Practical application",
      "Reliable joining solution",
      "Suitable for construction projects",
    ],

    packaging: "25 KG",
  },

  {
    id: 6,
    category: "Block Joining Mortar",
    name: "Sonalite Block Joining Mortar Type 3",
    image: "/Bond Block Joining Mortar Bag.png",
    shortDescription:
      "Construction mortar solution for suitable block joining applications.",
    description:
      "Sonalite Block Joining Mortar Type 3 provides a solution for selected block construction requirements.",

    applications: [
      "AAC block applications",
      "CLC block applications",
      "Residential projects",
      "Commercial projects",
    ],

    features: [
      "Easy to apply",
      "Reliable construction solution",
      "Suitable for selected applications",
    ],

    packaging: "25 KG",
  },

  // ==================== MICRO CONCRETE ====================
  {
    id: 7,
    category: "Micro Concrete",
    name: "Sonalite Micro Concrete Type 1",
    image: "/micro Concrete.png",
    shortDescription:
      "Specialized solution for suitable structural repair applications.",
    description:
      "Sonalite Micro Concrete Type 1 is a construction solution intended for selected repair and strengthening applications.",

    applications: [
      "Structural repair",
      "Strengthening applications",
      "Construction repair projects",
    ],

    features: [
      "Suitable for selected repair applications",
      "Practical construction solution",
      "Easy application",
    ],

    packaging: "25 KG",
  },

  {
    id: 8,
    category: "Micro Concrete",
    name: "Sonalite Micro Concrete Type 2",
    image: "/micro Concrete.png",
    shortDescription:
      "Micro concrete solution for selected repair and strengthening applications.",
    description:
      "Sonalite Micro Concrete Type 2 is designed for suitable construction repair requirements.",

    applications: [
      "Repair applications",
      "Strengthening applications",
      "Construction projects",
    ],

    features: [
      "Reliable repair solution",
      "Practical application",
      "Suitable for selected construction requirements",
    ],

    packaging: "25 KG",
  },

  {
    id: 9,
    category: "Micro Concrete",
    name: "Sonalite Micro Concrete Type 3",
    image: "/micro Concrete.png",
    shortDescription:
      "Construction solution for selected structural repair requirements.",
    description:
      "Sonalite Micro Concrete Type 3 provides a solution for suitable repair and strengthening applications.",

    applications: ["Structural repair", "Strengthening", "Construction repair"],

    features: [
      "Practical repair solution",
      "Easy application",
      "Suitable for selected applications",
    ],

    packaging: "25 KG",
  },

  // ==================== FLOOR HARDENERS ====================
  {
    id: 10,
    category: "Floor Hardeners",
    name: "Sonalite Floor Hardener Type 1",
    image: "/Floor Hardener.png",
    shortDescription:
      "Floor hardening solution for suitable industrial and commercial floors.",
    description:
      "Sonalite Floor Hardener Type 1 is a non-metallic floor hardening solution for suitable flooring applications.",

    applications: [
      "Industrial floors",
      "Commercial floors",
      "Construction flooring",
    ],

    features: [
      "Non-metallic solution",
      "Suitable for selected floor applications",
      "Practical application",
    ],

    packaging: "25 KG",
  },

  {
    id: 11,
    category: "Floor Hardeners",
    name: "Sonalite Floor Hardener Type 2",
    image: "/Floor Hardener.png",
    shortDescription:
      "Reliable floor hardening solution for selected flooring applications.",
    description:
      "Sonalite Floor Hardener Type 2 is designed for suitable industrial and commercial flooring requirements.",

    applications: [
      "Industrial flooring",
      "Commercial flooring",
      "Construction projects",
    ],

    features: [
      "Non-metallic solution",
      "Reliable flooring solution",
      "Suitable for selected applications",
    ],

    packaging: "25 KG",
  },

  {
    id: 12,
    category: "Floor Hardeners",
    name: "Sonalite Floor Hardener Type 3",
    image: "/Floor Hardener.png",
    shortDescription:
      "Floor hardening solution for suitable construction flooring applications.",
    description:
      "Sonalite Floor Hardener Type 3 provides a practical solution for selected floor hardening requirements.",

    applications: [
      "Industrial floors",
      "Commercial floors",
      "Construction flooring",
    ],

    features: [
      "Non-metallic solution",
      "Practical application",
      "Suitable for selected flooring requirements",
    ],

    packaging: "25 KG",
  },
];

export default products;
