import React, {Component} from 'react';

class App extends Component {
    state = {
        counter: 0
    }

    componentDidMount () {
        this.readFromDb()
}

readFromDb = () => {
    fetch('https://jfddl4-sandbox.firebaseio.com/magda/counter.json',
        {
            method:"GET"
        }
    )
        .then(response => response.json())
        .then(data => (
            this.setState({
                counter: data
            })
        ))
}
    minusBtn = () => {
        fetch('https://jfddl4-sandbox.firebaseio.com/magda/counter/.json',
            {
                method: "PUT",
                body: JSON.stringify((this.state.counter - 1))
            })
            .then(() => this.readFromDb())
    }

    plusBtn = () => {
        fetch('https://jfddl4-sandbox.firebaseio.com/magda/counter/.json',
            {
                method: "PUT",
                body: JSON.stringify(this.state.counter + 1)
            })
            .then(()=> this.readFromDb())
    }


    render() {

        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.minusBtn}> -</button>
                <button onClick={this.plusBtn}> +</button>

            </div>
        )
    }
}

export default App;
