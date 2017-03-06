var React = require('react');
var Search = require('./Search');
var Timeline = require('./Timeline');
var InteractionPanel = require('./InteractionPanel');

var App = React.createClass({

    getInitialState(){

        var storyboard = {
            0: {    type: "narr",
                    text: "--\n",
                    thing: "",
                    next: 1},
            1: {    type: "dial",
                    text: "There is ",
                    thing: "You",
                    next: 2}, 
            2: {    type: "dial",
                    text: "_?_",
                    choices: [  {text: "a house", next: 3},
                                {text: "a cat", next: 3},
                                {text: "a bat", next: 3},
                                {text: "a frog", next: 3}],
                    thing: "You"},
            3: {    type: "dial",
                    text: "in ",
                    thing: "You",
                    next: 4}, 
            4: {    type: "dial",
                    text: "_?_",
                    choices: [  {text: "Atlanta", next: 5},
                                {text: "Hogwarts", next: 5},
                                {text: "New Orleans", next: 5},
                                {text: "the eastern woodland realm", next: 5}],
                    thing: "You"},
            5: {    type: "dial",
                    text: "they call the",
                    thing: "You",
                    next: 6}, 
            6: {    type: "dial",
                    text: "_?_",
                    choices: [  {text: "shooting star", next: 9},
                                {text: "rising sun", next: 8},
                                {text: "shooting gun", next: 9}, 
                                {text: "eastern woodland realm", next: 7}],
                    thing: "You"},
            7: {    type: "narr",
                    text: "and thus you fulfilled your dream of traveling to the eastern woodland realm.",
                    thing: "You",
                    next: 7}, 
            8: {    type: "narr",
                    text: "and as you complete the song, the ghost of Eric Burdon appears and smiles encouragingly.",
                    thing: "You",
                    next: 6}, 
            9: {    type: "act",
                    text: "and you died.",
                    thing: "You",
                    next: 6}, 
        };

        var timeline = [];
        
        return {
            storyboard: storyboard,
            timeline: timeline,
            cursor: 0,
            waiting: false
        };
    },

    showNextMessage(next_id) {

        var completed = this.state.timeline;
        var next = this.state.storyboard[next_id];
        completed.push({    type: next.type,
                            text: next.text,
                            thing: next.thing})
        this.setState({
            storyboard: this.state.storyboard,
            timeline: completed,
            cursor: next_id,
            waiting: next.choices ? true : false
        });
    },

    updateWaitingMessage(newText) {
        var completed = this.state.timeline;
        var temp = completed[completed.length - 1]
        temp.text = newText;
        completed[this.state.cursor - 1] = temp
        this.setState({
            storyboard: this.state.storyboard,
            timeline: completed,
            cursor: this.state.cursor,
            waiting: false
        });
    },

    render(){
        return (
            <div>
                <div className="main-panel">
                    <h1>| Campfire</h1>
                    <Timeline completed={this.state.timeline} waiting={this.state.waiting}/>
                </div>
                <InteractionPanel currentMessage={this.state.storyboard[this.state.cursor]} 
                                  nextMessage={this.showNextMessage}
                                  updateWaitingMessage={this.updateWaitingMessage}
                                  waiting={this.state.waiting}/>
            </div>
        );
    }
});

module.exports = App;

// <Search onSearch={this.addToMessages} />