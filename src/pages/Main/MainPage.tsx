import { fakeData } from '../../../fakeData'
import Post from '../../components/Post/Post'
import './mainPage.css'
import { getUser } from '../../utils/getUser'

export function MainPage() {
    const posts = fakeData.posts
    const user = getUser()

    return (
        <>
            <h2>MainPage - {user.name}</h2>
            <section className="posts">
                {
                    posts.map(post => {
                        return (
                            <Post key={post.id} {...post} />
                        )
                    })
                }
            </section>
        </>
    )
}

