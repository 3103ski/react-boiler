/**  These validators are used inside of /src/components/formComponents/FormInput.js
 *
 *   Unless you are creating more validation for that component, you should not need to edit this file.
 *   If you are not using ReactReduxForms on this project, you should be able to go ahead and delete this file.
 */

export const required = (val) => val && val.length;
export const maxLength = (len) => (val) => !val || val.length <= len;
export const minLength = (len) => (val) => val && val.length >= len;
export const isNumber = (val) => !isNaN(+val);
export const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
