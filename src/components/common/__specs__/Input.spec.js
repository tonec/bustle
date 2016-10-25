import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Input } from '../';

describe('<Input />', () => {

    it('should render', () => {
        const input = shallow(<Input
            label='Label Text'
        />);

        expect(input.containsMatchingElement(View)).to.equal(true);
        expect(input.containsMatchingElement(Text)).to.equal(true);
        expect(input.containsMatchingElement(TextInput)).to.equal(true);
    });

    it('should have a label with the correct label text', () => {
        const input = shallow(<Input
            label='Label text'
        />);

        expect(input.find(Text).props().children).to.equal('Label text');
    });

    it('should fire the onChangeText event whenever the text is changed', () => {
        const onChangeText = sinon.spy();
        const input = shallow(<Input
            label='Email'
            placeholder='me@example.com'
            onChangeText={onChangeText}
        />);

        input.find(TextInput).simulate('changeText', { target: { value: 'a' } });
        console.log(input.find(TextInput).props().value);
        expect(onChangeText.calledOnce).to.equal(true);
    });
});
