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
        if (e.keyCode === 13) {
            // Вызов переданного метода updateData с переданным значением
            this.props.updateData(e.target.value);
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
