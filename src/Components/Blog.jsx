import React from 'react';
import ToText from '../utils/ToText'

export default function Blog({blog, profile}) {

    function truncateText(text, start, len) {
        return text.length > len ? `${text.slice(start, len)}...` : text;
    }

    const haveBlogs = () => {
        if(blog.item) {
            return blog.item.map((post, index) => (
                <div className='grid card ab border shadow' key={index}>
                    <div className='card-image tb' style={{backgroundImage: `url(${post.thumbnail})`}}>
                        <div className='authorImg'>
                            <a href={profile.profileUrl} rel='noopener noreferrer' target='_blank' style={{backgroundImage: `url(${profile.profileImage})`}}></a>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>
                        <a href={post.link} className='postTitle' rel="noreferrer" target='_blank'>{truncateText(post.title, 0, 80)}</a></h5>
                        <p className='cardText'>{truncateText(ToText(post.description), 0, 265)}</p>
                    </div>
                </div>
            ))
        }
    }
    
    return(
        <div className='blogs'>
            <h2>Blog Posts</h2>
            <div className='container auto30'>
                {blog.isLoading? 'Loading...' : haveBlogs()}
            </div>
        </div>
    )
}