import path from 'path';
import fs, { promises as fsPromise } from 'fs';
import matter from 'gray-matter'
import marked from 'marked'

const markDownDir = path.join(process.cwd(), 'markdown')   //process.cwd() -> 当前工作目录
export const getPosts = async () => {
	const fileNames = await fsPromise.readdir(markDownDir)
	return fileNames.map(fileName => {
		const fullPath = path.join(markDownDir, fileName)
		const id = fileName.replace(/\.md$/g, '')
		const text = fs.readFileSync(fullPath, 'utf-8')
		const { data: { title, date }, content } = matter(text)
		return { id, title, date }
	})
}

export const getPost = async (id: string) => {
	const fullPath = path.join(markDownDir, id + '.md')
	const text = fs.readFileSync(fullPath, 'utf-8')
	const { data: { title, date }, content } = matter(text)
	const htmlContent = marked(text)
	return JSON.parse(JSON.stringify({ id, title, date, content, htmlContent }))
}

export const getPostIds = async () => {
	const fileNames = await fsPromise.readdir(markDownDir)
	return fileNames.map(fileName => fileName.replace(/\.md$/g, ''))
}