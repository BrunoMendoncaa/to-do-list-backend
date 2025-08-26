interface INEWCARD {
    title: string;
    description?: string | undefined;
}
interface ICARD extends INEWCARD {
    id: string;
    createdAt: Date;
    updatedAt: Date | undefined;
    finished: boolean;
}
interface ICARDUPDATE {
    title?: string | undefined;
    description?: string | undefined;
}
declare class CardModel {
    cards: Array<ICARD>;
    constructor();
    index(): ICARD[];
    create(content: INEWCARD): ICARD;
    getById(id: string): ICARD | undefined;
    delete(id: string): boolean;
    update(id: string, content: ICARDUPDATE): ICARD | undefined;
    status(id: string): boolean;
}
declare const _default: CardModel;
export default _default;
//# sourceMappingURL=CardModel.d.ts.map