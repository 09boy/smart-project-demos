export default Backbone.Router.extend({
  routes: {
    '*handleMissingRoute': 'render'
  },

  render() {
    // render view
    $('#page h2').html(`This is 404 page.`);
  }
});