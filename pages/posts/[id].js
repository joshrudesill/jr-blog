import BlogPostSection from '../../components/blog-post-section';
import { posts } from '../../posts/posts';

const Post = ({ post }) => {
    return (
        <div className='container'>
            <div className='columns'>
                <div className='column is-8 '>
                    <div className='content mt-5 p-3'>   
                        <h1 className='is-family-monospace'>{ post.title }</h1>
                        <p className="has-text-weight-light">{ post.date }</p>
                        <p className="is-italic">{ post.time }</p>
                        {
                            post.textblocks.map((tb, index) => <BlogPostSection key={index} textblock={tb} />)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export const getStaticPaths = async () => {
    const paths = posts.map(post => ({
        params: { id: post.id.toString() },
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const post = posts.find(p => p.id === parseInt(params.id))
    return {
        props: {
           post: post
        }
    }
}


export default Post;