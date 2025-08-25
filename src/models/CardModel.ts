interface INEWCARD{
      title: string
      description ?: string
}

interface ICARD extends INEWCARD{
      id: string
      createdAt: Date
      updatedAt: Date | undefined
      finished: boolean
}

class CardModel{
      cards: Array<ICARD>

      constructor(){
            this.cards = []
      }

      index(): ICARD[]{
            return this.cards
      }
}

export default new CardModel()
