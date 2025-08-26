import CardModel from "../models/CardModel.js";
class CardController {
    async index(req, res) {
        const cards = await CardModel.index();
        res.json(cards);
    }
    async create(req, res) {
        const { title, description } = req.body;
        const newCard = await CardModel.create({ title, description });
        res.status(201).json(newCard);
    }
    async getById(req, res) {
        const id = req.params.id || '';
        const card = await CardModel.getById(id);
        if (!card) {
            return res.status(404).json({ error: 'Card não localizado.' });
        }
        return res.json(card);
    }
    async delete(req, res) {
        const id = req.params.id || '';
        const cardDeleted = await CardModel.delete(id);
        if (!cardDeleted) {
            return res.status(404).json({ error: 'Card não localizado' });
        }
        return res.send('OK');
    }
    async update(req, res) {
        const id = req.params.id || '';
        let title = undefined;
        let description = undefined;
        if (!req.body) {
            return res.status(400).json({ error: 'Nenhum item a ser modificado' });
        }
        if (req.body.title) {
            title = req.body.title;
        }
        if (req.body.description) {
            description = req.body.description;
        }
        const card = await CardModel.update(id, { title, description });
        if (!card) {
            return res.status(404).json({ error: 'Card não localizado' });
        }
        return res.json(card);
    }
    async status(req, res) {
        const id = req.params.id || '';
        const statusChanged = await CardModel.status(id);
        if (!statusChanged) {
            return res.status(404).json({ error: 'Card não localizado' });
        }
        res.send('OK');
    }
}
export default new CardController;
//# sourceMappingURL=CardController.js.map