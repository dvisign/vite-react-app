import { useState } from "react"
import { FlexGrid, FlexGridColumn } from "@mescius/wijmo.react.grid"
import { FlexGridFilter } from "@mescius/wijmo.react.grid.filter"
import "@mescius/wijmo.styles/wijmo.css"

function Grid() {
  const colums = [
    { binding: "id", header: "ID", width: 70, isReadOnly: true },
    { binding: "productId", header: "Product", width: 70, isReadOnly: true },
    { binding: "discount", header: "Discount", width: 70, isReadOnly: true },
    { binding: "active", header: "Active", width: 100 },
  ]
  const [data] = useState([
    { id: 1, productId: "A001", discount: "10%", active: true },
    { id: 2, productId: "B002", discount: "5%", active: false },
    { id: 3, productId: "C003", discount: "15%", active: true },
  ])
  return (
    <>
      <FlexGrid itemsSource={data}>
        <FlexGridFilter />
        {colums.map((v, i) => {
          return <FlexGridColumn key={i} header={v.header} binding={v.binding} />
        })}
      </FlexGrid>
    </>
  )
}

export default Grid
