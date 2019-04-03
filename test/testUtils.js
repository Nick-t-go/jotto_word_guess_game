

/**
  * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper to search withing
  * @param {string} val - calue of data-test attribute for search
  * Return {ShallowWrapper} 
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`)
}


