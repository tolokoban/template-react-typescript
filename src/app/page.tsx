import { ViewPanel } from "@tolokoban/ui"

export default function Page() {
    return (
        <ViewPanel
            display="grid"
            placeItems="center"
            fullsize
            position="absolute"
            fontSize="8em"
        >
            <div>Hello world!</div>
        </ViewPanel>
    )
}
