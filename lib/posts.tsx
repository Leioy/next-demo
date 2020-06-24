import path from 'path';
import fs, { promises as fsPromise } from 'fs';
import matter from 'gray-matter'

export const getPosts = async () => {
	const markDownDir = path.join(process.cwd(), 'markdown')   //process.cwd() -> 当前工作目录
	const fileNames = await fsPromise.readdir(markDownDir)
	return fileNames.map(fileName => {
		const fullPath = path.join(markDownDir, fileName)
		const id = fileName.replace(/\.md$/g, '')
		console.log('fullPath', fullPath)
		const text = fs.readFileSync(fullPath, 'utf-8')
		const { data: { title, date }, content } = matter(text)
		return { id, title, date }
	})
}