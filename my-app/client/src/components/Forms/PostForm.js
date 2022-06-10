import React, { useState } from 'react';
import { CreatePostButton } from '../Buttons/AddButton.styled'
import { PostFormContainer, PostTitleContainer, PostTextArea, PostFormOptions } from './PostForm.styled'

import { useMutation, useQuery } from '@apollo/client';
import { CREATE_POST } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';

export default function PostForm() {
    // Querys username and karma
    // Sets hooks for data loading
    const { loading, data } = useQuery(GET_ME);

    const userData = data?.me || {};

    const username = userData.username
    const [postTitle, setTitle] = useState('');
    const [postDescription, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [duration, setDuration] = useState('');
    const [address, setAddress] = useState('');

    const [createPost] = useMutation(CREATE_POST);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('username', username)
            await createPost({
                variables: {
                    username: username,
                    postTitle: postTitle,
                    postDescription: postDescription,
                    postValue: 50,
                    duration: parseInt(duration),
                    difficulty: difficulty,
                    address: address
                }
            });
            setTitle('');
            setDescription('');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <PostFormContainer onSubmit={onSubmit}>
            <PostTitleContainer>
                <input
                    type='text'
                    maxLength={50}
                    placeholder='Title'
                    value={postTitle}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type='text'
                    maxLength={50}
                    placeholder='Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </PostTitleContainer>
            <PostTextArea
                maxLength={140}
                type='text'
                placeholder='What do you need help with?'
                value={postDescription}
                onChange={(e) => setDescription(e.target.value)}

            />
            <PostFormOptions>
                <label>Difficulty:</label>
                <select
                    id="difficulty"
                    name="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)} >
                    <option
                    >Please Select</option>
                    <option
                        value="Easy">Easy</option>
                    <option
                        value="Medium">Medium
                    </option>
                    <option
                        value="Hard">Hard
                    </option>
                </select>
                <hr />
                <label>Duration:</label>
                <select
                    id="duration"
                    name="difficulty"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                >
                    <option value="1">1 Hour</option>
                    <option value="2">2 Hours</option>
                    <option value="3">3 Hours</option>
                    <option value="4">4 Hours</option>
                </select>
            </PostFormOptions>
            <CreatePostButton
                type='submit'>
                Create Post
            </CreatePostButton>
        </PostFormContainer>
    )
}