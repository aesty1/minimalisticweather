import './Search.css';
import { Component } from 'react';

class Search extends Component {
    state = {
        data: []
    }

    onLabelChange = (e) => {
        this.setState({ data: e.target.value });
    }

    handleKeyDown = (e) => {
        let word = e.target.value;
        // Разбиваем строку на массив слов
        var words = word.split(" ");

        // Выбираем первое слово
        var firstWord = words[0];

        // Создаем новую строку, содержащую только первое слово
        var result = firstWord;

        if (e.keyCode === 13) {
            console.log(result)
            // Вызов переданного метода updateData с переданным значением
            this.props.updateData(result);
            e.target.value = "";
        }
       
    }

    render() {
        return (
            <div className="field__container">
                <input
                    onKeyDown={this.handleKeyDown}
                    type="text"
                    className="very_small_grey_text field"
                    placeholder="Название города.."
                />
            </div>
        );
    }
}

export default Search;
