import React from 'react'
import { shallow } from 'enzyme'
import EventSearch from './EventSearch'

describe('search-test', () => {
    it('should return correct filter boolean', () => {
        const eventSearch = shallow(<EventSearch location={{ search:'?key=&city=Phoenix'}} />);
        const instance = eventSearch.instance();
        let event = { title: 'Different Keywords in Title than Description', description: 'this is an event.  Keywords are used here'}
        expect(false).toBe(instance.eventFilter(event, 'apples')); // not found
        expect(true).toBe(instance.eventFilter(event, 'Description')); // found caps
        expect(true).toBe(instance.eventFilter(event, 'description')); // found case in-sensitive

        expect(false).toBe(instance.eventFilter(event, 'multi keys not found')) // multiple keys not found
        expect(true).toBe(instance.eventFilter(event, 'milti keys found true      Keywords'));
    })
})



/*

Old user => user1
new changes => payload ...  { img: 'ghgh', name:'hgfhgf' }
Object.assign( user, payload );

patchUser = { ...user1, ...payload }

*/