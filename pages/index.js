import BlogPost from '../components/blog-post-section'
import { posts } from '../posts/posts';
export default function Home({ posts }) {
  return (
    <div className='container is-widescreen'>
      <div className='columns mt-5 is-multiline'>
        <div className='column is-4-desktop is-6-tablet is-2-tablet'> 
          {
            posts.map(p => (
              <div className='content is-clickable p-3'  style={{ border: '1px solid rgb(179, 179, 179)', borderRadius: '5px'}}>
                <h3 className='is-family-code'>{ p.title }</h3>
                <p className="has-text-weight-light has-text-danger">{ p.date }</p>
                <p className="is-italic">{ p.time }</p>
                <p>{ p.description }</p>
              </div>
            ))
          }
        </div>
        <div className='column is-4-desktop is-6-tablet is-2-tablet'> 
          {
            posts.map(p => (
              <div className='content is-clickable p-3'  style={{ border: '1px solid rgb(179, 179, 179)', borderRadius: '5px'}}>
                <h3 className='is-family-code'>{ p.title }</h3>
                <p className="has-text-weight-light">{ p.date }</p>
                <p className="is-italic">{ p.time }</p>
                <p>{ p.description }</p>
              </div>
            ))
          }
        </div>
        <div className='column is-4-desktop is-6-tablet is-2-tablet'> 
          {
            posts.map(p => (
              <div className='content is-clickable p-3'  style={{ border: '1px solid rgb(179, 179, 179)', borderRadius: '5px'}}>
                <h3 className='is-family-code'>{ p.title }</h3>
                <p className="has-text-weight-light">{ p.date }</p>
                <p className="is-italic">{ p.time }</p>
                <p>{ p.description }</p>
              </div>
            ))
          }
        </div>
        <div className='column is-4-desktop is-6-tablet is-2-tablet'> 
          {
            posts.map(p => (
              <div className='content is-clickable p-3'  style={{ border: '1px solid rgb(179, 179, 179)', borderRadius: '5px'}}>
                <h3 className='is-family-code'>{ p.title }</h3>
                <p className="has-text-weight-light">{ p.date }</p>
                <p className="is-italic">{ p.time }</p>
                <p>{ p.description }</p>
              </div>
            ))
          }
        </div>
        <div className='column is-4-desktop is-6-tablet is-2-tablet'> 
          {
            posts.map(p => (
              <div className='content is-clickable p-3'  style={{ border: '1px solid rgb(179, 179, 179)', borderRadius: '5px'}}>
                <h3 className='is-family-code'>{ p.title }</h3>
                <p className="has-text-weight-light">{ p.date }</p>
                <p className="is-italic">{ p.time }</p>
                <p>{ p.description }</p>
              </div>
            ))
          }
        </div>
        
        
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
