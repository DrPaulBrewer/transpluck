const transpluck = require("../index.js");
const should = require('should');
const assert = require('assert');

describe('', function(){
    it('transpluck is a function', function(){
	transpluck.should.be.type('function');
    });
    
    it("transpluck() returns undefined", function(){
	assert.ok(transpluck()===undefined);
    });
    
    it("transpluck({a:6,b:9}) returns undefined", function(){
	assert.ok(transpluck({a:6,b:9})===undefined);
    });

    it("transpluck([]) returns undefined", function(){
	assert.ok(transpluck([])===undefined);
    });

    it("transpluck([1,2,3,4,5]) returns undefined", function(){
	assert.ok(transpluck([1,2,3,4,5])===undefined);
    });

    it("transpluck([[1,1],[2,2]], 0) returns undefined ", function(){
	assert.ok(transpluck([[1,1],[2,2]], 0)===undefined);
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]]) returns {a:[1,2,8],b:[2,7,5],c:[3,1,6]}", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]]).should.deepEqual({a:[1,2,8],b:[2,7,5],c:[3,1,6]});
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]],['x','y','z']) returns {x:['a',1,2,8],y:['b',2,7,5],z:['c',3,1,6]}", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]],['x','y','z']).should.deepEqual({x:['a',1,2,8],y:['b',2,7,5],z:['c',3,1,6]});
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c'], 1) returns {a:[1,2,8],c:[3,1,6]}", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c'], 1).should.deepEqual({a:[1,2,8],c:[3,1,6]});
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c'], 2) returns {a:[2,8],c:[1,6]}", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c'], 2).should.deepEqual({a:[2,8],c:[1,6]});
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c'], 3) returns {a:[8],c:[6]}", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c'], 3).should.deepEqual({a:[8],c:[6]});
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c'], 4) returns {a:[],c:[]}", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c'], 4).should.deepEqual({a:[],c:[]});
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c']) returns {a:['a',1,2,8],c:['c',3,1,6]}", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], ['a',,'c']).should.deepEqual({a:['a',1,2,8],c:['c',3,1,6]});
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], {1:'bb'}, 1) returns {bb: [2,7,5]}", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], {1:'bb'}, 1).should.deepEqual({bb:[2,7,5]});
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], {pluck: ['b','c']}) returns {b: [2,7,5], c:[3,1,6]}", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], {pluck: ['b','c']}).should.deepEqual({b:[2,7,5], c:[3,1,6]});
    });

    it("transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], {pluck: ['x','c']}) returns {c:[3,1,6]}, ignoring missing x", function(){
	transpluck([['a','b','c'],[1,2,3],[2,7,1],[8,5,6]], {pluck: ['x','c']}).should.deepEqual({c:[3,1,6]});
    });
    
    

    
    
});
