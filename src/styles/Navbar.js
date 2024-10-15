import styled from '@emotion/styled'

export const AppBarProps = {
  position: "static",
  color: "none",
  sx: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "black",
    boxShadow: "none",
    borderBottom: "1px solid #e0e0e0",
    padding: "5px 20px",
  }
}

export const ImgWrapper = styled.img`
  width: 45px;
  height: 50px;
  padding: 0 !important;
  margin: 0 !important;
`

export const Left = styled.div`
  display: flex;
  gap: 2;
`

export const Right = styled.div`
  display: flex;
  gap: 2;
`

export const NameFieldProps = {
  sx: {
    borderRadius: "10px",
    backgroundColor: "#cfe5ff",
    '&:hover': {
      backgroundColor: "#cfe5ff",
    }
  }
}

export const LogFieldProps = {
  sx: {
    borderRadius: "10px",
    '&:hover': {
      backgroundColor: "transparent",
    }
  }
}