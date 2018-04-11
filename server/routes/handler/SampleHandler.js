import controller from '../../controllers/SampleController';

module.exports = {
  sample(req, res) {
    return controller.sample()
      .then(result => res.json(result));
  }
};