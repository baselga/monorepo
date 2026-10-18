import { Button, TextInput } from "@monorepo/ui";
import "@monorepo/ui/styles";

export const App = () => {
  return (
    <div
      className="ds-bg-canvas ds-flex ds-flex-col ds-items-center ds-justify-center"
      style={{ minHeight: "100vh" }}
    >
      <h1>ui-dev</h1>
      <section aria-labelledby="text-input-title">
        <h2 id="text-input-title">TextInput</h2>
        <label htmlFor="search">Buscar</label>
        <div className="ds-flex ds-gap-2 ds-items-center">
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
