import "./App.css";
import { useScrollLock } from "@mantine/hooks";
import { Group, Button } from "@mantine/core";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";

function App() {
  const [scrollLocked, setScrollLocked] = useScrollLock();
  return (
    <Group>
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
    </Group>
  );
}

export default App;
