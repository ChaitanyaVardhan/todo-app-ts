export interface Item {
    id: string,
    item: string,
    checked: boolean
}

export default class ListItem implements Item {

    constructor(private _id: string = '', private _item: string = '', private _checked = false) {
    }

    public get id() {
        return this._id;
    }

    public set id(value: string) {
        if (typeof value === 'string') {
            this._id = value;
        } else {
            throw new Error('value is not a string')
        }
    }

    public get item() {
        return this._item;
    }

    public set item(value: string){
        if (typeof value === 'string') {
            this._item = value;
        } else {
            throw new Error('value of item is not a sting')
        }
    }

    public get checked() {
        return this._checked;
    }

    public set checked(value: boolean) {
        if (typeof value === 'boolean') {
            this._checked = value;
        } else {
            throw new Error('value of checked is not boolean')
        }
    }
}