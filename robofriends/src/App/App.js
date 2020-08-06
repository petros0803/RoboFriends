import React, { Component } from 'react';
import CardList from '../Card/CardList';
import SearchBox from '../SearchBox/SearchBox'
import './app.css'
import Scroll from '../SearchBox/Scroll'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { return response.json(); })
        .then(users => { this.setState({ robots: users }) })
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0) {
            return <p className = "f1 tc light-blue">Stay tuned, we are loading the page for you!</p>
        }
        else{
            return (
                <div className = "tc">
                    <h1 className = "f1">RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        {
                        (filteredRobots.length === 0) &&
                        <p className = "f1 light-blue">No robots were found! Try again.</p>
                        }
                        <CardList robots = {filteredRobots}/>  
                    </Scroll>  
                </div>
            );
        }
    }
}

export default App;