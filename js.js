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
      plantPart: roll(plantPart),
      flavor: roll(plantFlavour),
      prep: roll(plantPreparation)
    });
  } else if (plant.eating == "poisonous") {
    plant.traits.push({
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
      plantPart: roll(plantPart),
      dyeColour: roll(dyeColours)
    })
  } else if (plant.utility == "cosmetic") {
    plant.traits.push({
      plantPart: roll(plantPart),
      cosmeticForm: roll(cosmeticUses)
    })
  } else if (plant.utility == "medicinal") {
    plant.traits.push({
      plantPart: roll(plantPart),
      medicinalUse: roll(medicinalUses)
    })
  } else if (plant.utility == "religious") {
    plant.traits.push({
      religiousUse: roll(reiligiousUses)
    })
  } else if (plant.utility == "magical") {
    plant.traits.push({
      religiousUse: roll(reiligiousUses)
    })
  } else if (plant.utility == "textiles/weaving") {
    plant.traits.push({
      religiousUse: roll(reiligiousUses)
    })
  }


  // Roll ornamental y/n
  // display plant
  console.log(plant);
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
var cosmeticUses = ["powder", "paste", "toner", "tonic", "cream"];
var medicinalUses = ["healing", "anaesthetic", "anti-nausea", "anti-fungal", "anti-bacterial", "bone/marrow repair", "replenishes blood", "good for skin/healing scars"];
var reiligiousUses = ["cleansing", "ritual", "offering", "symbolic", "incense", "experiencing"];
var magicalUses = ["banishing", "blessing", "elemental", "illusionary", "summoning"];
var textileGrade = ["coarse", "rough", "okay", "soft", "very soft", "light", "wooly", "silky"];

var plantType = ["tree", "shrub", "herbaceous", "grass"];

// Plant styles correlate w/ healing plants ie lobed plants tend not to be poisonous except lookalikes