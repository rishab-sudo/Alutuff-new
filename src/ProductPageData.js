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
        title: 'ACP',
        description: 'Aluminium Composite Panel',
        image: require('./assets/product-page/ACP1.jpg'),
      },
      {
        id: 2,
        title: 'ACP',
        description: 'Elegant wooden panel for interior walls',
        image: require('./assets/product-page/ACP2.jpg'),
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
        title: 'AHPL',
        description: 'Aluminium High-Pressure Laminate',
        image: require('./assets/product-page/AHPL 1.jpg'),
      },
         {
        id: 4,
        title: 'AHPL',
        description: 'Aluminium High-Pressure Laminate',
           image: require('./assets/product-page/AHPL 2 .jpg'),
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
        id: 5,
        title: 'FR ACP / FR HPL',
        description: 'Fire-resistant panel for high-rise buildings',
        image: require('./assets/product-page/FR ACP  1 .jpg'),
      },
         {
        id: 6,
        title: 'FR ACP / FR HPL',
        description: 'Fire-resistant panel for high-rise buildings',
        image: require('./assets/product-page/FR ACP  2.jpg'),
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
        id: 7,
        title: 'AHCP ',
        description: 'Aluminium Honeycomb Composite Panel',
        image: require('./assets/product-page/Aluminium Honeycomb Composite Panel 2.jpg'),
      },
          {
        id: 8,
        title: 'AHCP ',
        description: 'Aluminium Honeycomb Composite Panel',
        image: require('./assets/product-page/Aluminium Honeycomb Composite Panel.jpg'),
      },
    ],
  },

  // 5 - ACCP – Aluminium Corrugated Composite Panel---------------------------
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
        id: 9,
        title: 'ACCP',
        description: 'Aluminium Corrugated Composite Panel',
        // image: require('./assets/product-page/ACP1.jpg'),
      },
          {
        id: 10,
        title: 'ACCP',
        description: 'Aluminium Corrugated Composite Panel',
        // image: require('./assets/product-page/ACP2.jpg'),
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
        id: 11,
        title: '3D Decorative Wall Panel',
        description: 'Stylish 3D panel for feature walls',
        image: require('./assets/product-page/3D 1 .jpg'),
      },
         {
        id: 12,
        title: '3D Decorative Wall Panel',
        description: 'Stylish 3D panel for feature walls',
        image: require('./assets/product-page/3D Decorative Wall Panel .jpg'),
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
        id: 13,
        title: 'Louvers – Aluminium / WPC Louvers',
        description: 'Elegant shading solution for facades',
        image: require('./assets/product-page/Louvers – Aluminium   WPC Louvers   1.jpg'),
      },
        {
        id: 14,
        title: 'Louvers – Aluminium / WPC Louvers',
        description: 'Elegant shading solution for facades',
        image: require('./assets/product-page/Louvers – Aluminium  WPC Louvers  2.jpg'),
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
        id: 15,
        title: 'Premium Series Panels',
        description: 'Luxurious gloss finish for high-end designs',
        image: require('./assets/product-page/Louvers – Aluminium   WPC Louvers   1.jpg'),
      },
        {
        id: 16,
        title: 'Premium Series Panels',
        description: 'Luxurious gloss finish for high-end designs',
        image: require('./assets/product-page/Louvers – Aluminium  WPC Louvers  2.jpg'),
      },
    ],
  },
    {
    category: 'Alutuff PVC/WPC Decorative Panels',
    details: {
      material: ' PVC Celluka or Wood-Plastic Composite (WPC) with rigid polymer base',
      categoryType: ' Decorative Cladding & Partition Panel',
      applications: ['Interior partitions, wall cladding, modular furniture, ceilings, kitchens, wet areas, and decorative displays'],
      keyFeatures: [
        'Immune to moisture and vapour, ideal for wet areas',
        'Termite, borer, and fungus-resistant',
        'Lightweight yet highly durable structure',
        'Low maintenance with an easy-to-clean surface',
        'Weatherproof, long-lasting shine and finish',
       ' Quick and hassle-free installation',
'Available in multiple finishes, wooden, plain, textured',
      ],
    },
    products: [
      {
        id: 15,
        title: 'Premium Series Panels',
        description: 'Luxurious gloss finish for high-end designs',
        // image: require('./assets/product-page/Louvers – Aluminium   WPC Louvers   1.jpg'),
      },
        {
        id: 16,
        title: 'Premium Series Panels',
        description: 'Luxurious gloss finish for high-end designs',
        // image: require('./assets/product-page/Louvers – Aluminium  WPC Louvers  2.jpg'),
      },
    ],
  },
];

export default ProductPageData;
