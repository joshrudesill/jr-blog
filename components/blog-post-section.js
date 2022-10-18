import React from "react";
import Counter from "./counter";
import Loader from "./funny-loader";
import JewelLogo from "./jewellogo";
import Search from "./search";



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
            <p className="is-family-code is-size-5">
                { 
                blocks.map((t, i) => {
                    if(t.indents > 0) {
                        return (
                            <React.Fragment key={i}>
                                <span >&nbsp;&nbsp;&nbsp;{ t.text }</span><br/>
                            </React.Fragment>
                        )
                    }
                    return (
                        <React.Fragment key={i}>
                            <span>
                                { t.text}
                            </span><br/>
                        </React.Fragment>
                        
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
    if(type === 'cc1') {
        return <Counter />
    }
    if(type === 'cc2') {
        return <Loader />
    }
    if(type === 'cc3') {
        return <Search />
    }
    if(type === 'cc4') {
        return <JewelLogo />
    }
}

export default BlogPostSection;