console.log("Hello world!");

function genPlant() {
  console.log("=== New plant!");
  var plant = {
    traits: [],
    appearance: []
  };

  // Edibility
  plant.eating = roll(edible);
  if (plant.eating == "edible") {
    plant.traits.push({
      traitType: "Cooking",
      plantPart: roll(plantPart),
      flavour: roll(plantFlavour),
      prep: roll(plantPreparation)
    });
  } else if (plant.eating == "poisonous") {
    plant.traits.push({
      traitType: "Poisons",
      plantPart: roll(plantPart),
      severity: roll(poisonSeverity),
      method: roll(poisonMethod)
    })
  }

  // Utility
  if (plant.eating == "poisonous") {
    plant.utility = roll(poisonUtility);
  } else {
    plant.utility = roll(nonPoisonUtility);
  }

  if (plant.utility == "dyes") {
    plant.traits.push({
      traitType: "Dyes",
      plantPart: roll(plantPart),
      dyeColour: roll(dyeColours)
    })
  } else if (plant.utility == "cosmetic") {
    plant.traits.push({
      traitType: "Cosmetic",
      plantPart: roll(plantPart),
      cosmeticForm: roll(cosmeticForm),
      cosmeticUse: roll(cosmeticUses)
    })
  } else if (plant.utility == "medicinal") {
    plant.traits.push({
      traitType: "Medicine",
      plantPart: roll(plantPart),
      medicinalUse: roll(medicinalUses)
    })
  } else if (plant.utility == "religious") {
    plant.traits.push({
      traitType: "Religion",
      plantPart: roll(plantPart),
      religiousUse: roll(reiligiousUses)
    })
  } else if (plant.utility == "magical") {
    plant.traits.push({
      traitType: "Magic",
      plantPart: roll(plantPart),
      religiousUse: roll(reiligiousUses)
    })
  } else if (plant.utility == "textiles/weaving") {
    plant.traits.push({
      traitType: "Textiles",
      plantPart: roll(plantPart),
      textileGrade: roll(textileGrade)
    })
  }


  // Roll ornamental y/n
  // display plant
  console.log(plant);
  vm.plants.unshift(plant);
}

function roll (givenArray) {
  var index = Math.floor(Math.random() * (givenArray.length-1));
  // console.log("index: "+index);
  return givenArray[index];
}

var plantPart = ["leaves", "roots", "flowers", "seeds", "whole plant", "berries"];

var edible = ["edible", "poisonous", "unpalatable"];
var plantFlavour = ["sweet", "mild", "savoury","bitter","spicy", "aromatic"];
var plantPreparation = ["ground", "dried", "fresh", "tincture/oils", "pickled", "jam"];

var poisonSeverity = ["sickening","damaging","fatal"];
var poisonMethod = ["ingested", "contact", "oil", "breathed in"];

var nonPoisonUtility = ["none", "medicinal", "cooking", "dyes", "weaving/textiles", "religious", "cosmetic", "magical"];
var poisonUtility = ["none", "medicinal", "cosmetic", "religious", "assassination/murder", "hunting/trapping", "battle", "magical"];

var dyeColours = ["light blue", "deep blue", "teal", "light green", "deep green", "sap green", "yellow-green", "yellow", "red", "orange", "pink", "red-orange"];
var cosmeticForm = ["powder", "paste", "toner", "tonic", "cream"];
var cosmeticUses = ["moisturising", "colouring", "shimmer", "drawing/lining", "perfume", "hair/beard powder"];
var medicinalUses = ["healing", "anaesthetic", "anti-nausea", "anti-fungal", "anti-bacterial", "bone/marrow repair", "replenishes blood", "good for skin/healing scars"];
var reiligiousUses = ["cleansing", "ritual", "offering", "symbolic", "incense", "experiencing"];
var magicalUses = ["banishing", "blessing", "elemental", "illusionary", "summoning"];
var textileGrade = ["coarse", "rough", "okay", "soft", "very soft", "light", "wooly", "silky"];

var plantType = ["tree", "shrub", "herbaceous", "grass"];

// Plant styles correlate w/ healing plants ie lobed plants tend not to be poisonous except lookalikes