import React, {Component} from 'react'
// import Counter from './components/Counter'
import Chat from './components/Chat/Chat'
import Auth from './components/Auth'

class App extends Component {


    render() {

        return (
            // dzięki Auth poniżej w zależności od autoryzacji chat będzie się wyświetlać lub nie
            <Auth>
                <Chat/>
            </Auth>
        )
    }
}

export default App;
