import { useRouter } from 'next/router';
import { posts } from '../posts/posts';
export default function Home({ posts }) {
  const router = useRouter()

  return (
    <div className='container is-widescreen has-background-white'>
      <div className='columns mt-6'>
        <div className='column'>
          <div className='content p-3'>
            <h4 className='is-family-code'>Hi, I am Josh Rudesill and I&apos;m searching for my first web developer job</h4>
            <p className='is-italic'>This blog was created to document my journey from where I started to where I am now and also where I want to be in the future</p>
            <p>I am currently searching for a job in web development. You can read about my story here on this blog or you can see my resume (upper right) for more information about me.
            <br/>
            You can get in contact with me at <span className='has-text-weight-semibold'>joshrudesill@gmail.com (preferred)</span> or at <span className='has-text-weight-semibold'>+1 (651) 491 5052</span> (I&apos;m on WhatsApp too)
            </p>
          </div>
        </div>
      </div>
      <span className='is-size-3 has-text-weight-light'>Articles</span>
      <div className='columns mt-5 is-multiline'>
          {
            posts.map(p => (
              <div key={p.id} className='column is-4-desktop is-6-tablet is-2-tablet'> 
                <div className='content is-clickable p-3 mx-1'  style={{ border: '1px solid rgb(179, 179, 179)', borderRadius: '5px'}} onClick={() => router.push(`/posts/${p.id}`)}>
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
