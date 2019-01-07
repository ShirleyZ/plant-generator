console.log("Hello world!");

function genPlant() {
  console.log("=== New plant!");
  var plant = {
    traits: [],
    appearance: [],
    class: roll(plantClasses),
    rarity: roll(rarity),
    habitat: roll(habitat),
  };


  // Edibility
  plant.eating = roll(edible);
  if (plant.eating == "edible") {
    var trait = {
      type: "cooking",
      typeAdjective: "cooking ingredients",
      form: roll(ediblePreparation),
      plantPart: roll(plantPart),
      flavour: roll(plantFlavour),
      typeUse: roll(edibleUse),
    };
    trait.prepMethod = prepMethod[trait.form];
    plant.traits.push(trait);
  } else if (plant.eating == "poisonous") {
    var trait = {
      type: "poisons",
      typeAdjective: "poisonous",
      plantPart: roll(plantPart),
      severity: roll(poisonSeverity),
      method: roll(poisonMethod),
      bodyPart: roll(bodyPoisonPart),
    };
    trait.prepMethod = prepMethod[trait.method];
    trait.severityLabel = severityLabel[trait.severity];
    plant.traits.push(trait);
  } else if (plant.eating == "unpalatable") {
    var trait = {
      type: "unpalatable",
      typeAdjective: "unpalatable",
      plantPart: "plants",
      flavour: roll(unpalatableFlavour)
    };
    plant.traits.push(trait);
  }

  // Utility
  if (plant.eating == "poisonous") {
    plant.utility = roll(poisonUtility);
  } else {
    plant.utility = roll(nonPoisonUtility);
  }

  if (plant.utility == "dyes") {
    plant.traits.push({
      type: "dyes",
      typeAdjective: "used in dye-making",
      plantPart: roll(plantPart),
      dyeColour: roll(dyeColours)
    })
  } else if (plant.utility == "cosmetic") {
    plant.traits.push({
      type: "cosmetic",
      typeAdjective: "a cosmetic product",
      plantPart: roll(plantPart),
      cosmeticForm: roll(cosmeticForm),
      cosmeticUse: roll(cosmeticUses),
    })
  } else if (plant.utility == "medicinal") {
    plant.traits.push({
      type: "medicine",
      typeAdjective: "medicinal",
      plantPart: roll(plantPart),
      medicinalUse: roll(medicinalUses),
      form: roll(medicinalForm)
    })
  } else if (plant.utility == "religious") {
    var trait = {
      type: "religion",
      typeAdjective: "religiously significant",
      plantPart: roll(plantPart),
      religiousUse: roll(reiligiousUses)
    }
    trait.religiousUseLabel = reiligiousUseLabel[trait.religiousUse];
    plant.traits.push(trait);
  } else if (plant.utility == "magical") {
    plant.traits.push({
      type: "magic",
      typeAdjective: "magical",
      plantPart: roll(plantPart),
      religiousUse: roll(reiligiousUses),
      religiousUseLabel: roll(reiligiousUseLabel)
    })
  } else if (plant.utility == "textiles") {
    plant.traits.push({
      type: "textiles",
      typeAdjective: "used in textiles",
      plantPart: roll(plantPart),
      textileGrade: roll(textileGrade),
      textileAdjective: roll(textileAdjective),
      textileItems: roll(textileItem)
    })
  }


  // Roll ornamental y/n
  plant.ornamental = roll([true, false]);

  // Appearance
  plant.appearance = {
    flowers: roll(plantFlowers),
    flowerAction: roll(plantFlowerCharacteristics),
    leaves: roll(plantLeaves),
    leafColour: roll(leafColour)
  }
  // display plant
  console.log(plant);
  vm.plants.unshift(plant);
}

function roll (givenArray) {
  var index = Math.floor(Math.random() * (givenArray.length-1));
  // console.log("index: "+index);
  return givenArray[index];
}

// Plant styles correlate w/ healing plants ie lobed plants tend not to be poisonous except lookalikes