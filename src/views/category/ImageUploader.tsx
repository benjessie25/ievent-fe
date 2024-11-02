// components/ImageUploader.tsx
import { useState } from 'react';

import { Box, Button, Card, CardContent, CardHeader, Avatar, Typography, IconButton, List, ListItem } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { CloudUpload } from 'lucide-react'

import Close from '@menu/svg/Close'

const ImageUploader = () => {

  const [files, setFiles] = useState<File[]>([])

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  const removeFile = (fileName: string) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  const removeAll = () => {
    setFiles([]);
  };

  return (
    <Card>
      <CardHeader
        title="Product Image"
        action={
          <Typography component="a" href="#" sx={{ fontWeight: 'medium' }}>
            Add media from URL
          </Typography>
        }
      />
      <CardContent>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap={2}
          >
            <Avatar>
              <CloudUpload />
            </Avatar>
            <Typography variant="h4">Drag and Drop Your Image Here</Typography>
            <Typography>or</Typography>
            <Button variant="outlined" size="small">
              Browse Image
            </Button>
          </Box>
        </div>
        <List>
          {files.map((file, index) => (
            <ListItem key={index}>
              <Box display="flex" alignItems="center" gap={2}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  width={38}
                  height={38}
                />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                    {file.name}
                  </Typography>
                  <Typography variant="body2">
                    {(file.size / 1024).toFixed(1)} kb
                  </Typography>
                </Box>
                <IconButton onClick={() => removeFile(file.name)}>
                  <Close />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="outlined" color="error" onClick={removeAll}>
            Remove All
          </Button>
          <Button variant="contained" color="primary">
            Upload Files
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ImageUploader;
