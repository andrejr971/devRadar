import Dev from '../schemas/Dev';
import api from '../../services/api';
import parseStringAsArray from '../../utils/parseStringAsArray';

class DevController {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  }

  async show(req, res) {
    const { id } = req.params;

    const dev = await Dev.findOne({ _id: id });

    if (!dev) {
      return res.status(404).json('Usuário não encontrado');
    }

    return res.json(dev);
  }

  async store(req, res) {
    try {
      const { github_username, techs, latitude, longitude } = req.body;

      let dev = await Dev.findOne({ github_username });

      if (!dev) {
        const techsArray = parseStringAsArray(techs);

        const response = await api.get(`/users/${github_username}`);

        const { name = login, avatar_url, bio } = response.data;

        const location = {
          type: 'Point',
          coordinates: [longitude, latitude],
        };

        dev = await Dev.create({
          github_username,
          name,
          avatar_url,
          bio,
          techs: techsArray,
          location,
        });
      }

      return res.json(dev);
    } catch (err) {
      return res.status(500).json({ error: 'Ops...' });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    let dev = await Dev.findOne({
      _id: id,
    });

    if (!dev) {
      return res.status(404).json('Usuário não encontrado');
    }

    const { github_username, techs } = req.body;

    const arrayTechs = parseStringAsArray(techs);

    await dev.update({
      github_username,
      techs: arrayTechs,
    });

    return res.json(dev);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const dev = await Dev.findOne({
      _id: id,
    });

    if (!dev) {
      return res.status(404).json('Usuário não encontrado');
    }

    await dev.delete();

    return res.json({ message: 'Usuário deletado' });
  }
}

export default new DevController();
