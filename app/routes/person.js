import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const name = params.person_id;
    return {
      name
    };
  }
});
