import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

import png from 'assets/images/1.png'


export default function Home () {
	return (
		<div className="container">
			<h1>标题1</h1>
			<p>段落</p>
			<img src={png} alt=""/>
			
			<style jsx>{`
				h1 {
				color: blue;
				}
			`}</style>
		</div>
	)
}
