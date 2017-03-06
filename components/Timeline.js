var React = require('react');
var DialogItem = require('./DialogItem');
var ActionItem = require('./ActionItem');
var NarrationItem = require('./NarrationItem');

var Timeline = React.createClass({

	componentDidUpdate() {
	 	React.findDOMNode(this.endOfList).scrollIntoView();
	},

	render(){

		var self = this;

		var storyboard = this.props.completed.map(function(m, index) {	 
			var waiting = self.props.waiting && index === self.props.completed.length - 1 ? true : false;
			switch (m.type) {
				case "dial": 
					return (<DialogItem key={index} text={m.text} char={m.thing} waiting={waiting}/>);
				case "act": 
					return (<ActionItem key={index} text={m.text} char={m.thing} waiting={waiting}/>);
				case "narr":
					return (<NarrationItem key={index} text={m.text} char={m.thing} waiting={waiting}/>);
			}			
		});

		return (
			<div className="timeline">
				{storyboard}
				<div ref={(div) => { this.endOfList = div; }}></div>
			</div>
		)
	}
});

module.exports = Timeline;