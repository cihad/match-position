import { terser } from 'rollup-plugin-terser';

export default {
	input: 'index.js',
	output: [
		{
			file: 'dist/match-position.js',
			format: 'cjs',
			sourcemaps: true
		},
		{
			file: 'dist/match-position.min.js',
			format: 'iife',
			name: "MatchPosition",
			plugins: [terser()]
		},
	],
};