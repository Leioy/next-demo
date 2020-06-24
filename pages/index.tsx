import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { UAParser } from 'ua-parser-js'

type Props = {
	browser: {
		name: string
		version: string
		major: string
	}
}
const Index: NextPage<Props> = (props) => {
	const { browser } = props
	return (
		<div className="container">
			<h1>你的浏览器是{browser.name}</h1>
		</div>
	)
}
export default Index
export const getServerSideProps: GetServerSideProps = async (context) => {
	const ua = context.req.headers['user-agent']
	const result = new UAParser(ua).getResult()
	return {
		props: {
			browser: result.browser,
		},
	}
}