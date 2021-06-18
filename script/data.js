//CartItem Data
// const cartItemsData = [{
//     quantity: 1,
//     orderInfoId: 1,
//     productId: 1
// },
// {
//     quantity: 3,
//     orderInfoId: 1,
//     productId: 2
// },{
//     quantity: 1,
//     orderInfoId: 1,
//     productId: 4
// },{
//     quantity: 1,
//     orderInfoId: 2,
//     productId: 1
// },{
//     quantity: 4,
//     orderInfoId: 2,
//     productId: 2
// },{
//     quantity: 1,
//     orderInfoId: 3,
//     productId: 1
// },{
//     quantity: 7,
//     orderInfoId: 4,
//     productId: 4
// },{
//     quantity: 1,
//     orderInfoId: 4,
//     productId: 5
// },
// {
//     quantity: 2,
//     orderInfoId: 6,
//     productId: 7
// },
// {
//     quantity: 1,
//     orderInfoId: 3,
//     productId: 9
// },
// {
//     quantity: 1,
//     orderInfoId: 4,
//     productId: 1
// },
// {
//     quantity: 1,
//     orderInfoId: 7,
//     productId: 5
// },
// {
//     quantity: 1,
//     orderInfoId: 7,
//     productId: 3
// },
// {
//     quantity: 1,
//     orderInfoId: 7,
//     productId: 4
// }
// ];

//Categories Data
const categoriesData = [
  {
    name: "Essential Oils",
  },
  {
    name: "Supplements",
  },
  {
    name: "Vitamins",
  },
  {
    name: "Tonic",
  },
  {
    name: "Tea",
  },
];

