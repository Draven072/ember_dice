import Component from '@ember/component';

export default Component.extend({
    rollName: '',
    numberOfDice: 1,
    numberOfSides: 6,

    actions: {
      triggerRoll() {
        this.sendAction('roll', this.rollName, this.numberOfDice, this.numberOfSides);
        return false;
      }
    },

    didRender() {
        Materialize.updateTextFields();
    }

});
