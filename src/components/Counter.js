import React from 'react'
import{database} from '../firebase'

class Counter extends React.Component {
    state = {
        counter: 0
    }

    componentDidMount(){
        database.ref('/counter') //to nam zwraca referencję do danego miejsca
            .on(
                'value',
                //snapshot to aktualna migawka z bazy danych w momencie zajścia eventu 'once'
                (snapshot) => {
                    this.setState({
                            counter: snapshot.val()
                        })
                }
            )//jest to metoda która wygląda jak addEventListener, to tak jak byśmy mówili: słuchaj jeden raz
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>{}}>-</button>
                <button onClick={()=>{}}>+</button>
            </div>
        )
    }
}

export default Counter