import checkPropTypes from 'check-prop-types';

/**
  * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper to search withing
  * @param {string} val - calue of data-test attribute for search
  * Return {ShallowWrapper} 
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`)
}


export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		'prop',
		component.name);
	expect(propError).toBeUndefined()
}