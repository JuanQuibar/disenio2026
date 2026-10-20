# Chrome compartido para las pruebas de Diario UNO

## Objetivo

Copilot en VS Code y Codex se conectan a un único Chrome de pruebas en
`http://127.0.0.1:9222`. Cada cliente puede tener su propio proceso MCP, pero no
debe iniciar su propio navegador. La regla para los agentes está en
[AGENTS.md](./AGENTS.md#navegador-compartido-de-pruebas).

Esta configuración pertenece solo a este proyecto. No modifica configuraciones
globales, el Chrome personal ni las preferencias de otros proyectos.

## Configuración

- [.mcp.json](./.mcp.json): servidor de Chrome DevTools para Copilot, tanto en
  las sesiones de agente como en el harness local del IDE.
- [.vscode/settings.json](./.vscode/settings.json): habilita la configuración MCP
  de la raíz y la lectura de `AGENTS.md` en este workspace.
- [.codex/config.toml](./.codex/config.toml): sobrescribe el servidor
  `chrome-devtools` de Codex solo en este proyecto. Codex requiere que el proyecto
  sea de confianza para cargar esta configuración.

Ambos clientes usan Chrome DevTools MCP 1.11.0, con estadísticas de uso y consultas
CrUX desactivadas. El argumento `--browser-url` conecta al navegador existente;
no usar `--isolated`, perfiles temporales ni otro servidor de Chrome en paralelo.

Después de cambiar estas configuraciones, recargar la ventana de VS Code y abrir
una sesión nueva. En Codex, reabrir el proyecto o reiniciar la aplicación y crear
una sesión nueva. Las sesiones abiertas pueden conservar sus herramientas
anteriores.

En VS Code, revisar **MCP: List Servers** y la configuración del servidor:
el servidor activo debe usar `--browser-url=http://127.0.0.1:9222`. Si aparece
además el servidor aportado por el plugin de Chrome, no usar esa conexión
predeterminada: detenerla o deshabilitarla para este workspace desde los controles
del editor. No editar el plugin instalado ni deshabilitarlo globalmente.
En Codex, revisar el servidor `chrome-devtools` del proyecto en sus ajustes MCP.

## Abrir el navegador en macOS

Primero comprobar si ya está abierto:

```bash
curl --fail --max-time 2 http://127.0.0.1:9222/json/version
```

Si responde con datos de Chrome, reutilizarlo: **no ejecutar otra vez el comando
de arranque**. Si el puerto está ocupado por otro servicio, no detener ese
servicio ni intentar lanzar Chrome encima.

Si no hay navegador ni otro servicio en el puerto 9222, abrir una vez:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --remote-debugging-address=127.0.0.1 \
  --remote-debugging-port=9222 \
  --user-data-dir="$HOME/.chrome-uno-pruebas" \
  --no-first-run \
  --no-default-browser-check \
  about:blank
```

El perfil es exclusivo de pruebas y persiste entre sesiones. No agregarlo al
repositorio. El navegador puede permanecer abierto mientras se alterna entre
pruebas manuales, Copilot y Codex.

Abrir Chrome **no levanta el sitio**. Cuando se quiera ver la aplicación, iniciar
una sola vez `npm run dev` en una terminal del proyecto y usar
`http://localhost:3000`. Para detener ese servidor, usar `Ctrl+C` en su terminal;
no hace falta cerrar Chrome.

## Verificar la conexión de cada cliente

En una sesión nueva de Copilot y después en una de Codex, pedir:

> Usá Chrome DevTools MCP para listar las pestañas del navegador compartido.
> No abras un navegador ni una pestaña nueva.

Ambos deben ver las mismas pestañas, sin nuevas ventanas de Chrome. Los IDs de
página pueden diferir entre conexiones: identificar la pestaña por URL y usar
los IDs devueltos por el propio cliente.

Un agente por vez controla una pestaña. Para trabajar en paralelo, asignar una
pestaña distinta a cada agente dentro del mismo navegador. El navegador integrado
de VS Code y las capturas de Chrome por CLI no comparten esta conexión
automáticamente: no usarlos como alternativa.

## Seguridad y límites

- Mantener la depuración en loopback (`127.0.0.1`), sin exponer el puerto a la red.
- Otros procesos locales pueden controlar el navegador por ese puerto: no usar
  cuentas personales, correo, credenciales ni información sensible en este perfil.
- No cambiar flags de seguridad ni permisos para evitar un fallo de conexión.
- Estas instrucciones guían al agente; no son un bloqueo técnico de otras
  herramientas. La comprobación en ambos clientes después de recargarlos es
  necesaria para confirmar qué conexión utiliza cada sesión.

Referencia: [conexión a un Chrome existente en Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/advanced-usage.md#connecting-to-a-running-chrome-instance).
