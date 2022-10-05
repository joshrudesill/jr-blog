


const BlogPostSection = ({ textblock }) => {
    const { type } = textblock;
    if(type === 'paragraph') {
        const { text } = textblock;
        return (
            <p>
                { text }
            </p>
        )
    }
    if(type === 'link') {
        const { link, href } = textblock;
        return (
            <h5>
                <span className="is-family-code">Link:</span>
                <a href={href} target='_blank' rel='noreferrer' > { link } </a>
            </h5>
        )
    }
    if(type === 'specialstyle') {
        const { style, text } = textblock;
        return (
            <p className={ style }>
                { text }
            </p>
        )
    }
    if(type === 'code') {
        const { blocks } = textblock;
        return (
            <p className="is-family-code">
                { 
                blocks.map(t => {
                    if(t.indents > 0) {
                        return (
                            <>
                                <span>&nbsp;&nbsp;&nbsp;{t.text}</span><br/>
                            </>
                        )
                    }
                    return (
                        <>
                        <span>
                            { t.text}
                        </span><br/>
                        </>
                        
                    )
                }) 
                }
            </p>
        )
    }
    if(type === 'quote') {
        const { author, quote } = textblock;
        return (
        <blockquote>
            {`"` +  quote + `"`}<br/>
            -{ author }
        </blockquote>
        )
    }
}

export default BlogPostSection;