import { Button, TextInput } from "@monorepo/ui";
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
      <section aria-labelledby="text-input-title">
        <h2 id="text-input-title">TextInput</h2>
        <label htmlFor="search">Buscar</label>
        <div>
          <TextInput id="search" placeholder="Buscar..." />
          <Button>Buscar</Button>
        </div>
        <label htmlFor="email">Correo electrónico</label>
        <TextInput
          id="email"
          placeholder="nombre@ejemplo.com"
          variant="underline"
        />
      </section>
    </div>
  );
};
