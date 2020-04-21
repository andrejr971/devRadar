import Dev from '../schemas/Dev';
import parseStringAsArray from '../../utils/parseStringAsArray';

class SearchController {
  async index(req, res) {
    //buscar devs num raio de 10km
    //filtrar por tenologias

    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json(devs);
  }
}

export default new SearchController();
