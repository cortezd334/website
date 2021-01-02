import React from 'react';
// import { Link } from 'react-router-dom'
import ToText from '../utils/ToText'
export default function Blog({blog, profile}) {

    console.log(blog)
    console.log(profile)
    

    const haveBlogs = () => {
        if(blog.item) {
            return blog.item.map((post, index) => (
                <div className='grid card ab shadow' key={index}>
                    <div className='card-image tb' style={{backgroundImage: `url(${post.thumbnail})`}}>
                        <div className='authorimg'>
                            <a href={profile.profileurl} rel='noopener noreferrer' target='_blank' style={{backgroundImage: `url(${profile.avtar})`}}>
                                Written By Danira
                            </a>
                        </div>
                    </div>
                    {post.link.length > 150? (
                        <div className='card-body'>
                            <h5 className='card-title'>
                            <a href={post.link} className='textfiordblue' rel="noreferrer" target='_blank'>{post.title}</a></h5>
                            <p className='cardText'>{`${ToText(post.description.substring(0, 250))}...`}</p>
                        </div>
                    ) : (
                        <div className='card-body'>
                            <h5 className='card-title'>
                            <a href={post.link} className='textfiordblue' rel="noreferrer" target='_blank'>{post.title}</a></h5>
                            <p className='cardText'>{`${ToText(post.description.substring(0, 365))}...`}</p>
                        </div>
                    )}
                    
                </div>
            ))
        }
    }
    return(
        <div className='blogs'>
            <h2>Blog Posts</h2>
            <div className='container'>
                {blog.isLoading? 'nothing yet' : haveBlogs()}
            </div>
        </div>
    )
}