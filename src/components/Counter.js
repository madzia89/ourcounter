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
                    this.setState({counter: snapshot.val()})
                }
            )//jest to metoda która wygląda jak addEventListener, to tak jak byśmy mówili: słuchaj jeden raz
    }


    //to tutaj chcemy wkładac nowe dane:
    //to wystarczy zaby zapisać dane w bazie!!!:
    saveToDb = (data) => database.ref('/counter').set(data)


    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.saveToDb(this.state.counter -1)}>-</button>
                <button onClick={()=>this.saveToDb(this.state.counter +1)}>+</button>

            </div>
        )
    }
}

export default Counter