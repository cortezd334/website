import React from 'react';
import { Link } from 'react-router-dom'

export default function Blog({blog, profile}) {

    console.log(blog)
    console.log(profile)

    const haveBlogs = () => {
        if(blog.item) {
            return blog.item.map((post, index) => (
                <> 
                    <div className='card' key={index}>
                        <div className='card-image' style={{backgroundImage: 'url(${post.thumbnail})'}}>
                            <div className='authorimg'>
                                <a href={profile.profileurl} rel='noopener noreferrer' target='_blank' style={{backgroundImage: 'url(${profile.avtar})'}}>
                                    Written By Danira
                                </a>
                            </div>
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                <Link to={post.title}>{post.title}</Link>
                            </h5>
                            <p>{`${String(post.description.substring(0, 1000))}...`}</p>
                            <br/>
                            {post.author}
                            <br/>
                            <span className='text-muted'>
                                {/* {moment(post.pubDate).format('MMM DD, YYYY hh:mm')} */}
                            </span>
                        </div>
                    </div>
                </>
            ))
        }
    }
    return(
        <>
            <h2>Blog Posts</h2>
            <div className={'col-md-4 col-sm-6 col-xs-12 grid'}>
                {blog.isLoading? 'nothing yet' : haveBlogs()}
            </div>
        </>
    )
}