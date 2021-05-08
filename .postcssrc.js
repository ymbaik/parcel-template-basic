//ESM  가저오기 내부내기 방식은 ESM의 import, export 이용
//import
// export {
//   plugins: [
//     autoprefixer
//   ]
// }

//CommonJS,  node.js 방식은 require(), module.exports 방식을 이용한다
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer
  ]
}
