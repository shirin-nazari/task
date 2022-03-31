import React from 'react';
import { useDropzone } from 'react-dropzone';

function Basic(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return {
    /* <form
            onDrag={handleForm}
            onDragStart={handleForm}
            onDragEnd={handleForm}
            onDragOver={handleForm}
            onDragEnter={handleForm}
            onDragLeave={handleForm}
            onDrop={handleForm}
          > */
  };

  /* <input
            type="file"
            name="files[]"
            data-multiple-caption="{count} files selected"
            multiple
            onChange={(e) => {
              setUpload(true);
              console.log(e.target.value);

              console.log(e.target.files[0].mozFullPath);
            }}
          /> */
  /* <FileUploader
            handleChange={handleChange}
            style={uploader}
            name="file"
            hoverTitle="Drop here (:"
            types={fileTypes}
            onDrop={(e) => {
              setUpload(true);

              // dispatch(post(e.target.value));
              dispatch(add(e.name));
              console.log(e);
            }}
          /> */

  /* /* <input
              type="file"
              name="files[]"
              data-multiple-caption="{count} files selected"
              multiple
              onDrop={(e) => {
                setUpload(true);
                console.log(e.target.value);
                // dispatch(post(e.target.value));
                droppedFiles = e.originalEvent.dataTransfer.files;
                dispatch(add(e.target.files[0].name));
                console.log(e.target.files[0].name);
              }}
            /> */
  /* <Box
              sx={upload === false ? { display: 'none' } : { display: 'block' }}
            >
              <Typography>uploading</Typography>
              <Typography>Done!</Typography>
              <Typography>Error</Typography>
            </Box> */
  /* </form> */
}

export default Basic;