const productData = [
  {
    categoryId: 1,
    name: "Nature's Truth Lemongrass",
    description:
      "Nature's Truth 100% Pure Lemongrass Essential Oil, 0.51 Fluid Ounce",
    price: 6990,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/414m7O5-FmL._AC_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Energy",
    description: "Nature's Truth Energy Essential Oil, 0.51 Fluid Ounce",
    price: 6990,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61rSsFYOp4L._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Mental Clarity",
    description:
      "Nature's Truth Essential Oil, Mental Clarity, 0.51 Fluid Ounce, Clear",
    price: 6990,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61BhkA1QrdL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Aromatherapy",
    description: "100% Pure Eucalyptus Oil (Eucalyptus Globulus).",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/617liutl33L._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Happiness",
    description: "Nature's Truth Essential Oil, Happiness, 0.51 Fl Oz",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61%2BYIS1cg2L._SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Frankincense",
    description:
      "Nature's Truth Natures Truth Aromatherapy Essential Oil, Frankincense, 0.51 Oz, 0.51 Oz",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71u8X%2Ba%2B7DL._SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Patchouli",
    description: "Natures Truth Essential Oil, Patchouli, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61AvvLV25-L._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Purify",
    description: "Nature's Truth Essential Oil, Purify, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61R1QAGe3YL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Thrive",
    description:
      "Nature's Truth Vitamins Essential Oil, 4 Thrive, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61qO1Kq-RFL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Orange Sweet",
    description:
      "Nature's Truth Vitamins Essential Oil, Orange, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61T%2Bw%2BKheJL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Lavender",
    description:
      "Nature's Truth Aromatherapy Pure Essential Oil, Lavender, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61nD3QdgNkL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Good Nite",
    description:
      "Nature's Truth Essential Oil, Good Nite, 0.51 Fluid Ounce, Multicolor",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/613D3abEY5L._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Peace",
    description: "Nature's Truth Essential Oil, Peace, 0.51 fl. oz.",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61bQW72dptL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Lemon",
    description:
      "Nature's Truth Vitamins Essential Oil, Lemon, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/616chGWyPHL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Calming",
    description:
      "Nature's Truth Aromatherapy Calming 100% Pure Essential Oil, Citrus, 0.51 Fluid Ounce, Clear",
    price: 6.99,
    inventory: 10,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/714kVCih%2BGL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Good Morning Sunshine",
    description:
      "NOW Essential Oils, Good Morning Sunshine Aromatherapy Blend, Soothing Aromatherapy Scent, Blend of Pure Essential Oils, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 0,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61r8XFcXecL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Clear The Air",
    description: "NOW Clear The Air Essential Oil Blend, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61NlvTHrZjL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Cheer Up Buttercup",
    description: "NOW Cheer Up Buttercup Essential Oil Blend, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61SMd91wheL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Woodland Walk",
    description:
      "Now Essential Oils, Woodland Walk Oil Blend, Calming Attributes with a Fresh and Woodsy Scent, Steam Distilled, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71B1hb84G3L._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Lavender",
    description:
      "NOW Essential Oils, Lavender Oil, Soothing Aromatherapy Scent, Steam Distilled, 100% Pure, Vegan, Child Resistant Cap, 4-Ounce ",
    price: 7.97,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61RpKHgIYdL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Smiles for Miles",
    description:
      "NOW Essential Oils, Smiles for Miles Aromatherapy Blend, Refreshing Aromatherapy Scent, Blend of Pure Essential Oils, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61MSXhOxhzL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Star Anise",
    description:
      "NOW Essential Oils, Anise Oil, Balancing Aromatherapy Scent, Steam Distilled, 100% Pure, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61dTjC642-L._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Spearmint",
    description:
      "NOW Essential Oils, Spearmint Oil, Stimulating Aromatherapy Scent, Steam Distilled, 100% Pure, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61spMGOW9iL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Peaceful Sleep",
    description:
      "NOW Essential Oils, Peaceful Sleep Oil Blend, Relaxing Aromatherapy Scent, Blend of Pure Essential Oils, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61AcbZgBTXL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Spike Lavender",
    description:
      "NOW Essential Oils, Spike Lavender, Floral Aromatherapy Scent, Steam Distilled, 100% Pure, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61F78tjo5tL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Orange Citrus Sinensis",
    description: "NOW Foods Orange Oil Sweet, 4 Ounce + 1 Glass Dropper",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51HmJ9lrSVL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Tumeric Curcuma Longa",
    description:
      "Plant Therapy USDA Certified Organic Turmeric CO2 Essential Oil 10 mL (1/3 oz) 100% Pure, Undiluted, Therapeutic Grade",
    price: 6.95,
    inventory: 20,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71UMzJDkzZS._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Relax",
    description:
      "Plant Therapy Relax Essential Oil Blend for Sleep & Stress 100% Pure, Undiluted, Natural Aromatherapy, Therapeutic Grade 10 mL (1/3 oz)",
    price: 6.95,
    inventory: 20,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51F0cTq7iZL._SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Deodorizing Essential Oil Blend",
    description:
      "Plant Therapy Deodorizing Essential Oil Blend 30 mL (1 oz) 100% Pure, Undiluted, Therapeutic Grade",
    price: 6.95,
    inventory: 20,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51p24WuVrfL._SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Germ Fighter",
    description:
      "Plant Therapy Germ Fighter Essential Oil Blend 100% Pure, Undiluted, Natural Aromatherapy, Therapeutic Grade 30 mL (1 oz)",
    price: 6.95,
    inventory: 20,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51H3s4WbgwL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Respir Aid",
    description:
      "Plant Therapy Respir Aid Essential Oil Blend 30 mL (1 oz) Sinus, Airway and Congestion Clearing Synergy Blend 100% Pure, Undiluted, Natural Aromatherapy, Therapeutic Grade",
    price: 6.95,
    inventory: 20,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51WavIfOitL._AC_SL1000_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Vitamin E",
    description:
      "Vitamin E by Nature's Bounty, Supports Immune Health & Antioxidant Health, 1000IU, 60 Softgels",
    price: 7.85,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71ZzdXToqpL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Vitamin D3",
    description:
      "Vitamin D3 by Nature’s Bounty for Immune Support. Vitamin D Provides Immune Support and Promotes Healthy Bones. 125 mcg (5000iu), 240 Softgels",
    price: 24.99,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81gVEzsGyCL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Biotin",
    description:
      "Biotin by Nature's Bounty, Vitamin Supplement, Supports Metabolism for Energy and Healthy Hair, Skin, and Nails, 10000 mcg, 120 Rapid Release Softgels",
    price: 12.99,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/717owlFZGRL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Cranberry",
    description:
      "Cranberry Pills w/ Vitamin C by Nature's Bounty, Supports Urinary & Immune Health, 4200mg Cranberry Supplement, 250 Softgels",
    price: 25.5,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81WlqaD8%2BgL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Zinc",
    description: "Nature's Bounty Zinc 50 mg Caplets 100 ct",
    price: 9.99,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61UmgPqxQuS._AC_SL1001_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Vitamin C",
    description: "Nature’s Bounty C with Rose Hips 1000mg 100 Coated Caplets",
    price: 9.99,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71Ho2hGE5uL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Ginkgo Biloba",
    description:
      "Nature's Bounty Ginkgo Biloba Pills and Herbal Supplement, Supports Brain Function and Mental Alertness, 120mg, 100 Capsules",
    price: 9.99,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/711jfZrtfkL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Anxiety & Stress Relief ",
    description:
      "Nature's Bounty Anxiety & Stress Relief Ashwagandha Ksm-66 Tablets, 50 Count",
    price: 5.99,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61fSHLEDHyL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Turmeric",
    description: "Nature's Bounty Turmeric Curcumin Caps, 60 ct, Green (15417)",
    price: 7.85,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61dK4wrSKVL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty B-12",
    description:
      "Nature’s Bounty Vitamin B-12 Supplement, Supports Metabolism and Nervous System Health, 2500mcg, 75 Tablets",
    price: 8.83,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71mtM98b1KL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Apple Cider Vinegar",
    description:
      "Nature's Bounty Apple Cider Vinegar Dietary Supplement, Supports Energy Levels and Metabolism, Plant Based, 480mg, 200 Tablets",
    price: 20.68,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61C7Q47M4ZL._AC_SL1350_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Mini Fish Oil",
    description:
      "Nature’s Bounty Mini Fish Oil, 1290 mg, 900 mg of Omega-3, 90 Mini Coated Softgels, Unflavored",
    price: 9.99,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81lxCtdewkL._SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Absorbable Magnesium",
    description:
      "Nature's Bounty Absorbable Magnesium, 125 Liquid Softgels Capsules",
    price: 13.44,
    inventory: 25,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61JUu1JuxUL._AC_SL1000_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Melatonin",
    description:
      "Nature Made Melatonin 10 mg Tablets, Fast Dissolve Sleep Aid, Naturally Helps You Fall Asleep Faster, 300 Count",
    price: 28.29,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71K2U1wRQsL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made CoQ10",
    description:
      "Nature Made CoQ10 200 mg Softgels, 80 Count Value Size for Heart Health and Cellular Energy Production",
    price: 8.58,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71d8K4DhXPL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Vitamin E ",
    description:
      "Nature Made Vitamin E 180 mg (400 IU) dl-Alpha Softgels, 180 Count for Antioxidant Support",
    price: 15.99,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71FHYX1VPCL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Stress B-Complex",
    description:
      "Nature Made Stress B-Complex with Vitamin C and Zinc Tablets, 75 Count for Metabolic Health",
    price: 8.5,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71jG5Ur3FoL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Biotin",
    description: "Nature Made Biotin 1000 mcg Softgels, 120 Count",
    price: 13.55,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/718bLSGSjPL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Super C Immune Complex",
    description:
      "Nature Made Super C Immune Complex, 60 Tablets, Including Vitamin C, Vitamin A, Vitamin E, Vitamin D3, and Zinc Supplement, Excellent Source of Key Immune Support Nutrients",
    price: 8.95,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71yJp0HzJZL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Multi Complete",
    description:
      "Nature Made Multivitamin Tablets with Iron, 130 Count for Daily Nutritional Support",
    price: 14.85,
    inventory: 15,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71YVtEwkE0L._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Lemongrass",
    description:
      "Nature's Truth 100% Pure Lemongrass Essential Oil, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/414m7O5-FmL._AC_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Energy",
    description: "Nature's Truth Energy Essential Oil, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61rSsFYOp4L._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Mental Clarity",
    description:
      "Nature's Truth Essential Oil, Mental Clarity, 0.51 Fluid Ounce, Clear",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61BhkA1QrdL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Aromatherapy",
    description: "100% Pure Eucalyptus Oil (Eucalyptus Globulus).",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/617liutl33L._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Happiness",
    description: "Nature's Truth Essential Oil, Happiness, 0.51 Fl Oz",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61%2BYIS1cg2L._SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Frankincense",
    description:
      "Nature's Truth Natures Truth Aromatherapy Essential Oil, Frankincense, 0.51 Oz, 0.51 Oz",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71u8X%2Ba%2B7DL._SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Patchouli",
    description: "Natures Truth Essential Oil, Patchouli, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61AvvLV25-L._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Purify",
    description: "Nature's Truth Essential Oil, Purify, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61R1QAGe3YL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Thrive",
    description:
      "Nature's Truth Vitamins Essential Oil, 4 Thrive, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61qO1Kq-RFL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Orange Sweet",
    description:
      "Nature's Truth Vitamins Essential Oil, Orange, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61T%2Bw%2BKheJL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Lavender",
    description:
      "Nature's Truth Aromatherapy Pure Essential Oil, Lavender, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61nD3QdgNkL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Good Nite",
    description:
      "Nature's Truth Essential Oil, Good Nite, 0.51 Fluid Ounce, Multicolor",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/613D3abEY5L._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Peace",
    description: "Nature's Truth Essential Oil, Peace, 0.51 fl. oz.",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61bQW72dptL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Lemon",
    description:
      "Nature's Truth Vitamins Essential Oil, Lemon, 0.51 Fluid Ounce",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/616chGWyPHL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Nature's Truth Calming",
    description:
      "Nature's Truth Aromatherapy Calming 100% Pure Essential Oil, Citrus, 0.51 Fluid Ounce, Clear",
    price: 6.99,
    inventory: 10,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/714kVCih%2BGL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Good Morning Sunshine",
    description:
      "NOW Essential Oils, Good Morning Sunshine Aromatherapy Blend, Soothing Aromatherapy Scent, Blend of Pure Essential Oils, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 0,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61r8XFcXecL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Clear The Air",
    description: "NOW Clear The Air Essential Oil Blend, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61NlvTHrZjL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Cheer Up Buttercup",
    description: "NOW Cheer Up Buttercup Essential Oil Blend, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61SMd91wheL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Woodland Walk",
    description:
      "Now Essential Oils, Woodland Walk Oil Blend, Calming Attributes with a Fresh and Woodsy Scent, Steam Distilled, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71B1hb84G3L._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Lavender",
    description:
      "NOW Essential Oils, Lavender Oil, Soothing Aromatherapy Scent, Steam Distilled, 100% Pure, Vegan, Child Resistant Cap, 4-Ounce ",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61RpKHgIYdL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Smiles for Miles",
    description:
      "NOW Essential Oils, Smiles for Miles Aromatherapy Blend, Refreshing Aromatherapy Scent, Blend of Pure Essential Oils, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61MSXhOxhzL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Star Anise",
    description:
      "NOW Essential Oils, Anise Oil, Balancing Aromatherapy Scent, Steam Distilled, 100% Pure, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61dTjC642-L._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Spearmint",
    description:
      "NOW Essential Oils, Spearmint Oil, Stimulating Aromatherapy Scent, Steam Distilled, 100% Pure, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61spMGOW9iL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Peaceful Sleep",
    description:
      "NOW Essential Oils, Peaceful Sleep Oil Blend, Relaxing Aromatherapy Scent, Blend of Pure Essential Oils, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61AcbZgBTXL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Spike Lavender",
    description:
      "NOW Essential Oils, Spike Lavender, Floral Aromatherapy Scent, Steam Distilled, 100% Pure, Vegan, Child Resistant Cap, 1-Ounce",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61F78tjo5tL._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "NOW Orange Citrus Sinensis",
    description: "NOW Foods Orange Oil Sweet, 4 Ounce + 1 Glass Dropper",
    price: 7.97,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51HmJ9lrSVL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Tumeric Curcuma Longa",
    description:
      "Plant Therapy USDA Certified Organic Turmeric CO2 Essential Oil 10 mL (1/3 oz) 100% Pure, Undiluted, Therapeutic Grade",
    price: 6.95,
    inventory: 20,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71UMzJDkzZS._AC_SL1500_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Relax",
    description:
      "Plant Therapy Relax Essential Oil Blend for Sleep & Stress 100% Pure, Undiluted, Natural Aromatherapy, Therapeutic Grade 10 mL (1/3 oz)",
    price: 6.95,
    inventory: 20,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51F0cTq7iZL._SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Deodorizing Essential Oil Blend",
    description:
      "Plant Therapy Deodorizing Essential Oil Blend 30 mL (1 oz) 100% Pure, Undiluted, Therapeutic Grade",
    price: 6.95,
    inventory: 20,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51p24WuVrfL._SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Germ Fighter",
    description:
      "Plant Therapy Germ Fighter Essential Oil Blend 100% Pure, Undiluted, Natural Aromatherapy, Therapeutic Grade 30 mL (1 oz)",
    price: 6.95,
    inventory: 20,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51H3s4WbgwL._AC_SL1000_.jpg",
  },
  {
    categoryId: 1,
    name: "Plant Therapy Respir Aid",
    description:
      "Plant Therapy Respir Aid Essential Oil Blend 30 mL (1 oz) Sinus, Airway and Congestion Clearing Synergy Blend 100% Pure, Undiluted, Natural Aromatherapy, Therapeutic Grade",
    price: 6.95,
    inventory: 20,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51WavIfOitL._AC_SL1000_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Vitamin E",
    description:
      "Vitamin E by Nature's Bounty, Supports Immune Health & Antioxidant Health, 1000IU, 60 Softgels",
    price: 7.85,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71ZzdXToqpL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Vitamin D3",
    description:
      "Vitamin D3 by Nature’s Bounty for Immune Support. Vitamin D Provides Immune Support and Promotes Healthy Bones. 125 mcg (5000iu), 240 Softgels",
    price: 24.99,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/81gVEzsGyCL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Biotin",
    description:
      "Biotin by Nature's Bounty, Vitamin Supplement, Supports Metabolism for Energy and Healthy Hair, Skin, and Nails, 10000 mcg, 120 Rapid Release Softgels",
    price: 12.99,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/717owlFZGRL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Cranberry",
    description:
      "Cranberry Pills w/ Vitamin C by Nature's Bounty, Supports Urinary & Immune Health, 4200mg Cranberry Supplement, 250 Softgels",
    price: 25.5,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/81WlqaD8%2BgL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Zinc",
    description: "Nature's Bounty Zinc 50 mg Caplets 100 ct",
    price: 9.99,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61UmgPqxQuS._AC_SL1001_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Vitamin C",
    description: "Nature’s Bounty C with Rose Hips 1000mg 100 Coated Caplets",
    price: 9.99,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71Ho2hGE5uL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Ginkgo Biloba",
    description:
      "Nature's Bounty Ginkgo Biloba Pills and Herbal Supplement, Supports Brain Function and Mental Alertness, 120mg, 100 Capsules",
    price: 9.99,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/711jfZrtfkL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Anxiety & Stress Relief ",
    description:
      "Nature's Bounty Anxiety & Stress Relief Ashwagandha Ksm-66 Tablets, 50 Count",
    price: 5.99,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61fSHLEDHyL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Turmeric",
    description: "Nature's Bounty Turmeric Curcumin Caps, 60 ct, Green (15417)",
    price: 7.85,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61dK4wrSKVL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty B-12",
    description:
      "Nature’s Bounty Vitamin B-12 Supplement, Supports Metabolism and Nervous System Health, 2500mcg, 75 Tablets",
    price: 8.83,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71mtM98b1KL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Apple Cider Vinegar",
    description:
      "Nature's Bounty Apple Cider Vinegar Dietary Supplement, Supports Energy Levels and Metabolism, Plant Based, 480mg, 200 Tablets",
    price: 20.68,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61C7Q47M4ZL._AC_SL1350_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Mini Fish Oil",
    description:
      "Nature’s Bounty Mini Fish Oil, 1290 mg, 900 mg of Omega-3, 90 Mini Coated Softgels, Unflavored",
    price: 9.99,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/81lxCtdewkL._SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature's Bounty Absorbable Magnesium",
    description:
      "Nature's Bounty Absorbable Magnesium, 125 Liquid Softgels Capsules",
    price: 13.44,
    inventory: 25,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61JUu1JuxUL._AC_SL1000_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Melatonin",
    description:
      "Nature Made Melatonin 10 mg Tablets, Fast Dissolve Sleep Aid, Naturally Helps You Fall Asleep Faster, 300 Count",
    price: 28.29,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71K2U1wRQsL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made CoQ10",
    description:
      "Nature Made CoQ10 200 mg Softgels, 80 Count Value Size for Heart Health and Cellular Energy Production",
    price: 8.58,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71d8K4DhXPL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Vitamin E ",
    description:
      "Nature Made Vitamin E 180 mg (400 IU) dl-Alpha Softgels, 180 Count for Antioxidant Support",
    price: 15.99,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71FHYX1VPCL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Stress B-Complex",
    description:
      "Nature Made Stress B-Complex with Vitamin C and Zinc Tablets, 75 Count for Metabolic Health",
    price: 8.5,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71jG5Ur3FoL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Biotin",
    description: "Nature Made Biotin 1000 mcg Softgels, 120 Count",
    price: 13.55,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/718bLSGSjPL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Super C Immune Complex",
    description:
      "Nature Made Super C Immune Complex, 60 Tablets, Including Vitamin C, Vitamin A, Vitamin E, Vitamin D3, and Zinc Supplement, Excellent Source of Key Immune Support Nutrients",
    price: 8.95,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71yJp0HzJZL._AC_SL1500_.jpg",
  },
  {
    categoryId: 3,
    name: "Nature Made Multi Complete",
    description:
      "Nature Made Multivitamin Tablets with Iron, 130 Count for Daily Nutritional Support",
    price: 14.85,
    inventory: 15,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71YVtEwkE0L._AC_SL1500_.jpg",
  },
  {
    categoryId: 5,
    name: "California Gold Nutrition, Superfoods, Matcha Green Tea Powder",
    description: "4 oz (114 g) Powder",
    price: 24.01,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/cgn/cgn01310/v/5.jpg",
  },
  {
    name: "Matcha Road, Matcha + Vitamin C",
    description:
      "Superfood Drink Mix, Original Flavor, 10 Packets, 0.18 oz (5 g) Each",
    price: 9.29,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/mat/mat01484/v/0.jpg",
    categoryId: 5,
  },
  {
    name: "Yogi Tea, Stress Relief",
    description: "Honey Lavender, Caffeine Free, 16 Tea Bags, 1.02 oz (29 g)",
    price: 3.98,
    inventory: 30,
    imageUrl: "https://s3.images-iherb.com/ygt/ygt20454/v/35.jpg",
    categoryId: 5,
  },
  {
    name: "Yogi Tea, Skin DeTox",
    description: "Soothing Rose Hibiscus, 16 Tea Bags, 1.12 oz (32 g)",
    price: 3.98,
    inventory: 30,
    imageUrl: "https://s3.images-iherb.com/ygt/ygt20295/v/35.jpg",
    categoryId: 5,
  },
  {
    name: "Traditional Medicinals, Herbal Teas, Organic Dandelion Leaf & Root Tea",
    description: "Naturally Caffeine Free, 16 Wrapped Tea Bags, .99 oz (28 g)",
    price: 4.62,
    inventory: 60,
    imageUrl: "https://s3.images-iherb.com/tra/tra00235/v/3.jpg",
    categoryId: 5,
  },
  {
    name: "Traditional Medicinals, Organic Mother's Milk",
    description:
      "Original with Fennel & Fenugreek, Caffeine Free, 32 Wrapped Tea Bags, 1.98 oz (56 g)",
    price: 9.28,
    inventory: 10,
    imageUrl: "https://s3.images-iherb.com/tra/tra00252/v/30.jpg",
    categoryId: 5,
  },
  {
    name: "Traditional Medicinals, Organic Smooth Move",
    description:
      "Original with Senna, Caffeine Free, 16 Wrapped Tea Bags, 1.13 oz (32 g)",
    price: 4.62,
    inventory: 30,
    imageUrl: "https://s3.images-iherb.com/tra/tra00009/v/27.jpg",
    categoryId: 5,
  },
  {
    name: "21st Century, Herbal Slimming Tea, Honey Lemon",
    description: "Caffeine Free, 24 Tea Bags, 1.7 oz (48 g)",
    price: 3.03,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/cen/cen22361/v/23.jpg",
    categoryId: 5,
  },
  {
    name: "21st Century, Herbal Slimming Tea, Peppermint",
    description: "Caffeine Free, 24 Tea Bags, 1.7 oz (48 g)",
    price: 3.03,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/cen/cen22691/v/13.jpg",
    categoryId: 5,
  },
  {
    name: "Dynamic Health Laboratories, Certified Organic Apple Cider Vinegar Detox Tonic",
    description: "16 fl oz (473 ml)",
    price: 10.29,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/dnh/dnh65664/v/1.jpg",
    categoryId: 4,
  },
  {
    name: "Wedderspoon, Raw Apple Cider Vinegar with Monofloral, Manuka Honey",
    description: "25 fl oz (750 ml)",
    price: 10.12,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/wsp/wsp02264/v/21.jpg",
    categoryId: 4,
  },
  {
    name: "Dr. Mercola, Organic Keto Cider, Spicy",
    description: "16 oz (473 ml)",
    price: 21.51,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/mcl/mcl01822/v/20.jpg",
    categoryId: 4,
  },
  {
    name: "Hyland's, Nerve Tonic, Stress Relief",
    description: "100 Quick-Dissolving Tablets",
    price: 7.98,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/hyl/hyl30142/v/7.jpg",
    categoryId: 4,
  },
  {
    name: "Bioray, Liver Life, Revitalizing Liver Tonic",
    description: "4 fl oz (118 ml)",
    price: 52.31,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/bry/bry39511/v/7.jpg",
    categoryId: 4,
  },
  {
    name: "Swisse, Chlorophyll, Mixed Berry Flavor Liquid Tonic",
    description: "16.9 fl oz (500 ml)",
    price: 14.39,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/sww/sww14823/v/3.jpg",
    categoryId: 4,
  },
  {
    name: "Gaia Herbs, Kids, Tummy Tonic with Chamomile",
    description: "1 fl oz (30 ml)",
    price: 10.39,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/gai/gai39023/v/5.jpg",
    categoryId: 4,
  },
  {
    name: "Bioray, CytoFlora, Probiotic Immunity Tonic",
    description: "4 fl oz (118 ml)",
    price: 78.39,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/bry/bry00004/v/11.jpg",
    categoryId: 4,
  },
  {
    name: "Cheong Kwan Jang, Korean Red Ginseng Vital Tonic",
    description: "10 Bottles, 0.68 fl oz (20 ml) Each",
    price: 27.88,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/krg/krg01197/v/2.jpg",
    categoryId: 4,
  },
  {
    name: "Cheong Kwan Jang, Koreselect, Energy",
    description: "10 Sticks, 0.34 fl oz (10 ml) Each",
    price: 15.39,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/krg/krg01232/v/1.jpg",
    categoryId: 4,
  },
  {
    name: "Dragon Herbs, Return to Youth",
    description: "500 mg, 100 Veggie Caps",
    price: 22.39,
    inventory: 20,
    imageUrl: "https://s3.images-iherb.com/dra/dra00320/v/6.jpg",
    categoryId: 4,
  },
];

module.exports = { categoriesData, productData };
