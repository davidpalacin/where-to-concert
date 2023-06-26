import { Post } from "../../interfaces/Post"
import { ChangeEvent, useState } from "react"
import './post.css'
import Comment from "../Comment/Comment"

export default function Post({ id, author, title, content, artist, genre, willGo, comments }: Post) {
	let [willGoNum, setWillGoNum] = useState(willGo)
	const [newComment, setNewComment] = useState('')
	const [commentList, setCommentList] = useState(comments)
	const [fold, setFold] = useState(false) // variable used to fold and unfold comments


	function handleClick() {
		setWillGoNum(++willGoNum)
	}

	function handleCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
		setNewComment(e.target.value)
	}

	function handleCommentSubmit() {
		const trimmedComment = newComment.trim()
		if (trimmedComment === "") return
		commentList.push({ content: newComment, user: 3 })
		setCommentList(commentList)
		setFold(true)
		setNewComment('')
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleCommentSubmit();
		}
	}

	function toggleShowComments() {
		setFold(!fold)
	}

	return (
		<article className='post' key={id}>
			<header>
				<h3>{title}</h3>
			</header>
			<p> {author} </p>
			<p> {content} </p>
			<p> Artist: {artist} </p>
			<p> Genre: {genre} </p>
			<div className="willGoBox">
				<p> Will go {willGoNum} people </p>
				<button onClick={handleClick}>I will go!</button>
			</div>
			<strong> Comments </strong>
			<div className="commentsBox">
				<div className="commentsList">
					{commentList.slice(0, fold ? commentList.length : 1).map((comment, index) => (
						<Comment key={index} {...comment} className={index % 2 === 0 ? 'bgWhite' : 'bgGrey'} />
					))}
				</div>
				{commentList.length > 1 && (
					<button className="btnShowComments" onClick={toggleShowComments}>
						{fold ? "Hide comments" : "See more comments..."}
					</button>
				)}
				<form className="formNewComment">
					<textarea className="newComment" value={newComment} onChange={handleCommentChange} onKeyDown={handleKeyDown} placeholder="Escribe un comentario..." />
					<button className="btnComment" onClick={handleCommentSubmit} type="button">Enviar</button>
				</form>
			</div>
		</article>
	)
}