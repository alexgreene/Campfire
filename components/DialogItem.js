var React = require('react');
var DialogItem = require('./DialogItem');
var moment = require('moment');

var DialogItem = React.createClass({

	render() {

		var _style_ = {
            padding: "10px 0px",
            WebkitAnimation: "fadein 1s", /* Safari, Chrome and Opera > 12.1 */
            MozAnimation: "fadein 1s", /* Firefox < 16 */
            msAnimation: "fadein 1s", /* Internet Explorer */
            OAnimation: "fadein 1s", /* Opera < 12.1 */
            animation: "fadein 1s",
        };

        var thing = (this.props.waiting === true) ? 
        			<div>	
        				<span className="loader__dot">.</span>
        				<span className="loader__dot">.</span>
        				<span className="loader__dot">.</span>
        			</div> :
        			this.props.text;

		return (
			<div style={_style_}>
				<span className="char">{this.props.char}<br/></span>
				<a className="message-item">
					{thing}
				</a>
			</div>
		)
	}
});

module.exports = DialogItem;
