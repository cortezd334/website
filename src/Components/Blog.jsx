import React from 'react';
import ToText from '../utils/ToText'

export default function Blog({blog, profile}) {

    const haveBlogs = () => {
        if(blog.item) {
            return blog.item.map((post, index) => (
                <div className='grid card ab shadow' key={index}>
                    <div className='card-image tb' style={{backgroundImage: `url(${post.thumbnail})`}}>
                        <div className='authorImg'>
                            <a href={profile.profileUrl} rel='noopener noreferrer' target='_blank' style={{backgroundImage: `url(${profile.profileImage})`}}></a>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>
                        <a href={post.link} className='postTitle' rel="noreferrer" target='_blank'>{post.title}</a></h5>
                        <p className='cardText'>{`${ToText(post.description.substring(0, 1000))}...`}</p>
                    </div>
                </div>
            ))
        }
    }
    
    return(
        <div className='blogs'>
            <h2>Blog Posts</h2>
            <div className='container'>
                {blog.isLoading? 'Loading...' : haveBlogs()}
            </div>
        </div>
    )
}




// {post.link.length > 150? (
//     <div className='card-body'>
//         <h5 className='card-title'>
//         <a href={post.link} className='postTitle' rel="noreferrer" target='_blank'>{post.title}</a></h5>
//         <p className='cardText'>{`${ToText(post.description.substring(0, 250))}...`}</p>
//     </div>
// ) : (
//     <div className='card-body'>
//         <h5 className='card-title'>
//         <a href={post.link} className='postTitle' rel="noreferrer" target='_blank'>{post.title}</a></h5>
//         <p className='cardText'>{`${ToText(post.description.substring(0, 365))}...`}</p>
//     </div>
// )}