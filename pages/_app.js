import React from 'react'
import Head from 'next/head'
import 'styles/global.css'

export default function App ({Component, pageProps}) {
	return <div className='jack'>
		<Head>
			<title>我的博客</title>
		</Head>
		<Component {...pageProps}/>
	</div>
}
