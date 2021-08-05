import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import {StyledCard} from './styled'
import { postVote } from '../../services/postVote';
import { goToPostPage } from '../../routes/coordinator';

export const PostCard = (props) => {

    const history = useHistory()

    const onClickVote = async (id, direction, userVote) => {
        postVote(id, direction, userVote)
    }

    const onClickComment = (id) => {
        goToPostPage(history, id)
    }

    return (
        <StyledCard>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe">
                    U
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={props.post.title}
                subheader={props.post.username}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.post.body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <ArrowDownwardIcon onClick={() => onClickVote(props.post.id, -1, props.post.userVote)}/>
                </IconButton>
                <p>{props.post.voteSum}</p>
                <IconButton aria-label="share">
                <ArrowUpwardIcon onClick={() => onClickVote(props.post.id, 1, props.post.userVote)}/>
                </IconButton>
                <Button
                    variant="contained"
                    startIcon={<CommentIcon />}
                    onClick={() => onClickComment(props.post.id)}
                >
                    Comentar
                </Button>
            </CardActions>
        </StyledCard>
    )
}