import React, {Component} from 'react'
import Counter from './components/Counter'
import Chat from './components/Chat'

class App extends Component {


    render() {

        return (
            <div>
                <Counter/>
                <Chat/>
            </div>
        )
    }
}

export default App;
