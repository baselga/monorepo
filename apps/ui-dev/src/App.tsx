import { Button, SelectInput, TextInput } from "@monorepo/ui";
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
      <section aria-labelledby="select-input-title">
        <h2 id="select-input-title">SelectInput</h2>
        <div className="ds-pb-2 ds-flex ds-gap-2 ds-items-center">
          <SelectInput
            variant="solid"
            size="large"
            aria-label="Idioma"
            defaultValue="en"
          >
            <SelectInput.Option id="es">Español</SelectInput.Option>
            <SelectInput.Option id="en">Inglés</SelectInput.Option>
          </SelectInput>
          <SelectInput
            variant="solid"
            size="medium"
            aria-label="Idioma"
            defaultValue="en"
            isDisabled
          >
            <SelectInput.Option id="es">Español</SelectInput.Option>
            <SelectInput.Option id="en">Inglés</SelectInput.Option>
          </SelectInput>
          <SelectInput
            variant="solid"
            size="small"
            aria-label="Idioma"
            defaultValue="en"
          >
            <SelectInput.Option id="es" isDisabled>
              Español
            </SelectInput.Option>
            <SelectInput.Option id="en">Inglés</SelectInput.Option>
          </SelectInput>
        </div>
        <div className="ds-flex ds-gap-2 ds-items-center">
          <SelectInput
            variant="underline"
            size="large"
            aria-label="Idioma"
            defaultValue="en"
          >
            <SelectInput.Option id="es">Español</SelectInput.Option>
            <SelectInput.Option id="en">Inglés</SelectInput.Option>
          </SelectInput>
          <SelectInput
            variant="underline"
            size="medium"
            aria-label="Idioma"
            defaultValue="en"
          >
            <SelectInput.Option id="es">Español</SelectInput.Option>
            <SelectInput.Option id="en">Inglés</SelectInput.Option>
          </SelectInput>
          <SelectInput
            variant="underline"
            size="small"
            aria-label="Idioma"
            defaultValue="en"
          >
            <SelectInput.Option id="es" isDisabled={true}>
              Español
            </SelectInput.Option>
            <SelectInput.Option id="en">Inglés</SelectInput.Option>
          </SelectInput>
        </div>
      </section>
    </div>
  );
};
