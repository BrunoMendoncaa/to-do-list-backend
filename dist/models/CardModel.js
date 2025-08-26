class CardModel {
    cards;
    constructor() {
        this.cards = [];
    }
    index() {
        return this.cards;
    }
    create(content) {
        const { title, description } = content;
        const id = crypto.randomUUID();
        const createdAt = new Date();
        const updatedAt = undefined;
        const finished = false;
        const newCard = {
            id,
            title,
            description,
            createdAt,
            updatedAt,
            finished
        };
        this.cards.push(newCard);
        return newCard;
    }
    getById(id) {
        const cardIndex = this.cards.findIndex(card => card.id == id);
        if (cardIndex < 0) {
            return;
        }
        const card = this.cards[cardIndex];
        return card;
    }
    delete(id) {
        let cardDeleted = false;
        const cardIndex = this.cards.findIndex(card => card.id == id);
        if (cardIndex < 0) {
            return cardDeleted;
        }
        this.cards = this.cards.filter(card => card.id != id);
        cardDeleted = true;
        return cardDeleted;
    }
    update(id, content) {
        const { title, description } = content;
        const card = this.cards.find(card => card.id == id);
        if (!card) {
            return;
        }
        if (title) {
            card['title'] = title;
        }
        if (description) {
            card['description'] = description;
        }
        card['updatedAt'] = new Date();
        return card;
    }
    status(id) {
        const card = this.cards.find(card => card.id == id);
        if (!card) {
            return false;
        }
        if (card.finished) {
            card['finished'] = false;
        }
        else {
            card['finished'] = true;
        }
        return true;
    }
}
export default new CardModel();
//# sourceMappingURL=CardModel.js.map