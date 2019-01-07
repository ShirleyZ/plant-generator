
var plantPart = [
  "leaves",
  "roots",
  "flowers",
  "seeds",
  "plants",
  "berries"
];

var plantClasses = [
  "Grasses",
  "Herbaceous",
  "Shrubs",
  "Trees"
];

var rarity = [
  "Common",
  "Common",
  "Common",
  "Common",
  "Common",
  "Uncommon",
  "Uncommon",
  "Uncommon",
  "Rare",
  "Rare",
  "Legendary"
];

var habitat = [
  "Grasslands",
  "Swamps",
  "Forests",
  "Mountains",
  "Hills",
  "Rivers",
  "Lakes",
  "Ocean",
];

var edible = [
  "edible",
  "edible",
  "poisonous",
  "unpalatable",
  "unpalatable",
];

var unpalatableFlavour = [
  "extremely bitter",
  "extremely bitter",
  "acidic",
  "bland",
  "bland",
  "unpleasant",
  "unpleasant",
];

var plantFlavour = [
  "extremely bitter",
  "sweet",
  "mild",
  "savoury",
  "bitter",
  "spicy",
  "aromatic"
];
var ediblePreparation = [
  "ground",
  "dried",
  "fresh",
  "tincture",
  "oil",
  "pickled",
  "jam"
];

var edibleUse = [
  "tea",
  "soups",
  "baking",
  "roasting",
  "seasoning"
]

var poisonSeverity = [
  "sickening",
  "damaging",
  "fatal",
];

var severityLabel = {
  "sickening": "can sicken the target",
  "damaging": "can cause substantial damage",
  "fatal": "can cause death",
};

var poisonMethod = [
  "ingested",
  "contact",
  "oil",
  "airborne"
];

var bodyPoisonPart = [
  "internal organs",
  "the lungs",
  "the heart",
  "the nervous system",
  "the skin",
  "the brain",
  "the digestive system",
  "the blood",
  "the target's sense of balance",
  "the target's perception",
  "the eyes",
];

var prepMethod = {
  "ingested": "ingested",
  "contact": "it touches the skin",
  "oil": "distilled into an oil",
  "tincture": "turned into a tincture",
  "airborne": "inhaled",
  "ground": "ground",
  "dried": "dried",
  "fresh": "fresh",
  "pickled": "pickled",
  "jam": "jam",
}

var nonPoisonUtility = [
  "none",
  "medicinal",
  "cooking",
  "dyes",
  "textiles",
  "religious",
  "cosmetic",
  "magical"
];
var poisonUtility = [
  "none",
  "medicinal",
  "cosmetic",
  "religious",
  "assassination/murder",
  "hunting/trapping",
  "battle",
  "magical"
];

var dyeColours = [
  "light blue",
  "deep blue",
  "teal",
  "light green",
  "deep green",
  "sap green",
  "yellow-green",
  "yellow",
  "red",
  "orange",
  "pink",
  "red-orange"
];
var cosmeticForm = [
  "powder",
  "paste",
  "toner",
  "tonic",
  "cream"
];
var cosmeticUses = [
  "to moisturise",
  "to colour",
  "to add shimmer",
  "to draw",
  "in perfume",
  "as hair/beard powder"
];
var medicinalForm = [
  "as a powder",
  "in a poultice",
  "fresh",
  "dried",
  "in soup",
  "as an oil",
];
var medicinalUses = [
  "healing",
  "anaesthetic",
  "anti-nausea",
  "anti-fungal",
  "anti-bacterial",
  "bone/marrow repair",
  "replenishes blood",
  "good for skin/healing scars"
];
var reiligiousUses = [
  "cleansing",
  "ritual",
  "offering",
  "symbolic",
  "incense",
  "experiencing"
];
var reiligiousUseLabel = {
  "cleansing": "to cleanse",
  "ritual": "as part of rituals",
  "offering": "as an offering",
  "symbolic": "to symbolise a deity",
  "incense": "as an incense",
  "experiencing": "to alter the mind's perception",
};
var magicalUses = [
  "banishing",
  "blessing",
  "elemental",
  "illusionary",
  "summoning"
];
var textileGrade = [
  "coarse",
  "rough",
  "okay",
  "soft",
  "very soft",
  "light",
  "wooly",
  "silky"
];

var textileAdjective = [
  "scratchy",
  "plush",
  "plain",
  "luxurious",
  "aromatic",
]

var textileItem = [
  "ropes",
  "outer garments",
  "inner garments",
  "furnishings",
  "bags and pouches",
  "sacks"
]

/**********************/
/** PLANT APPEARANCE **/
/**********************/

var plantFlowers = [
  "light purple",
  "dark purple",
  "yellow",
  "orange",
  "red",
  "pink",
  "deep blue",
  "sky blue",
  "white",
  "light green",
  "red orange",
  "blue purple",
  "small white",
  "small blue",
  "small pink",
  "large orange",
  "large blue",
  "small clusters of light pink",
  "small clusters of light blue",
  "small clusters of dark purple",
  "small clusters of white",
];

var plantFlowerCharacteristics = [
  "emit a sweet smell",
  "emit a sweet smell",
  "emit a mild scent",
  "emit a mild scent",
  "sway in the wind",
  "sway in the wind",
  "flutters when they fall",
  "flutters when they fall",
  "drip nectar",
  "attract butterflies",
  "attract flies",
  "attract moths",
  "blooms at night",
  "bloom in mornings",
  "bloom in evenings",
  "blooms at midday",
  "blooms all day",
  "blooms all day",
];

var plantLeaves = [
  "oval shaped",
  "long and slender",
  "tiny and alternating",
  "large and heavy",
  "frilly on the edges",
  "spotty",
];

var leafColour = [
  "green",
  "green",
  "green",
  "teal",
  "teal",
  "deep purple",
  "deep green",
  "deep green",
  "deep green",
  "light blue",
  "light blue",
  "pink",
  "pink",
];