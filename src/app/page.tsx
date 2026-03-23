import React from "react"
import { ViewButton, ViewPanel } from "@tolokoban/ui"
import { makeGoto } from "./routes"

export default function Page() {
    const [list, setList] = React.useState(["One", "Two", "Three"])
    const handleAdd = () => {
        setList((prev) => [...prev, `Item#${ID++}`])
    }
    const title = "My movie"

    return (
        <ViewPanel
            display="grid"
            placeItems="center"
            gap="L"
            fullsize
            position="absolute"
            fontSize="1em"
        >
            <ViewPanel color="neutral-1-5" padding="M">
                <p className="text-primary-3 text-sm">
                Something went wrong while fetching filter options for "
                {title.toLowerCase()}" entities.
                <br />
                Please try again later or contact support if the issue persists.
              </p>
                <ViewButton onClick={handleAdd} fullwidth>
                    Add new item to the list
                </ViewButton>
                <ViewPanel
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    gap="L"
                >
                    <List list={list} />
                    <ListDef list={list} />
                </ViewPanel>
                <ViewButton onClick={handleAdd} fullwidth>
                    Add new item to the list
                </ViewButton>
            </ViewPanel>
        </ViewPanel>
    )
}

let ID = 0

const Item = React.memo(RawItem)

function RawItem({ value }: { value: string }) {
    const color = `hsl(${Math.floor(Math.random() * 360)} 100% 50%)`
    return <div style={{ background: color, color: "#000" }}>{value}</div>
}

function List({ list }: { list: string[] }) {
    console.log("Render", "NORMAL")
    return (
        <ViewPanel color="neutral-5" padding="M" width="200px">
            {list.map((v) => (
                <Item key={v} value={v} />
            ))}
        </ViewPanel>
    )
}

function ListDef({ list }: { list: string[] }) {
    console.log("Render", "DEFERRED")
    const def = React.useDeferredValue(list)
    return (
        <ViewPanel color="neutral-5" padding="M" width="200px">
            {def.map((v) => (
                <Item key={v} value={v} />
            ))}
        </ViewPanel>
    )
}
