import * as React from 'react'
import './avatar.css'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://avatars.githubusercontent.com/u/80864042?v=4"
      />
    </Stack>
  )
}
