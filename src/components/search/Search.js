import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
    state = {
        data: ''
    }

    onLabelChange = (e) => {
        this.setState({ data: e.target.value });
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            let word = this.state.data;
            // Разбиваем строку на массив слов
            var words = word.split(" ");

            // Выбираем первое слово
            var firstWord = words[0];

            // Вызов переданного метода updateData с переданным значением
            this.props.updateData(firstWord);

            // Очищаем поле ввода
            this.setState({ data: '' });
        }
    }

    render() {
        return (
            <div className="field__container">
                <input
                    onChange={this.onLabelChange}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.data}
                    type="text"
                    className="very_small_grey_text field"
                    placeholder="Название города.."
                />
            </div>
        );
    }
}

export default Search;
