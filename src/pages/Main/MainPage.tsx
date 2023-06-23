import { fakeData } from '../../../fakeData'
import './MainPage.css'

export function MainPage() {
    const posts = fakeData.posts

    return (
        <>
            <h2>MainPage</h2>
            <section className="posts">
                {
                    posts.map(post => {
                        return (
                            <article className='post' key={post.id}>
                                <header>
                                    <h3>{post.title}</h3>
                                </header>
                                <p>{post.user}</p>
                                <p>{post.content}</p>
                                <p>{post.artist}</p>
                                <p>{post.genre}</p>
                                <p>Will go {post.willGo} people</p>
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}

