import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    saveRoll: function(rollName, numberOfDice, numberOfSides) {
        alert(`Rolling ${numberOfDice}D${numberOfSides} as "${rollName}"`);
    }
  }
});
