import React from 'react';
import { shallow, mount } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import FooterComponent from './footer.component';

describe('FooterComponent', () => {
  it('should render with company deets', () => {
    const company = {name: 'cheese', href: 'test'};
    const el = shallow(<FooterComponent company={company}/>);
    chai.assert.equal(el.node.type, 'footer');

    const link = el.find('a');
    chai.assert.include(link.text(), company.name);
    console.log(link);
    // chai.assert.equal(link.node.props.href, company.href);
  });
});
