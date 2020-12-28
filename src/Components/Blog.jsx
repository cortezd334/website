import React from 'react';
import { Link } from 'react-router-dom'
import ToText from '../utils/ToText'
export default function Blog({blog, profile}) {

    console.log(blog)
    console.log(profile)

    const haveBlogs = () => {
        if(blog.item) {
            return blog.item.map((post, index) => (
                <> 
                <div className={'col-md-4 col-sm-6 col-xs-12 grid'}>
                    <div className='card' key={index}>
                        <div className='card-image' style={{backgroundImage: `url(${post.thumbnail})`}}>
                            <div className='authorimg'>
                                <a href={profile.profileurl} rel='noopener noreferrer' target='_blank' style={{backgroundImage: `url(${profile.avtar})`}}>
                                    Written By Danira
                                </a>
                            </div>
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                {/* <Link to={post.title} className='textfiordblue'>{post.title}</Link> */}
                                <a href={post.link} className='textfiordblue' rel="noreferrer" target='_blank'>{post.title}</a>

                            </h5>
                            <p className='cardText'>{`${ToText(post.description.substring(0, 1000))}...`}</p>
                            <br/>
                        </div>
                    </div>
                </div>
                </>
            ))
        }
    }
    return(
        <>
            <h2>Blog Posts</h2>
            <div className='container'>
                {/* <div className='row'> */}
                    {blog.isLoading? 'nothing yet' : haveBlogs()}
                {/* </div> */}
            </div>
        </>
    )
}