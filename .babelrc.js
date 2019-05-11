module.exports = {
	plugins: [
		[
			'babel-plugin-auto-import',
			{
				declarations: [{
						default: 'React',
						path: 'react'
					},
					{
						default: 'ReactDOM',
						path: 'react-dom'
					},
					{
						default: 'regeneratorRuntime',
						path: 'regenerator-runtime'
					},
				],
			},
		],
	],

	presets: [
		[
			'@babel/preset-env',
			{
				modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
			},
		],
		'@babel/preset-react',
	].filter(i => i),
}
