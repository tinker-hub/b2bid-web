const UNIT_TYPE = {
  HOUSE: 'House',
  UNIT: 'Unit',
};

const data = [
  {
    description: `
Kingswood is a suburb of Adelaide that is characterised by wide tree lined streets and a mix of period homes and 1950/60s styled homes. Its proximity to the city and nearby amenities is attractive for many families.
`,
    name: 'Kingswood',
    location: 'Adelaide SA',
    numberOfBed: 2,
    numberOfCarPark: 1,
    numberOfRestroom: 1,
    unitPrice: 2490.72,
    photosUrls: [
      'https://livebrickx.s3.amazonaws.com/propertyImages/BLM01/1_Front_1615066853_v2-3118b4a06a9a11e7b63e41b10026225a-optimized.jpg',
    ],
    type: UNIT_TYPE.UNIT,
  },
  {
    description: `
The house is in the catchment area for Unley High School and is near several public and private schools, including Mitcham Primary, Urrbrae High School, Scotch College and Mercedes College.    
`,
    name: 'Darlinghurst',
    location: 'NSW',
    numberOfBed: 1,
    numberOfCarPark: 0,
    numberOfRestroom: 1,
    unitPrice: 3217.18,
    photosUrls: [
      'https://livebrickx.s3.amazonaws.com/propertyImages/BLM01/1_Front_1615066853_v2-3118b4a06a9a11e7b63e41b10026225a-optimized.jpg',
    ],
    type: UNIT_TYPE.UNIT,
  },
  {
    description: `
The house is in the catchment area for Unley High School and is near several public and private schools, including Mitcham Primary, Urrbrae High School, Scotch College and Mercedes College.
`,
    name: 'Brunswick',
    location: 'West VIC',
    numberOfBed: 3,
    numberOfCarPark: 1,
    numberOfRestroom: 2,
    unitPrice: 4618.21,
    photosUrls: [
      'https://livebrickx.s3.amazonaws.com/propertyImages/BLM01/1_Front_1615066853_v2-3118b4a06a9a11e7b63e41b10026225a-optimized.jpg',
    ],
    type: UNIT_TYPE.HOUSE,
  },
  {
    description: `
The house is in the catchment area for Unley High School and is near several public and private schools, including Mitcham Primary, Urrbrae High School, Scotch College and Mercedes College.
`,
    name: 'Pororo',
    location: 'West VIC',
    numberOfBed: 3,
    numberOfCarPark: 1,
    numberOfRestroom: 2,
    unitPrice: 4618.21,
    photosUrls: [
      'https://livebrickx.s3.amazonaws.com/propertyImages/BLM01/1_Front_1615066853_v2-3118b4a06a9a11e7b63e41b10026225a-optimized.jpg',
    ],
    investors: [
      {
        address: 'Quezon City, Philippines',
        firstName: 'Macapagal',
        lastName: 'Mio',
      },
    ],
    type: UNIT_TYPE.HOUSE,
  },
];

export default data;
