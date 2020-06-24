import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from 'styles/first-post.module.css'

console.log('执行了')
export default function FirstPost () {
	return (
		<div className={styles.wrapper}>
			first-post
			<hr/>
			回到首页 <Link href="/"><a>点击</a></Link>
		</div>
	)
}
