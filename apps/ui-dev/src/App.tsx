import { Button } from "@monorepo/ui";
import "@monorepo/ui/styles";

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-canvas)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>ui-dev</h1>
      <Button />
    </div>
  );
};
