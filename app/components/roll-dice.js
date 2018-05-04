import Component from '@ember/component';

export default Component.extend({
    rollName: '',
    numberOfDice: 1,
    numberOfSides: 6,

    actions: {
      triggerRoll() {
        alert(`Rolling ${this.numberOfDice}D${this.numberOfSides} as "${this.rollName}"`);
        return false;
      }
    },

    didRender() {
        Materialize.updateTextFields();
    }

});
