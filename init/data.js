const sampleListings = [
  {
    title: "Student Flat Near IUB Gate",
    description: "Affordable student flat within walking distance from IUB.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    },

    price: 700,
    location: "Baghdad-ul-Jadeed, Bahawalpur",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [71.7016, 29.3885],
    },
  },
  {
    title: "Family Home in Model Town A",
    description: "Peaceful family home close to schools and markets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Model Town A, Bahawalpur",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [71.6595, 29.3909],
    },
  },
  {
    title: "Independent Portion in Satellite Town",
    description: "Separate portion ideal for small families.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Satellite Town, Bahawalpur",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [71.7133, 29.3897],
    },
  },
  {
    title: "Modern Apartment in Johar Town",
    description: "Modern apartment with easy access to main roads.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Johar Town, Lahore",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [74.2728, 31.4697],
    },
  },
  {
    title: "Luxury Flat in DHA Phase 5",
    description: "Premium living in DHA with full security.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "DHA Phase 5, Lahore",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [74.4086, 31.4625],
    },
  },
  {
    title: "Portion Near Liberty Market",
    description: "Centrally located portion near Liberty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Gulberg III, Lahore",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [74.3413, 31.5105],
    },
  },
  {
    title: "Studio Apartment in F-11",
    description: "Compact studio perfect for professionals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "F-11, Islamabad",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [72.9909, 33.6824],
    },
  },
  {
    title: "Executive Flat in F-10",
    description: "Prime location apartment with parking.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "F-10, Islamabad",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [73.0362, 33.6996],
    },
  },
  {
    title: "Family Apartment in G-13",
    description: "Spacious apartment for family living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "G-13, Islamabad",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [72.9667, 33.6517],
    },
  },
  {
    title: "Guest House in Blue Area",
    description: "Ideal for business travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Blue Area, Islamabad",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [73.0714, 33.7182],
    },
  },
  {
    title: "Sea View Apartment Clifton",
    description: "Beautiful apartment with sea breeze.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Clifton Block 5, Karachi",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [67.0011, 24.8607],
    },
  },
  {
    title: "Budget Flat in Gulshan",
    description: "Affordable flat for small families.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Gulshan-e-Iqbal Block 7, Karachi",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [67.1045, 24.9276],
    },
  },
  {
    title: "Portion in PECHS",
    description: "Well-maintained portion near main road.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "PECHS Block 2, Karachi",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [67.0614, 24.8688],
    },
  },
  {
    title: "Family Flat in North Nazimabad",
    description: "Spacious flat ideal for families.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "North Nazimabad, Karachi",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [67.0423, 24.9372],
    },
  },
  {
    title: "Apartment in Bahria Town Phase 8",
    description: "Secure living with modern facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Bahria Town Phase 8, Rawalpindi",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [73.0724, 33.4892],
    },
  },
  {
    title: "Flat Near Saddar",
    description: "Close to markets and transport.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Saddar, Rawalpindi",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [73.0528, 33.5969],
    },
  },
  {
    title: "House Portion in Peshawar Cantt",
    description: "Secure and peaceful environment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Peshawar Cantt",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [71.5309, 33.9999],
    },
  },
  {
    title: "Flat Near University Road",
    description: "Ideal for students and teachers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "University Road, Peshawar",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [71.5059, 34.0056],
    },
  },
  {
    title: "Apartment in Hayatabad Phase 3",
    description: "Modern apartment with security.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539922631499-09155cc609a4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Hayatabad Phase 3, Peshawar",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [71.4522, 33.9837],
    },
  },
  {
    title: "Flat in Jinnah Town",
    description: "Family-friendly area near schools.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Jinnah Town, Faisalabad",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [66.9914, 30.2197],
    },
  },
  {
    title: "Apartment in Peoples Colony",
    description: "Affordable living near markets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Peoples Colony, Faisalabad",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [73.1084, 31.4107],
    },
  },
  {
    title: "Portion in Gulshan-e-Ravi",
    description: "Comfortable portion in central area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Gulshan-e-Ravi, Lahore",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [74.2796, 31.5522],
    },
  },
  {
    title: "Flat Near Canal View",
    description: "Scenic canal view apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Canal View, Lahore",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [74.2546, 31.4781],
    },
  },
  {
    title: "Apartment in DHA Phase 2 Islamabad",
    description: "Secure and modern living space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "DHA Phase 2, Islamabad",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [73.1671, 33.5305],
    },
  },
  {
    title: "Flat Near Airport Road",
    description: "Easy access to airport and highway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Airport Road, Islamabad",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [72.78, 33.96],
    },
  },
  {
    title: "Budget Apartment in Lyari",
    description: "Low-budget apartment with basic facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Lyari, Karachi",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [67.0103, 24.8784],
    },
  },
  {
    title: "Flat in Zarghoon Road",
    description: "Central Quetta location near offices.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Zarghoon Road, Quetta",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [66.9987, 30.1834],
    },
  },
  {
    title: "Family Home in Jutial",
    description: "Peaceful residential area in Gilgit.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Jutial, Gilgit",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [74.3617, 35.9082],
    },
  },
  {
    title: "Apartment Near Mingora Bypass",
    description: "Comfortable living near main road.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Mingora, Swat",
    country: "Pakistan",
    geometry: {
      type: "Point",
      coordinates: [72.3602, 34.7717],
    },
  },
];

module.exports = { data: sampleListings };
