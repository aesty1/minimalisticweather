import './Search.css';
import { Component } from 'react';
class Search extends Component {
    state = {
        data: []
    }
    onLabelChange = (e) => {
        this.setState({data: e.target.value})
    }
    handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            this.props.updateData(e.target.value)
        }
    }
    render() {
        return (
            <div className="field__container">
                <input onKeyDown={this.handleKeyDown}
                type="text"
                className="very_small_grey_text field"
                placeholder="Name the city.."></input>
            </div>
        )
    }
}

export default Search;