import { Container } from '@mui/material'
import React from 'react'
import {CreatePostingForm} from '@/features/postings/index'

export const CreatePostingsPage: React.FC = () => {

  return(
    <Container maxWidth='lg'>
      <CreatePostingForm/>
    </Container>
  )
}
