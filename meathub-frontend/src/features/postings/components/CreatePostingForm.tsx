import React, {useState} from 'react'
import { Box, Button, CircularProgress, Paper, Stack, TextField, Typography } from '@mui/material';
import { usePostings } from '@/features/postings/index.ts';

export const CreatePostingForm: React.FC = () => {
  const [postingName, setPostingName] = useState('');
  const [item, setItem] = useState('');
  const [price, setPrice] = useState<number>(0);
  const isSuccess = false;

  const {isLoading, createPosting} = usePostings()

  const handleCreatePostingClick = async () => {
    const payload = {postingName, item, price};
    await createPosting(payload);
  }

  return(
    <Box mt='1rem' mx='auto' width='32rem'>
      <Paper elevation={6} sx={{ padding: '3rem' }}>
        <Stack spacing={3}>
          <Typography variant='h4'>Create a new posting:</Typography>
          <TextField
            label='Posting name'
            variant='outlined'
            value={postingName}
            size='small'
            onChange={(e) => setPostingName(e.target.value)}
          />
          <TextField
            label='Item name'
            variant='outlined'
            value={item}
            size='small'
            onChange={(e) => setItem(e.target.value)}
          />
          <TextField
            label='Item price'
            variant='outlined'
            type='number'
            value={price}
            size='small'
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <Button size='medium' variant='contained' onClick={handleCreatePostingClick}>Create posting</Button>
          <Box display='flex' justifyContent='center'>
            {isLoading && <CircularProgress />}
          </Box>
          {isSuccess && <Typography>succes</Typography>}
        </Stack>
      </Paper>
    </Box>
  )
}
