import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import {BASE_URL} from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'
import { PostCard } from '../../components/PostCard/PostCard'
import {FeedWrapper} from './styled'
import CreatePostForm from './CreatePost'

const FeedPage = ({posts}) => {

    useProtectedPage()

    return (
        <div>
            <CreatePostForm/>
            <FeedWrapper>
                {posts.map(post => {
                    return (<PostCard post={post}/>)
                })}
            </FeedWrapper>
        </div>
    )
}

export default FeedPage
