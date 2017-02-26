var React = require('react');
var Search = require('./Search');
var MessageList = require('./MessageList');
var InteractionPanel = require('./InteractionPanel');

var App = React.createClass({

	getInitialState(){
		
		var messages = [
			{	w: "n",
				t: "\n",
				c: ""}, 
			{	w: "d",
				t: "Are you really Harry Potter?",
				c: "Ron"}, 
			{	w: "a",
				t: "Harry nodded.",
				c: "Harry"}, 
			{	w: "d",
				t: "Oh -well, I thought it might be one of Fred and George's jokes",
				c: "Ron"}, 
			{	w: "d",
				t: "And have you really got -- you know...",
				c: ""},
			{	w: "a",
				t: "He pointed at Harry's forehead.",
				c: ""},
			{	w: "a",
				t: "Harry pulled back his bangs to show the lightning scar.",
				c: "Harry"},
			{	w: "a",
				t: "Ron stared.",
				c: "Ron"},
			{	w: "d",
				t: "So that's where You-Know-Who-",
				c: ""},
			{	w: "d",
				t: "Yes",
				c: "Harry"},
			{	w: "d",
				t: "but I can't remember it.",
				c: ""},
			{	w: "d",
				t: "Nothing?",
				c: "Ron"},
			{	w: "d",
				waiting: 't',
				t: "_?_",
				a: ["Nothing.", "Nope.", "Just a bright green light.", "Bloody hell."],
				c: "Harry"},
			{	w: "d",
				t: "Are you really Harry Potter?",
				c: "Ron"},
			{	w: "d",
				t: "Are you really Harry Potter?",
				c: "Ron"},
			];

		return {
			messages: messages,
			cursor: 1,
		};
	},

	showNextMessage() {
		var checkNextCursorPos = this.state.cursor + 1
		if (checkNextCursorPos < this.state.messages.length) {
			this.setState({
				messages: this.state.messages,
				cursor: checkNextCursorPos
			});
		}
	},

	updateWaitingMessage(newText) {
		var messages = this.state.messages;
		var temp = messages[this.state.cursor - 1];
		temp.t = newText;
		temp.waiting = 'f';
		messages[this.state.cursor - 1] = temp
		this.setState({
			messages: messages,
			cursor: this.state.cursor
		});
	},

	render(){
		return (
			<div>
				<div className="main-panel">
					<h1>| Campfire</h1>
					<MessageList messages={this.state.messages} cursor={this.state.cursor}/>
				</div>
				<InteractionPanel currentMessage={this.state.messages[this.state.cursor - 1]} 
								  nextMessage={this.showNextMessage}
								  updateWaitingMessage={this.updateWaitingMessage}/>
			</div>
		);
	}
});

module.exports = App;

// <Search onSearch={this.addToMessages} />