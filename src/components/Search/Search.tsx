import React, {ChangeEvent} from 'react';
import styles from './Search.module.css';
import search from '../../assets/images/searchIcon.svg';
import smallFilmsToggle from "../../store/smallFilmsToggle";
import {observer} from "mobx-react-lite";
import {debounce} from "lodash"

type searchProps = {
    searchFunc: (input: string) => Promise<void>
}

const Search: React.FC<searchProps> = observer(({ searchFunc }) => {

    const debouncedSearch = debounce((value: string) => {
        smallFilmsToggle.onChangeInput(value)
    }, 300)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(e.target.value)
    }

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchFunc(smallFilmsToggle.input)
        }
    }

    return (
        <div className={styles.inputContainer}>
            <input type="text"
                   placeholder={'Фильм'}
                   className={styles.searchInput}
                   onChange={handleInputChange} onKeyPress={(e) => {
                handleEnter(e)
            }}/>
            <div className={styles.buttonContainer}>
                <button type='submit' className={styles.button} onClick={() => searchFunc(smallFilmsToggle.input)}>
                    <img src={search} alt="Поиск" className={styles.searchIcon}/>
                </button>
            </div>
            <div className={styles.checkboxContainer}>
                <label className={styles.checkboxIos}>
                    <input type="checkbox" onChange={() => smallFilmsToggle.toggleSmall()}/>
                    <span className={styles.checkboxIosSwitch} />
                </label>
                <p className={styles.checkboxText}>Короткометражки</p>
            </div>
        </div>
    );
});

export default Search;