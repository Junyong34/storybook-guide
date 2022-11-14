import styled from '@emotion/styled'

export const Main = styled.main`
  min-height: calc(100vh - 100px);
  padding: 32px 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled(Content)`
  font-size: 24px;
  line-height: 32px;
  color: #000;
  margin-bottom: 32px;
`
