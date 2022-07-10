import React from "react";

import {shallow} from "enzyme";

import Login from "./index";

describe("Unit testing for login Component",()=>{
    let wrapper;
    test("Username filling",()=>{
        wrapper = shallow('<Login/>');
        wrapper.find("input[type='text']").simulate('change',{target:{name:"uname",value:'murali'}});
        expect(wrapper.state('uname')).toEqual('murali');
    })
    test("Password filling",()=>{
        wrapper = shallow('<Login/>');
        wrapper.find("input[type='password']").simulate('change',{target:{name:"psw",value:'murali123'}});
        expect(wrapper.state('psw')).toEqual('murali123');
    })
});