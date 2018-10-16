const chai = require('chai')
const assert = chai.assert
const should=chai.should()
const expect=chai.expect

describe('demo', function () {
    describe('Add', function () {
        before(function () {
            console.log('----before test')
        })
        after(function () {
            console.log('----after test')
        })
        beforeEach(function () {
            console.log('before each test method')
        })
        afterEach(function () {
            console.log('after each test method')
        })
        context('Senario 1', function () {
            it('Use assert', function () {
                var value = 'hello'
                assert.typeOf(value,'string')
                assert.equal(value,'hello')
                assert.lengthOf(value,5)
            })
            it('Use should', function () {
                var value = 'hello'
                value.should.be.equal('hello')
                value.should.exist.and.equal('hello').and.have.length(5)
                value.should.be.a('string')
                value.should.not.eq('xxx')
                value.should.have.length(5)

            })
            it('Use expect',function(){
                var value='hello'
                var number=10
                expect(number).to.be.at.most(20)
                expect(number).to.be.at.least(3)
                expect(number).to.be.at.within(3,20)
                expect(value).to.exist
                expect(value).to.be.a('string')
                expect(value).to.be.equal('hello')
                expect(value).to.have.length(5)
            })
        })
    })
})