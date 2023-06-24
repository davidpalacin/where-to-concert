import { Post } from "../../interfaces/Post";
import { useState } from "react"
import './post.css'
import Comment from "../Comment/Comment";

export default function Post({ id, author, title, content, artist, genre, willGo, comments }: Post) {
	let [willGoNum, setWillGoNum] = useState(willGo)

	function handleClick() {
		setWillGoNum(++willGoNum)
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
					comments.map((comment, index) => (
						<Comment key={index} {...comment} />
					))
				}
			</div>
		</article>
	)
}