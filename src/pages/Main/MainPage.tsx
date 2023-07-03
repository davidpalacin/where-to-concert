import { fakeData } from '../../../fakeData'
import Navbar from '../../components/Navbar/Navbar'
import Post from '../../components/Post/Post'
import './mainPage.css'

export function MainPage() {
    const posts = fakeData.posts
    return (
        <>
            <Navbar />
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

