console.log("Hello comoponent")

var vm = new Vue({
  data: {
    plants: [],
    options: [],
    optionTypes: {
      utilityTypes: [
        "medicinal",
        "cooking",
        "dyes",
        "weaving/textiles",
        "religious",
        "cosmetic",
        "magical",
        "ornamental",
        "edible",
        "poisonous"
      ]
    }
  },
  methods: {
    colourOfPlantPart: function(plantPart) {
      var str = plantPart.replace(/ /g,"-");
      return "clr-"+str;
    },
    colourOfPlantUse: function(plantUse) {
      var str = plantUse.toLowerCase();
      return "clr-"+str;
    },
  }
}).$mount('#wrapper')


