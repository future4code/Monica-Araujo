import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostCard } from '../../components/PostCard/PostCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import {useRequestData} from '../../hooks/useRequestData'
import { MainContainer } from './styled'
import { CommentCard } from '../../components/CommentCard/CommentCard'

export const PostPage = ({posts}) => {
    const [selectedPost, setSelectedPost] = useState({})
    const history = useHistory()

    useProtectedPage()

    const params = useParams()
    console.log(params)

    useEffect(() => {
        if(!params.id) {
            history.push('/')
        } else if(!selectedPost) {
            history.push('/')
        }
    }, [selectedPost])
    
    const postComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    
    useEffect(() => {
        const currentPost = posts.find((item) => { return item.id === params.id})
        setSelectedPost(currentPost)
    }, [])

    const mapedComments = postComments.map((comment) => {
        return(
            <div>
                <CommentCard post={comment}/>
            </div>
        ) 
    })
    
    return (
        <MainContainer>
            {selectedPost && <PostCard post={selectedPost}/>}
            {mapedComments}
        </MainContainer>
    )
}

export default PostPage