import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { StyledCard } from './styled';
import { commentVote } from '../../services/commentVote';

export const CommentCard = (props) => {

    const onClickVote = async (id, direction, userVote) => {
        commentVote(id, direction, userVote)
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
                </CardActions>
            </StyledCard>
    )
}

