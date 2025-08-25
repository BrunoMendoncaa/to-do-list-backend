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

interface ICARDUPDATE {
      title ?: string | undefined
      description ?: string | undefined
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

      getById(id: string): ICARD | undefined{
            const cardIndex: number = this.cards.findIndex(card => card.id == id)
            if(cardIndex < 0){return}

            const card: ICARD | undefined = this.cards[cardIndex]
            return card
      }

      delete(id: string): boolean {
            let cardDeleted: boolean = false
            
            const cardIndex: number = this.cards.findIndex(card => card.id == id)
            if(cardIndex < 0){return cardDeleted}

            this.cards = this.cards.filter(card => card.id != id)
            cardDeleted = true

            return cardDeleted
      }

      update(id: string, content: ICARDUPDATE): ICARD | undefined{
            const {title, description} = content
            const card: ICARD | undefined = this.cards.find(card => card.id == id)
            if(!card){return}

            if(title){card['title'] = title}
            if(description){card['description'] = description}

            card['updatedAt'] = new Date()

            return card
      }
}


export default new CardModel()
