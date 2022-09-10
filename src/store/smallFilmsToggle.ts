import {makeAutoObservable} from "mobx";

class SmallFilmsToggle {
    input = '';
    small = false;
    pageCount = 2;
    constructor() {
        makeAutoObservable(this)
    }

    incrementPageCount() {
        this.pageCount += 1
    }

    onChangeInput(value: string) {
        this.input = value
    }

    toggleSmall() {
        this.small = !this.small
    }
}

export default new SmallFilmsToggle()