/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}

    return function (a, b){
        const cle = `${a},${b}`;

        if(cache[cle]){
            return cache[cle] + "Ta se guardo"
        }

        const res = fn(a, b)
        cache[cle] = res
        return res + "Se guardo"
    }

}

const funcionalgo = (a, b) => a - b

const llamar = memoize(funcionalgo)

console.log(llamar(5, 8))
console.log(llamar(5, 8))
console.log(llamar(5, 8))



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */