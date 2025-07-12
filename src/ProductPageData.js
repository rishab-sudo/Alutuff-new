const ProductPageData = [
  // 1 - ACP – Aluminium Composite Panel
  {
    category: 'ACP – Aluminium Composite Panel',
    details: {
      material: 'LDPE (Low-Density Polyethylene) sandwiched between aluminium sheets',
      categoryType: 'Standard ACP',
      applications: ['Exterior cladding', 'Signage', 'Interior partitions', 'Ceilings', 'Canopies'],
      keyFeatures: [
        'Lightweight and easy to install',
        'Weather and UV-resistant',
        'Available in solid, metallic, wooden, and marble finishes',
        'Customizable sizes and thicknesses',
        'Ideal for cost-effective large-scale cladding',
      ],
    },
    products: [
      {
        id: 1,
        title: 'Wooden Chair',
        description: 'Comfortable and stylish wooden chair',
        image: require('./assets/Image2.png'),
      },
      {
        id: 2,
        title: 'Wooden Panel',
        description: 'Elegant wooden panel for interior walls',
        image: require('./assets/home-about1.jpeg'),
      },
    ],
  },

  // 2 - AHPL – Aluminium High-Pressure Laminate
  {
    category: 'AHPL – Aluminium High-Pressure Laminate',
    details: {
      material: 'Phenolic resin-impregnated kraft paper with decorative melamine layer',
      categoryType: 'High-pressure composite panel',
      applications: ['Exterior façades', 'Interior walls', 'Furniture', 'Partitions', 'Washrooms'],
      keyFeatures: [
        'Scratch, stain, and fade-resistant',
        'Fire-retardant and water-resistant',
        'UV-stable for long-term outdoor use',
        'Available in stone, wood, and textured finishes',
        'Matte and natural aesthetic',
      ],
    },
    products: [
      {
        id: 3,
        title: 'Marble Table',
        description: 'Elegant marble table top',
        image: require('./assets/Image2.png'),
      },
    ],
  },

  // 3 - Fire Shield – FR ACP / FR HPL
  {
    category: 'Fire Shield – FR ACP / FR HPL',
    details: {
      material: 'LDPE/HDPE with MDH (Magnesium Hydroxide) fire-retardant core',
      categoryType: 'Fire-resistant cladding',
      applications: ['High-rise buildings', 'Hospitals', 'Airports', 'Commercial complexes'],
      keyFeatures: [
        'A2-s1, d0 EN13501-1 fire rating',
        'Reduces flame spread and smoke generation',
        'Maintains aesthetic appeal with added safety',
        'Suitable for both ACP and HPL variants',
        'Available in 50+ finishes',
      ],
    },
    products: [
      {
        id: 4,
        title: 'Fireproof Panel',
        description: 'Fire-resistant panel for high-rise buildings',
        image: require('./assets/Image2.png'),
      },
    ],
  },

  // 4 - AHCP – Aluminium Honeycomb Composite Panel
  {
    category: 'AHCP – Aluminium Honeycomb Composite Panel',
    details: {
      material: 'Hexagonal aluminium honeycomb (3003 H24) core between aluminium sheets',
      categoryType: 'Honeycomb panel',
      applications: ['Ceilings', 'Exterior façades', 'Canopies', 'Beam wraps', 'Lobbies', 'Clean rooms'],
      keyFeatures: [
        'Ultra-flat surface with minimal joints',
        'Very high strength-to-weight ratio',
        'Fire and corrosion resistant',
        'Ideal for wide, seamless ceiling areas',
        '100% recyclable',
      ],
    },
    products: [
      {
        id: 5,
        title: 'Honeycomb Ceiling Panel',
        description: 'Seamless honeycomb panel for ceiling applications',
        image: require('./assets/Image2.png'),
      },
    ],
  },

  // 5 - ACCP – Aluminium Corrugated Composite Panel
  {
    category: 'ACCP – Aluminium Corrugated Composite Panel',
    details: {
      material: '3D corrugated aluminium (solid 3003 H24) core',
      categoryType: 'Corrugated aluminium panel',
      applications: ['Long-span ceilings', 'Machine rooms', 'Ship cabins', 'Facades', 'Display walls'],
      keyFeatures: [
        'Peel strength decay rate <5% over 20 years',
        'Fire-rated: A2-s1, d0',
        'Excellent sound and thermal insulation',
        'Withstands extreme environments',
        'High strength for large format applications',
      ],
    },
    products: [
      {
        id: 6,
        title: 'Corrugated Panel',
        description: 'Durable corrugated panel for industrial use',
        image: require('./assets/Image2.png'),
      },
    ],
  },

  // 6 - 3D Decorative Wall Panel
  {
    category: '3D Decorative Wall Panel',
    details: {
      material: 'PVC Celluka or similar decorative polymer base',
      categoryType: 'Decorative wall panel',
      applications: ['Interior walls', 'Showrooms', 'Reception areas', 'Feature walls'],
      keyFeatures: [
        'Lightweight and waterproof',
        '3D texture for a bold visual effect',
        'Fast installation and easy maintenance',
        'Suitable for moisture-prone areas',
        'Available in custom patterns and textures',
      ],
    },
    products: [
      {
        id: 7,
        title: '3D Wall Texture',
        description: 'Stylish 3D panel for feature walls',
        image: require('./assets/Image2.png'),
      },
    ],
  },

  // 7 - Louvers – Aluminium / WPC Louvers
  {
    category: 'Louvers – Aluminium / WPC Louvers',
    details: {
      material: 'Aluminium or WPC solid/hollow extruded profiles',
      categoryType: 'Architectural Shading System',
      applications: ['Exterior facades', 'Sunshade systems', 'Pergolas', 'Balcony screens'],
      keyFeatures: [
        'Improves building aesthetics and shading',
        'Resistant to UV, moisture, and termites',
        'Lightweight and structurally durable',
        'Minimal maintenance required',
        'Custom profiles and finishes are available',
      ],
    },
    products: [
      {
        id: 8,
        title: 'WPC Louver',
        description: 'Elegant shading solution for facades',
        image: require('./assets/Image2.png'),
      },
    ],
  },

  // 8 - Premium Series Panels
  {
    category: 'Premium Series Panels',
    details: {
      material: 'Available in ACP / HPL base with solid or fire-retardant core',
      categoryType: 'Premium Decorative Panel',
      applications: ['High-end interiors and façades', 'Showrooms', 'Brand environments'],
      keyFeatures: [
        'Signature finishes (metallics, stone, wood, marble)',
        'High color uniformity and UV protections',
        'Fire and weather resistant',
        'Matched core shades for a refined look',
        'No fading like paper-based laminates',
      ],
    },
    products: [
      {
        id: 9,
        title: 'Premium Gloss Panel',
        description: 'Luxurious gloss finish for high-end designs',
        image: require('./assets/Image2.png'),
      },
    ],
  },
];

export default ProductPageData;
