import React from 'react';
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/create'
import { MainContainer, InputContainer } from './styled'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CreatePostForm = () => {

    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form)
        clear()
    }

    return <MainContainer>
        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'title'}
                    value={form.title}
                    onChange={onChange}
                    label={"Titulo"}
                    placeholder={'Título'}
                    fullWidth
                    required
                />

                <TextField
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    label={"Escreva aqui sua publicação"}
                    placeholder={'Post'}
                    margin={'dense'}
                    fullWidth
                    required

                />

                <Button
                    type={'submit'}
                    variant="contained"
                    color="primary"
                    disableElevation
                    fullWidth
                >Publicar</Button>
            </form>
        </InputContainer>
    </MainContainer>
}

export default CreatePostForm