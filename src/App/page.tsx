import { ViewPanel } from "@tolokoban/ui";

export default function Page() {
  return (
    <ViewPanel
      display="grid"
      placeItems="center"
      fullsize
      position="absolute"
      color="neutral-5"
    >
      <div>Hello world!</div>
    </ViewPanel>
  );
}
