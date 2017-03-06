var React = require('react');

var InteractionPanel = React.createClass({
    selected(next, newText) {
        if (newText) {
            this.props.updateWaitingMessage(newText);
            var self = this;
            setTimeout(function(){
                self.props.nextMessage(next);
            }, 1000);
        } else {
            this.props.nextMessage(next);
        }
        
    },

    render() {
        var currentMessage = this.props.currentMessage;
        if (this.props.waiting) {
            return (
                <div className="side-panel">
                    <button className="button four-choice teal" onClick={()=>this.selected(currentMessage.choices[0].next, currentMessage.choices[0].text)}>
                        {currentMessage.choices[0].text}</button>
                    <button className="button four-choice sprout" onClick={()=>this.selected(currentMessage.choices[1].next, currentMessage.choices[1].text)}>
                        {currentMessage.choices[1].text}</button>
                    <button className="button four-choice purple" onClick={()=>this.selected(currentMessage.choices[2].next, currentMessage.choices[2].text)}>
                        {currentMessage.choices[2].text}</button>
                    <button className="button four-choice crimson" onClick={()=>this.selected(currentMessage.choices[3].next, currentMessage.choices[3].text)}>
                        {currentMessage.choices[3].text}</button>
                </div>
            )
        } else {
            return (
                <div className="side-panel">
                    <button className="button no-choice" onClick={()=>this.selected(currentMessage.next)}>...</button>
                </div>
            )
        }

        
    }
});

module.exports = InteractionPanel;