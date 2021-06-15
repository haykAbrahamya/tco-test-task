import React from 'react'
import ReactDropzone from 'react-dropzone'
import cx from 'classnames'


import * as S from './Dropzone.styles'
import uploadIcon from '../../../../images/upload.svg'
import removeIcon from '../../../../images/remove.svg'

export const Dropzone = ({
  onDrop,
  images,
  onRemove
}) => {
  return (
    <ReactDropzone
      multiple={false}
      onDrop={file => onDrop(file)}
      maxSize={5242880}
      className="upload-container"
      accept="image/jpeg, image/png"
      activeClassName='active'
    >
      {
        ({
          error,
          isDragActive,
          isDragReject,
          fileRejections,
          getInputProps,
          getRootProps
        }) => {
          return (
            <S.DropzoneContainer
              className={cx({
                empty: !images.length,
                active: isDragActive,
                reject: isDragReject
              })}
              {...getRootProps()}
            >
              <input {...getInputProps()}/>
              {
                !images.length
                  ? <S.EmptyDropzoneContainer>
                      <S.UploadIconContainer>
                        <img src={uploadIcon} alt='uploadIcon'/>
                      </S.UploadIconContainer>
                      <S.UploadText>
                        <span>Choose a file</span> to upload or drag it here<br />(jpg, png, max size 5mb)
                      </S.UploadText>
                    </S.EmptyDropzoneContainer>
                  : <S.ImagesListContainer>
                      {
                        !!fileRejections.length &&
                          <S.ErrorMessage>
                            { fileRejections[0].errors[0].code === 'file-too-large'
                                ? 'File is larger than 5mb'
                                : fileRejections[0].errors[0].message
                            }
                          </S.ErrorMessage>
                      }
                      <S.ImagesList>
                        {
                          images.map(image => (
                            <S.ImageContainer
                              key={image.id}
                              onClick={e => e.stopPropagation()}
                            >
                              <S.RemoveIconContainer
                                onClick={e => {
                                  e.stopPropagation()
                                  onRemove(image)
                                }}
                              >
                                <img
                                  src={removeIcon}
                                  alt='remove-icon'
                                />
                              </S.RemoveIconContainer>
                              <img
                                src={image.preview}
                                alt='preview'
                                className='image-preview'
                              />
                            </S.ImageContainer>
                          ))  
                        }
                      </S.ImagesList>
                    </S.ImagesListContainer>
              }
            </S.DropzoneContainer>     
          )
        }
      }
    </ReactDropzone>
  )
}