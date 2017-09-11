export default Backbone.Router.extend({
  routes: {
    'about': 'render'
  },

  render() {
    // render view
    $('#page h2').html(`You're viewing the about page.`);
  }
});