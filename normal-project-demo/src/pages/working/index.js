export default Backbone.Router.extend({
  routes: {
    'work': 'render'
  },

  render() {
    // render view
    $('#page h2').html(`You're viewing the working page.`);
  }
});