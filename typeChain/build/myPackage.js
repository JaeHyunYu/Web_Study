// @ts-check
// -> 타입스크립트에게 해당 파일이 자바스크립트이지만 한번 확인하라는 의미!(타입스크립트가 제공하는 보호장치를 받고싶을때!)
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param{string} config.url
 * @returns {boolean}
 *
 * 이렇게 comment만 넣어주는데 typescript가 아래 함수를 확인해줌!
 */
export function init(config) {
    return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}
