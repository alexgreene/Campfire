var React = require('react');
var DialogItem = require('./DialogItem');
var ActionItem = require('./ActionItem');
var NarrationItem = require('./NarrationItem');
var DecisionItem = require('./DecisionItem');

var MessageList = React.createClass({

	componentDidUpdate() {
	 	React.findDOMNode(this.endOfList).scrollIntoView();
	},

	render(){

		var self = this;

		var messages = this.props.messages.slice(0,this.props.cursor).map(function(m, index){	   
			switch (m.w) {
				case "d": 
					return (<DialogItem key={index} text={m.t} char={m.c} waiting={m.waiting}/>);
				case "a": 
					return (<ActionItem key={index} text={m.t} char={m.c} waiting={m.waiting}/>);
				case "n":
					return (<NarrationItem key={index} text={m.t} char={m.c} waiting={m.waiting}/>);
			}			
		});

		if(!messages.length){
			return null;
		}

		return (
			<div className="timeline">
				{messages}
				<div ref={(div) => { this.endOfList = div; }}></div>
			</div>
		)
	}
});

module.exports = MessageList;