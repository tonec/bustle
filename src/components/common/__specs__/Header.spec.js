import React from 'react';
import { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import { Header } from '../';

describe('<Header />', () => {

    it('should render', () => {
        const card = shallow(<Header headerText='This is a header' />);

        expect(card.containsMatchingElement(View)).to.equal(true);
        expect(card.containsMatchingElement(Text)).to.equal(true);
    });

    it('should contain the correct title text', () => {
        const card = shallow(<Header headerText='This is a header' />);

        expect(card.find(Text).props().children).to.equal('This is a header');
    });
});
