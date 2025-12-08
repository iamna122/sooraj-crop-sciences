const products = [
  {
    id: 1,
    name: { en: "Sulphur 80% WDG", ur: "سلفر 80٪ ڈبلیو ڈی جی" },
    brand: { en: "Sulphur 80% WDG", ur: "سلفر 80٪ ڈبلیو ڈی جی" },
    category: { en: "Fungicide", ur: "فنگس کش" },
    packSize: { en: "1 KG", ur: "1 کلو" },
    image: require("../assets/products/Sulphur80WDG.jpg"),
    composition: [{ en: "Sulphur 80%", ur: "سلفر 80٪" }],
    crops: { en: "Wheat, Cotton, Sugarcane", ur: "گندم، کپاس، گنے" },
    usage: {
      en: [
        "Mix recommended quantity with water.",
        "Spray evenly on crop leaves.",
        "Repeat after 10–15 days if needed.",
      ],
      ur: [
        "تجویز کردہ مقدار پانی کے ساتھ مکس کریں۔",
        "فصل کے پتے پر یکساں سپرے کریں۔",
        "ضرورت پڑنے پر 10–15 دن بعد دہرائیں۔",
      ],
    },
    season: { en: "Spring and Summer", ur: "بہار اور گرمیوں میں" },
    problems: {
      en: "Fungal infections like powdery mildew",
      ur: "پاؤڈر میلوی جیسی فنگس کی بیماری",
    },
    details: {
      en: [
        "Dust-free, easy-to-use sulphur granules with instant water dispersion.",
        "Triple action: fungicide, miticide, and sulphur nutrient.",
        "Long-lasting effect without burning crops.",
      ],
      ur: [
        "گرد سے پاک سلفر دانے جو فوراً پانی میں حل ہو جاتے ہیں۔",
        "تین گنا اثر: فنگس کش، مائٹ کش اور غذائی جزو۔",
        "طویل عرصے تک اثر بغیر فصل جلائے۔",
      ],
    },
  },
  {
    id: 2,
    name: {
      en: "Benziothiozolinonel 1.5% EW",
      ur: "بینزیوتھیازولینون 1.5٪ ای ڈبلیو",
    },
    brand: { en: "NIPA", ur: "نیپا" },
    category: { en: "Fungicide", ur: "فنگس کش" },
    packSize: { en: "200 ML", ur: "200 ملی لیٹر" },
    image: require("../assets/products/NIPA.jpg"),
    composition: [
      { en: "Benziothiozolinone 1.5%", ur: "بینزیوتھیازولینون 1.5٪" },
    ],
    crops: { en: "Tomato, Potato, Pepper", ur: "ٹماٹر، آلو، مرچ" },
    usage: {
      en: [
        "Shake well before use.",
        "Spray on affected areas.",
        "Avoid spraying during flowering.",
      ],
      ur: [
        "استعمال سے پہلے اچھی طرح ہلائیں۔",
        "متاثرہ حصوں پر سپرے کریں۔",
        "کھلنے کے دوران سپرے کرنے سے گریز کریں۔",
      ],
    },
    season: { en: "All growing seasons", ur: "تمام بڑھتی ہوئی موسموں میں" },
    problems: {
      en: "Fungal and bacterial diseases",
      ur: "فنگس اور بیکٹیریا کی بیماریوں کے لیے",
    },
    details: {
      en: [
        "Broad-spectrum fungicide for bacterial and fungal diseases.",
        "Dual active ingredients for enhanced performance.",
        "Boosts plant immunity.",
      ],
      ur: [
        "بیکٹیریائی اور فنگس بیماریوں کے خلاف وسیع اثر۔",
        "دو طاقتور اجزاء پر مشتمل۔",
        "پودے کی قوت مدافعت میں اضافہ کرتا ہے۔",
      ],
    },
  },
  {
    id: 3,
    name: {
      en: "Dinotifuron + Pymetrozine",
      ur: "ڈائنوٹیفیورون + پائمیٹروزین",
    },
    brand: { en: "Rippet", ur: "ریپیٹ" },
    category: { en: "Insecticide", ur: "کیڑے مار" },
    packSize: { en: "100 GM", ur: "100 گرام" },
    image: require("../assets/products/Rippet.PNG"),
    composition: [
      { en: "Dinotifuron + Pymetrozine", ur: "ڈائنوٹیفیورون + پائمیٹروزین" },
    ],
    crops: { en: "Cotton, Vegetables", ur: "کپاس، سبزیاں" },
    usage: {
      en: [
        "Mix with water as instructed.",
        "Spray on crops early in the morning or late evening.",
        "Repeat after 7–10 days if infestation continues.",
      ],
      ur: [
        "ہدایات کے مطابق پانی کے ساتھ مکس کریں۔",
        "فصل پر صبح جلد یا شام دیر کو سپرے کریں۔",
        "اگر کیڑوں کی تعداد زیادہ ہو تو 7–10 دن بعد دہرائیں۔",
      ],
    },
    season: { en: "Summer", ur: "گرمیوں میں" },
    problems: {
      en: "Aphids, Whiteflies, Mealybugs",
      ur: "پتنگ، سفید مکھی، میلی بگز",
    },
    details: {
      en: [
        "Systemic insecticide protects new growth.",
        "Controls a wide range of pests.",
        "Improves crop vitality.",
      ],
      ur: [
        "نئی بڑھوتری کو محفوظ رکھنے والی دوا۔",
        "کیڑوں کی وسیع اقسام کے خلاف مؤثر۔",
        "فصل کی طاقت میں اضافہ کرتا ہے۔",
      ],
    },
  },
  {
    id: 4,
    name: { en: "Azoxystrobin 5.4% SC", ur: "ایزوکسسٹروبن 5.4٪ ایس سی" },
    brand: { en: "FACEUP 56% SC", ur: "فیس اپ 56٪ ایس سی" },
    category: { en: "Fungicide", ur: "فنگس کش" },
    packSize: { en: "250 ML", ur: "250 ملی لیٹر" },
    image: require("../assets/products/FaceUp.jpg"),
    composition: [{ en: "Azoxystrobin 5.4%", ur: "ایزوکسسٹروبن 5.4٪" }],
    crops: { en: "Potato, Tomato", ur: "آلو، ٹماٹر" },
    usage: {
      en: [
        "Use preventively or curatively.",
        "Spray on leaves until wet.",
        "Do not apply during high temperatures.",
      ],
      ur: [
        "بچاؤ یا علاج کے لیے استعمال کریں۔",
        "پتوں پر سپرے کریں جب تک گیلا نہ ہو جائے۔",
        "زیادہ گرمی میں نہ لگائیں۔",
      ],
    },
    season: { en: "Spring and Summer", ur: "بہار اور گرمیوں میں" },
    problems: { en: "Late blight, Downy mildew", ur: "لیٹ بلائیٹ، ڈاؤنی ملیو" },
    details: {
      en: [
        "Preventive and curative protection.",
        "Controls downy mildew and late blight.",
        "Perfect for potato and tomato crops.",
      ],
      ur: [
        "بچاؤ اور علاج دونوں کے لیے مؤثر۔",
        "ڈاؤنی ملیو اور لیٹ بلائیٹ پر قابو پاتا ہے۔",
        "آلو اور ٹماٹر کے لیے بہترین۔",
      ],
    },
  },
  {
    id: 5,
    name: { en: "Crop Supplement", ur: "فصل کا غذائی سپلیمنٹ" },
    brand: { en: "WhatsApp (Zinc)", ur: "واٹس ایپ (زنک)" },
    category: { en: "Micronutrients", ur: "خوردنی اجزاء" },
    packSize: { en: "4 KG", ur: "4 کلو" },
    image: require("../assets/products/WhatsApp.jpg"),
    composition: [{ en: "Zinc 10%", ur: "زنک 10٪" }],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: [
        "Mix with soil before planting.",
        "Apply during growth stage.",
        "Use recommended dosage only.",
      ],
      ur: [
        "پلانٹنگ سے پہلے مٹی کے ساتھ مکس کریں۔",
        "بڑھوتری کے دوران لگائیں۔",
        "صرف تجویز شدہ مقدار استعمال کریں۔",
      ],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Nutrient deficiencies", ur: "غذائی کمی" },
    details: {
      en: [
        "Strengthens roots and leaves.",
        "Improves resistance to stress.",
        "Enhances overall crop health.",
      ],
      ur: [
        "جڑوں اور پتوں کو مضبوط کرتا ہے۔",
        "دباؤ کے خلاف قوت مدافعت بڑھاتا ہے۔",
        "فصل کی مجموعی صحت بہتر بناتا ہے۔",
      ],
    },
  },
  // Add remaining products here in the same pattern
];

export default products;
