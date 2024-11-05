import { memo } from "react"
import styled from "@emotion/styled"
import { FlexGrid } from "@mescius/wijmo.react.grid"

export const BoxStyles = styled.span<{ backgroundColor?: string }>`
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ backgroundColor }) => backgroundColor};
`
export const CellContentWrapper = styled.div`
  width: 100%;
  height: 100%; /* 부모 높이 100% 채우기 */
  display: flex;
  align-items: center;
  justify-content: center;
`
export const GridStyles = styled.div`
  height: 400px;
  width: 100%;
`
export const FlexGridStyles = styled(FlexGrid)`
  height: 100%;
`
