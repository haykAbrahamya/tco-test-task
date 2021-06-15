import React, { useState } from 'react'


import * as S from './AddSystem.styles'
import { Dropzone } from './components/Dropzone'

let lastId = 0

export const AddSystem = () => {
  const [images, setImages] = useState([])

  const onDrop = (newImageFile) => {
    if (!newImageFile.length) return

    const imageFile = {
      id: lastId++,
      file: newImageFile[0],
      name: newImageFile[0].name,
      preview: URL.createObjectURL(newImageFile[0]),
      size: newImageFile[0].size
    };

    setImages(images.concat(imageFile))
  }

  const onRemove = (imageToRemove) => {
    setImages(images.filter(image => image.id !== imageToRemove.id))
  }

  return (
    <S.AddSystemContainer>
      <S.Title>
        Add System
      </S.Title>
      <Dropzone
        images={images}
        onDrop={onDrop}
        onRemove={onRemove}
      />
    </S.AddSystemContainer>
  )
}