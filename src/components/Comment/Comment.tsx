import { fakeData } from "../../../fakeData";
import { Comment } from "../../interfaces/Comment";
import './comment.css'


export default function Comment({content, user}: Comment) {
    function getUserName(userId: number) {
		const user = fakeData.users.find((user) => user.id === userId);
    	return user ? user.name : '';
	}

  return (
    <div className='comment'>
		<p className='commentAuthor'>{getUserName(user)}:</p>
		<p>{content}</p>
	</div>
  )
}
