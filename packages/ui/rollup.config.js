import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  external: ['react', 'react-dom'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    json(),
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs(),
    babel({
      babelrc: true,
      extensions,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      plugins: ['@babel/transform-runtime'],
    }),
    terser(),
    sourceMaps(),
    url(),
    svgr({ exportType: 'named', babel: true }),
  ],
}
