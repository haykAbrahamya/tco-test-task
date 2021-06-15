import styled from 'styled-components'


export const DropzoneContainer = styled.div`
  display: flex;
  padding: 25px;
  min-height: 188px;
  border: 1px dashed rgba(214, 221, 222, 0.26);
  border-radius: 4px;
  flex-direction: column;
  transition: border-color 0.3s ease;

  &.active {
    border-color: #fff;
  }

  &.reject {
    border-color: red;
  }

  &.empty {
    justify-content: center;
    align-items: center;
    min-height: 108px;
    padding: 70px 0px 60px;
  }
`

export const UploadIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #D6DDDE;
  width: 40px;
  height: 40px;
`

export const UploadText = styled.div`
  font-size: 16px;
  margin-top: 25px;
  text-align: center;

  span {
    color: #18A7FF;
  }
`

export const EmptyDropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const ImagesListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const RemoveIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  background: #CC4343;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  cursor: pointer;
  right: -6px;
`

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background: #161819;

  .image-preview {
    width: 55px;
    height: 70px;
    object-fit: cover;
  }
`

export const ErrorMessage = styled.div`
  font-size: 16px;
  color: red;
  margin-bottom: 20px;
`