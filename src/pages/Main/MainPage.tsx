import { fakeData } from '../../../fakeData'

export function MainPage() {
    const posts = fakeData.posts

    return (
        <>
            <h2>MainPage</h2>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.user}</p>
                            <p>{post.content}</p>
                            <p>{post.artist}</p>
                            <p>{post.genre}</p>
                            <p>Will go {post.willGo} people</p>
                        </div>
                    )
                })
            }
        </>
    )
}

