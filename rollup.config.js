import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import { uglify } from "rollup-plugin-uglify";

const plugins = [
  resolve(),
  commonjs(),
  eslint(),
  babel({
    exclude: 'node_modules/**', // 只编译源代码
  }),
  uglify()
]

const output = {
  name: 'fm',
  file: 'dist/fm.js',
  // format: 'umd',
  strict: false,
}

let config = [{
  input: 'src/index.js',
  output,
  plugins,
}]

export default config;
