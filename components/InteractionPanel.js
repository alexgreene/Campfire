var React = require('react');

var InteractionPanel = React.createClass({

    selected(newText) {
        this.props.updateWaitingMessage(newText)
        this.props.nextMessage();
    },

    render() {

        var currentMessage = this.props.currentMessage;

        if (currentMessage.waiting) {
            return (
                <div className="side-panel">
                    <button className="button four-choice teal" onClick={()=>this.selected(currentMessage.a[0])}>
                        {currentMessage.a[0]}</button>
                    <button className="button four-choice sprout" onClick={()=>this.selected(currentMessage.a[1])}>
                        {currentMessage.a[1]}</button>
                    <button className="button four-choice purple" onClick={()=>this.selected(currentMessage.a[2])}>
                        {currentMessage.a[2]}</button>
                    <button className="button four-choice crimson" onClick={()=>this.selected(currentMessage.a[3])}>
                        {currentMessage.a[3]}</button>
                </div>
            )
        } else {
            return (
                <div className="side-panel">
                    <button className="button no-choice" onClick={this.props.nextMessage}>...</button>
                </div>
            )
        }

        
    }
});

module.exports = InteractionPanel;