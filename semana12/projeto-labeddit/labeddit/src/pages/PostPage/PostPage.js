import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostPage = () => {
    useProtectedPage()
    return (
        <div>Página de post</div>
    )
}

export default PostPage