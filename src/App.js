import "./App.css";
import { useScrollLock } from "@mantine/hooks";
import { Group, Button, Anchor } from "@mantine/core";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";

function App() {
  const [scrollLocked, setScrollLocked] = useScrollLock();
  return (
    <Group style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={
          scrollLocked ? <AiFillLock size={16} /> : <AiFillUnlock size={16} />
        }
        size="xl"
      >
        {scrollLocked ? "Unlock scroll" : "Lock scroll"}
      </Button>
      <Anchor
        href="https://www.youtube.com/watch?v=JOffqSrMlrg"
        target="_blank"
      >
        <Button size="lg">My Coding Channel</Button>
      </Anchor>
    </Group>
  );
}

export default App;
