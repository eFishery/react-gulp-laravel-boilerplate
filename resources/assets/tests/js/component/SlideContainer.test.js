// import React from 'react'

// import expect from 'expect';
// import { shallow } from 'enzyme'
// import sinon from 'sinon'

// import SlideContainer from '../../../js/component/SlideContainer'
// import SlideButtons from '../../../js/component/SlideButtons'
// import SlideContent from '../../../js/component/SlideContent'
// import SlideNumber from '../../../js/component/SlideNumber'

// describe('Components', () => {
// 	describe('SlideButtons', () => {
// 		// Props used in both tests
// 		const propsLeft = {
// 			onSlideClick: sinon.spy(),
// 			num: 1
// 		}

// 		const propsRight = {
// 			onSlideClick: sinon.spy(),
// 			num: 1
// 		}

// 		// The test
// 		it('simulates previous slide click only', () => {
// 			const wrapper = shallow(
// 				<SlideButtons {...propsLeft} />
// 			);

// 			wrapper.find('.btn-prev').simulate('click');
// 			expect(propsLeft.onSlideClick.calledOnce).toEqual(true);
// 			expect(propsRight.onSlideClick.callCount).toBe(0);
// 		});

// 		it('simulates next slide click only', () => {
// 			const wrapper = shallow(
// 				<SlideButtons {...propsRight} />
// 			);
			
// 			wrapper.find('.btn-next').simulate('click');
// 			expect(propsLeft.onSlideClick.callCount).toBe(1);
// 			expect(propsRight.onSlideClick.calledOnce).toEqual(true);
// 		});
// 	})

// 	describe('SlideContent', () => {
// 		it('ensures that the given text props equals to the text inside the component', () => {
// 			const text = "test text";
// 			const wrapper = shallow(
// 				<SlideContent text={text} />
// 			);

// 			expect(wrapper.find('.slide-content').text()).toBe("test text");
// 		});
// 	})

// 	describe('SlideNumber', () => {
// 		it('ensures that the given number props equals to the number inside the component', () => {
// 			const num = 1;
// 			const wrapper = shallow(
// 				<SlideNumber num={num} />
// 			);

// 			expect(wrapper.find('.slide-number').text()).toBe('1');
// 		});
// 	})
// })