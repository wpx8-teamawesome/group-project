import React from 'react';
import { StubProfile } from './Profile';
import { shallow } from 'enzyme';
import { createStore} from 'redux'; 

describe('Profile Should check following correctly', () => {
    let profile;
    const createUserStore = (user) => {
        return createStore(() => {
            return user
        })
    }
    const createProfile = (user) =>{ 
        const match = {
            params: {
                id: 3
            }
        }
        const loginUser = () => {}
        profile = shallow(<StubProfile user={user} match={match} loginUser={loginUser}/>);
    }

    it('checks not following when following array is empty', done => {
        const user = {
            id: 1,
            socialList: {
                following:[]
            }
        }
        const profileUser = {
            id: 3
        }

        createProfile(user)
        profile.setState({ profile : profileUser})
        expect(profile.instance().checkFollow()).toBe(false);
        done();
    })
    it('checks that user is correctly following', done => {
        const user = {
            id: 1,
            socialList: {
                following:[{id: 3}]
            }
        }
        const profileUser = {
            id: 3
        }
        createProfile(user);
        profile.setState({ profile: profileUser })
        expect(profile.instance().checkFollow()).toBe(true);
        done();
    })
    it('checks correct not following when user is not there', done => {
        const profileUser = {
            id: 3
        }
        createProfile({});  // empty user
        profile.setState({ profile: profileUser })
        expect(profile.instance().checkFollow()).toBe(false);
        done();
    })
    it('checks not following when following array does not exist', done => {
        const profileUser = {
            id: 3
        }
        const user = {
            id: 1,
            socialList: {
                //following:[{id: 3}] // missing array
            }
        }
        createProfile(user); 
        profile.setState({ profile: profileUser })
        expect(profile.instance().checkFollow()).toBe(false);
        done();
    })
})