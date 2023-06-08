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
        
        var pattern = /^(\p{L}+\s+)+\p{L}+$/u;
        if (e.keyCode === 13 && !pattern.test(e.target.value)) {
            console.log(e.target.value)
            // Вызов переданного метода updateData с переданным значением
            this.props.updateData(e.target.value);

        }
        else {
            console.log("ОШИБКА! Название города должно быть из одного слова")
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
