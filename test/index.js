const React = require('react');
const { shallow } = require('enzyme');
const { expect } = require('code');

const PrettyNumber = require('../lib');


describe('Pretty Numbers', () => {
    it('renders with basic props', (done) => {
        let number = shallow(<PrettyNumber number={10} />);
        
        expect(number.html()).to.contain("10");
        
        number = shallow(<PrettyNumber number={1000} />);
        
        expect(number.html()).to.contain("1,000");
        expect(number.html()).to.contain("1K");
        
        number = shallow(<PrettyNumber number={1500} />);
        
        expect(number.html()).to.contain("1,500");
        expect(number.html()).to.contain("1.5K");
        
        number = shallow(<PrettyNumber number={139000} />);
        
        expect(number.html()).to.contain("139,000");
        expect(number.html()).to.contain("139K");
        
        number = shallow(<PrettyNumber number={1490000} />);
        
        expect(number.html()).to.contain("1,490,000");
        expect(number.html()).to.contain("1.5M");
        
        done();
    });
    
    
    it('renders with custom units', (done) => {
        let units = ['A', 'B', 'C'];
        
        let number = shallow(<PrettyNumber number={10} units={units} />);
        
        expect(number.html()).to.contain("10A");
        
        number = shallow(<PrettyNumber number={1000} units={units} />);
        
        expect(number.html()).to.contain("1,000");
        expect(number.html()).to.contain("1B");
        
        number = shallow(<PrettyNumber number={1500} units={units} />);
        
        expect(number.html()).to.contain("1,500");
        expect(number.html()).to.contain("1.5B");
        
        number = shallow(<PrettyNumber number={139000} units={units} />);
        
        expect(number.html()).to.contain("139,000");
        expect(number.html()).to.contain("139B");
        
        number = shallow(<PrettyNumber number={1490000} units={units} />);
        
        expect(number.html()).to.contain("1,490,000");
        expect(number.html()).to.contain("1.5C");
        
        number = shallow(<PrettyNumber number={1222333444555} units={units} />);
        
        expect(number.html()).to.contain("1,222,333,444,555");
        expect(number.html()).to.contain("1.2");
        
        done();
    });
    
    
    it('renders without abbreviating', (done) => {
        let number = shallow(<PrettyNumber number={10} abbreviate={false} />);
        
        expect(number.html()).to.contain("10");
        
        number = shallow(<PrettyNumber number={1000} abbreviate={false} />);
        
        expect(number.html()).to.contain("1,000");
        expect(number.html()).to.not.contain("1K");
        
        number = shallow(<PrettyNumber number={1500} abbreviate={false} />);
        
        expect(number.html()).to.contain("1,500");
        expect(number.html()).to.not.contain("1.5K");
        
        number = shallow(<PrettyNumber number={139000} abbreviate={false} />);
        
        expect(number.html()).to.contain("139,000");
        expect(number.html()).to.not.contain("139K");
        
        number = shallow(<PrettyNumber number={1490000} abbreviate={false} />);
        
        expect(number.html()).to.contain("1,490,000");
        expect(number.html()).to.not.contain("1.5M");
        
        number = shallow(<PrettyNumber number={1222333444555} abbreviate={false} />);
        
        expect(number.html()).to.contain("1,222,333,444,555");
        expect(number.html()).to.not.contain("1.2");
        
        done();
    });
});