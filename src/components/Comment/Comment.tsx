import { fakeData } from "../../../fakeData";
import { Comment } from "../../interfaces/Comment";
import './comment.css'


export default function Comment({content, user, likes, className}: Comment) {

    function getUserName(userId: number) {
		const user = fakeData.users.find((user) => user.id === userId)
    	return user ? user.name : 'default'
	}

  return (
    <div className={`comment ${className}`}>
		<p className='commentAuthor'>{getUserName(user)}</p>
		<p className="commentContent">{content}</p>
		<span>{likes.length} likes </span>
	</div>
  )
}
