import { useRouter } from 'next/router';
import { posts } from '../posts/posts';
export default function Home({ posts }) {
  const router = useRouter()

  return (
    <div className='container is-widescreen'>
      <span className='is-size-3 has-text-weight-light'>Articles</span>
      <div className='columns mt-5 is-multiline'>
          {
            posts.map(p => (
              <div key={p.id} className='column is-4-desktop is-6-tablet is-2-tablet'> 
                <div className='content is-clickable p-3'  style={{ border: '1px solid rgb(179, 179, 179)', borderRadius: '5px'}} onClick={() => router.push(`/posts/${p.id}`)}>
                  <h3 className='is-family-code'>{ p.title }</h3>
                  <p className="has-text-weight-light has-text-danger">{ p.date }</p>
                  <p className="is-italic">{ p.time }</p>
                  <p>{ p.description }</p>
                </div>
              </div>
            ))
          }
        
        
      </div>
    </div>
  )
}


export const getStaticProps = async () => {
  return {
      props: {
         posts: posts
      }
  }
}
