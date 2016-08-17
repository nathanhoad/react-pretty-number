const React = require('react');


class PrettyNumber extends React.Component {
    constructor (props) {
        super(props);
        
        this.abbreviate = this.abbreviate.bind(this);
        this.delimit = this.delimit.bind(this);
    }
    
    
    abbreviate (number) {
        if (!number) return 0;
        
        let formatted_number = number;
        let unit_index = 0;
        
        while (Math.floor(formatted_number / 1000.0) >= 1) {
            // Jump up a 1000 bracket and round to 1 decimal
            formatted_number = Math.round(formatted_number / 100.0) / 10.0;
            unit_index += 1
        }
        
        let unit = this.props.units[unit_index] || '';
        
        return formatted_number.toFixed(1).replace(/\.0+$/, '') + unit;
    }
    
    
    delimit (number) {
        if (!number) return 0;
        
        let delimited_number = number.toLocaleString();
        
        return delimited_number.replace(/\.0+$/, '');
    }
    
    
    display () {
        if (this.props.abbreviate === false || this.props.units === false) {
            return this.delimit(this.props.number);
        } else {
            return this.abbreviate(this.props.number);
        }
    }
    
    
    render () {
        let { number } = this.props
        
        return (
            <span className={this.props.className} title={this.delimit(number)}>
                {this.display(number)}
            </span>
        );
    }
}


PrettyNumber.propTypes = {
    number: React.PropTypes.number.isRequired,
    abbreviate: React.PropTypes.boolean,
    units: React.PropTypes.array,
    className: React.PropTypes.string
};


PrettyNumber.defaultProps = {
    abbreviate: true,
    units: ['', 'K', 'M', 'B', 'T', 'Q'],
    className: ''
};


module.exports = PrettyNumber;