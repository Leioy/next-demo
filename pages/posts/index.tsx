import React from 'react'
import { getPosts } from '../../lib/posts'
import { NextPage } from 'next'
import Link from 'next/link'

type Props = {
	posts: Post[]
}

const PostsIndex: NextPage<Props> = (props) => {
	const { posts } = props
	return <div>
		<h1>文章列表</h1>
		{posts.map(post => <div key={post.id}>
			<Link href={`/posts/${post.id}`}>
				<a>{post.id}</a>
			</Link>
		</div>)}
	</div>
}
export default PostsIndex

export const getStaticProps = async () => {
	const posts = await getPosts()
	return {
		props: {
			posts: JSON.parse(JSON.stringify(posts)),
		},
	}
}