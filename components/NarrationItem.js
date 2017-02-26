var React = require('react');
var NarrationItem = require('./NarrationItem');
var moment = require('moment');

var NarrationItem = React.createClass({

    render() {

        var _style_ = {
            padding: "10px 0px",
            WebkitAnimation: "fadein 1s", /* Safari, Chrome and Opera > 12.1 */
            MozAnimation: "fadein 1s", /* Firefox < 16 */
            msAnimation: "fadein 1s", /* Internet Explorer */
            OAnimation: "fadein 1s", /* Opera < 12.1 */
            animation: "fadein 1s",
        };

        return (
            <div style={_style_}>
                <a className="message-item italic">
                    {this.props.text}
                </a>
            </div>
        )
    }
});

module.exports = NarrationItem;
