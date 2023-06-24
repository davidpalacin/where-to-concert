import { Post } from "../../interfaces/Post"
import { ChangeEvent, FormEvent, useState } from "react"
import './post.css'
import Comment from "../Comment/Comment"

export default function Post({ id, author, title, content, artist, genre, willGo, comments }: Post) {
	let [willGoNum, setWillGoNum] = useState(willGo)
	  const [newComment, setNewComment] = useState(''); // Estado para almacenar el nuevo comentario
	  const [commentList, setCommentList] = useState(comments); // Estado para almacenar el nuevo comentario


	function handleClick() {
		setWillGoNum(++willGoNum)
	}

	const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    	setNewComment(e.target.value);
  	}

	const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const trimmedComment = newComment.trim()
		if (trimmedComment === "") return
		commentList.push({ content: newComment, user: 1 })
		setCommentList(commentList);
		setNewComment('')
	}

	return (
		<article className='post' key={id}>
			<header>
				<h3>{ title }</h3>
			</header>
			<p> { author } </p>
			<p> { content } </p>
			<p> Artist: {artist} </p>
			<p> Genre: {genre} </p>
			<div className="willGoBox">
				<p> Will go { willGoNum } people </p>
				<button onClick={ handleClick }>I will go!</button>
			</div>
			<strong> Comments: </strong>
			<div className="commentsBox">
				{
					commentList.map((comment, index) => (
						<Comment key={index} {...comment} className={ index % 2 === 0 ? 'bgWhite' : 'bgGrey' } />
					))
				}
				<form className="formNewComment" onSubmit={handleCommentSubmit}>
          			<textarea className="newComment" value={newComment} onChange={handleCommentChange} placeholder="Escribe un comentario..." />
          			<button type="submit">Enviar</button>
        		</form>
			</div>
		</article>
	)
}