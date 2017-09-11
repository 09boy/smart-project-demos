export default Backbone.Router.extend({
  routes: {
    'home': 'render'
  },

  render() {
    $('#page h2').html(`You're on the home page.`);
  }
});
