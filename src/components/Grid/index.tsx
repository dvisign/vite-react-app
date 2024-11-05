import { memo, useMemo } from "react"
import { FlexGridColumn, FlexGridCellTemplate, ICellTemplateContext, FlexGridProps } from "@mescius/wijmo.react.grid"
import { FlexGridFilter } from "@mescius/wijmo.react.grid.filter"
import { GridStyles, FlexGridStyles, BoxStyles } from "./styles"
import "@mescius/wijmo.styles/wijmo.css"

function getData() {
  const countries = ["US", "Germany", "UK", "Japan", "Italy", "Greece"],
    data = []
  for (let i = 0; i < 1000; i++) {
    data.push({
      id: i,
      country: countries[0],
      sales1: Math.random() * 10000,
      sales2: Math.random() * 10000,
      sales3: Math.random() * 10000,
      sales4: Math.random() * 10000,
      sales5: Math.random() * 10000,
      expenses: Math.random() * 5000,
      overdue: i % 4 == 0,
      color: i % 4 === 0 ? "blue" : "red",
    })
  }
  return data
}
export const data = getData()
// template을 분리하여 memo로 감싸서 메모이제이션
const BoxTemplate = memo(
  ({ color }: { color: string }) => {
    return (
      <>
        <BoxStyles backgroundColor={color} />
      </>
    )
  },
  (prevProps, nextProps) => prevProps.color === nextProps.color,
)
function Grid() {
  console.log("rerender")
  const colums = [
    { binding: "id", header: "ID", width: 70, isReadOnly: true },
    { binding: "country", header: "country", width: 70, isRequired: true },
    { binding: "sales1", header: "sales1", width: 70, isRequired: false },
    // { binding: "sales2", header: "sales2", width: 70, isRequired: false },
    // { binding: "sales3", header: "sales3", width: 70, isRequired: false },
    // { binding: "sales4", header: "sales4", width: 70, isRequired: false },
    // { binding: "sales5", header: "sales5", width: 70, isRequired: false },
    { binding: "expenses", header: "expenses", width: 100, isRequired: false },
    {
      binding: "overdue",
      header: "overdue",
      width: 100,
      isRequired: false,
    },
    {
      binding: "color",
      header: "color",
      width: 100,
      template: (cell: ICellTemplateContext) => {
        console.log("cell", cell.item.id, cell)
        // IntersectionObserver나 데이터 변경으로 인해 cell.item.color가 변경될 때만 렌더링되도록 설정
        return <BoxTemplate color={cell.item.color} />
      },
    },
  ]
  return (
    <GridStyles>
      <FlexGridStyles
        itemsSource={data}
        initialized={(flexGrid: FlexGridProps) => {
          console.log("flexGrid", flexGrid)
        }}>
        <FlexGridFilter />
        {colums.map((v, i) => {
          return !v?.template ? (
            <FlexGridColumn
              key={i}
              header={v.header}
              binding={v.binding}
              isReadOnly={v.isReadOnly}
              isRequired={v.isRequired}
            />
          ) : (
            <FlexGridColumn
              key={i}
              header={v.header}
              binding={v.binding}
              isReadOnly={v.isReadOnly}
              isRequired={v.isRequired}>
              <FlexGridCellTemplate cellType="Cell" template={v.template} />
            </FlexGridColumn>
          )
        })}
      </FlexGridStyles>
    </GridStyles>
  )
}

export default memo(Grid)
