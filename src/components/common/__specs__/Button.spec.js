import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Button } from '../';

describe('<Button />', () => {

    it('should render', () => {
        const onPress = sinon.spy();
        const button = shallow(<Button onPress={onPress}>Click me</Button>);

        expect(button.containsMatchingElement(TouchableOpacity)).to.equal(true);
        expect(button.containsMatchingElement(Text)).to.equal(true);
    });

    it('should contain the text from children property', () => {
        const onPress = sinon.spy();
        const button = shallow(<Button onPress={onPress}>Click me</Button>);

        expect(button.find(Text).props().children).to.equal('Click me');
    });

    it('should handle button presses', () => {
        const onPress = sinon.spy();
        const button = shallow(<Button onPress={onPress}>Click me</Button>);

        button.simulate('press');

        expect(onPress.calledOnce).to.equal(true);
    });
});
