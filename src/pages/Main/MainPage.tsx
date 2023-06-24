import { fakeData } from '../../../fakeData'
import Post from '../../components/Post/Post'
import './mainPage.css'

export function MainPage() {
    const posts = fakeData.posts

    return (
        <>
            <h2>MainPage</h2>
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

