const ProductPageData = [
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
  {
    category: 'AHPL – Aluminium High-Pressure Laminate',
    details: {
      material: 'Multiple layers of kraft paper impregnated with phenolic resin',
      categoryType: 'High-Density HPL',
      applications: ['Facades', 'Wall cladding', 'Balconies'],
      keyFeatures: ['High impact resistance', 'Scratch-resistant', 'Weather-resistant'],
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
];

export default ProductPageData;
