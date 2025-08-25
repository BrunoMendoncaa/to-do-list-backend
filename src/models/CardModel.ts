interface INEWCARD{
      title: string
      description ?: string | undefined
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

      create(content: INEWCARD): ICARD{
            const {title, description} = content
            const id: string = crypto.randomUUID()
            const createdAt: Date = new Date()
            const updatedAt: undefined = undefined
            const finished: boolean = false

            const newCard: ICARD = {
                  id,
                  title,
                  description,
                  createdAt,
                  updatedAt,
                  finished
            }

            this.cards.push(newCard)
            
            return newCard
      }
}

export default new CardModel()
