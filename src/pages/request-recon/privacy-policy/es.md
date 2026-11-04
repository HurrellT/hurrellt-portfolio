---
layout: ../../../layouts/PrivacyPolicyLayout.astro
title: Request Recon — Política de privacidad
projectName: Request Recon
projectHref: /project/request-recon
lang: es
description: Cómo Request Recon trata el tráfico de red capturado, las reglas locales, la generación opcional con IA, los permisos y las solicitudes de eliminación de datos.
translations:
  - label: English
    href: /request-recon/privacy-policy
    lang: en
  - label: Español
    href: /request-recon/privacy-policy/es
    lang: es
---

# Request Recon — Política de privacidad

**Vigencia y última actualización: 4 de noviembre de 2026.**

Request Recon es desarrollada y operada por **Tomás Hurrell (HurrellT)**. Contacto: [hurrelltomas.dev@gmail.com](mailto:hurrelltomas.dev@gmail.com?subject=Privacidad%20de%20Request%20Recon).

Esta política corresponde a Request Recon, una extensión de Chrome DevTools para inspeccionar tráfico de red y probar respuestas de API modificadas, incluido su generador experimental opcional con IA cuando esté disponible. Explica qué información trata la extensión, cuándo sale del navegador y qué controles tenés. Request Recon no exige crear una cuenta con el desarrollador.

## 1. Tráfico capturado y su propósito

Cuando iniciás la captura, Request Recon accede a las URL y métodos de las solicitudes, encabezados de solicitud y respuesta, cuerpos compatibles, códigos de estado HTTP, errores de red, marcas de tiempo y detalles de operaciones y variables GraphQL cuando están disponibles. Estos datos pueden contener información personal, tokens de autenticación, cookies presentes en los encabezados u otra información sensible de la aplicación inspeccionada. Los valores sensibles no se eliminan automáticamente del contenido capturado.

Esta información se usa para mostrar el tráfico, encontrar coincidencias con tus reglas y aplicar los cuerpos, encabezados, códigos HTTP o errores simulados que elegís. Las reglas se comparten entre las sesiones de captura activas y se aplican cuando coinciden sus condiciones.

La captura se limita a las pestañas con una sesión activa. Los filtros de visibilidad cambian la lista mostrada, no lo que captura la sesión. La captura termina cuando detenés la sesión o cerrás su panel de DevTools, con dos segundos de tolerancia para reconectar el panel. También podés detener todas las sesiones desde la ventana emergente de la extensión.

## 2. Permisos de Chrome

El permiso **debugger** permite que Request Recon se conecte a la pestaña inspeccionada para capturar tráfico e interceptar respuestas. El permiso **storage** permite guardar reglas y preferencias y, si usás la generación con IA, almacenar la configuración de conexión y las credenciales de sesión.

La función opcional de IA solicita acceso al host del proveedor elegido al generar una respuesta o consultar los modelos disponibles. El permiso abarca el esquema y host seleccionados; las solicitudes usan el endpoint configurado de generación o el de su lista de modelos. Abrir el panel por sí solo no solicita ese acceso ni contacta a un proveedor. La captura y la creación manual de reglas funcionan sin IA. Podés revocar el acceso concedido desde la configuración de extensiones de Chrome.

## 3. Almacenamiento local y conservación

El tráfico capturado se mantiene en memoria, sin una base de datos persistente de historial de solicitudes. El panel conserva hasta **1.000 solicitudes** y aproximadamente **32 MiB** de datos capturados. Las vistas previas de respuestas de texto compatibles se limitan a **256 KiB** por respuesta; las vistas previas y la comparación de cuerpos de solicitud usan hasta **64 KiB**. Limpiar la lista elimina el historial mostrado. Cerrar el panel libera su historial cuando se libera ese contexto; detener la captura por sí solo no borra las solicitudes que ya aparecen.

Las reglas y preferencias se guardan en el almacenamiento local de la extensión de Chrome, **no en Chrome Sync**. Pueden incluir nombres de reglas, patrones de URL, filtros de cuerpos de solicitud, campos de comparación GraphQL, cuerpos de respuesta de reemplazo, encabezados, códigos HTTP, marcas de tiempo, idioma y preferencias de visibilidad del tráfico. Se conservan hasta que las eliminás o desinstalás la extensión.

Para la generación con IA, las preferencias de proveedor, endpoint y modelo se guardan localmente al generar. Los tokens de API se guardan por separado en el almacenamiento de sesión en memoria de Chrome, asociados al endpoint exacto configurado. Chrome borra ese almacenamiento al reiniciar el navegador o recargar, actualizar o deshabilitar la extensión. Los paneles abiertos también pueden mantener un token en memoria. Los tokens no se incluyen en las exportaciones de reglas.

Las instrucciones de IA, muestras de respuesta, listas de modelos y vistas previas generadas permanecen en la memoria del panel. Un nombre, estado o cuerpo generado pasa al almacenamiento persistente y a las exportaciones únicamente si guardás la regla propuesta.

## 4. Generación opcional con IA y consulta de modelos

Para generar, tenés que revisar la muestra editable, escribir instrucciones, aceptar la declaración y elegir **Generar vista previa**. Request Recon envía entonces tu instrucción (hasta **8 KiB**), la muestra de respuesta (hasta **32 KiB**) y su código HTTP original directamente al endpoint elegido. No incluye automáticamente URL capturadas, encabezados de solicitud/respuesta, cuerpos de solicitud ni variables GraphQL. La muestra o instrucción puede contener información sensible; vos decidís qué eliminar antes de enviarla. La generación no se inicia automáticamente.

La consulta de modelos es una solicitud separada de metadatos al proveedor elegido, con el token configurado cuando se aporta o es obligatorio. No envía la muestra, las instrucciones ni tráfico capturado. **Cargar modelos al cambiar de proveedor** está activado de forma predeterminada: elegir un proveedor puede iniciar la consulta una vez disponibles el permiso de host y las credenciales necesarios. Podés desactivar esa opción y consultar manualmente. Abrir el panel por sí solo no consulta modelos. Las listas se borran al cambiar de proveedor, endpoint o token.

Los destinatarios dependen de tu configuración: tu servidor Ollama o LM Studio, OpenAI, Google Gemini, OpenRouter y sus proveedores de modelos, o quien opere un endpoint compatible personalizado. El token se envía al endpoint elegido para autenticarte. Los servicios remotos también reciben información habitual de conexión, como tu dirección IP, y pueden conservar entradas y resultados o tratarlos fuera de tu país según sus condiciones y la configuración de tu cuenta. Pueden aplicar cargos del proveedor. Consultá las políticas de [OpenAI](https://openai.com/policies/privacy-policy/), [Google](https://policies.google.com/privacy?hl=es) y [OpenRouter](https://openrouter.ai/privacy), o las de quien opere tu servidor.

Estas solicitudes no pasan por un backend de Request Recon. Un endpoint de loopback envía datos a un servidor de tu computadora; el comportamiento y la configuración de ese servidor determinan si usa otros servicios. Request Recon exige HTTPS para endpoints remotos y admite HTTP sin cifrar únicamente para servidores locales de loopback. Sus solicitudes a proveedores rechazan redirecciones.

## 5. Intercambio de datos, aplicaciones inspeccionadas y archivos

Request Recon no envía tráfico capturado, reglas, preferencias ni credenciales de IA al desarrollador. No tiene un servicio propio de analítica, publicidad ni telemetría. El desarrollador no vende estos datos ni los usa para publicidad o decisiones crediticias. Los envíos opcionales a IA se limitan a las acciones explicadas anteriormente.

La aplicación inspeccionada sigue comunicándose con sus propios servidores. La intercepción de respuestas ocurre **después de enviar la solicitud** y no impide acciones en el servidor. Las respuestas de reemplazo se entregan a esa aplicación, que puede leerlas. Los avisos en la página sobre reglas aplicadas muestran una etiqueta genérica, el método y el estado, sin nombres de reglas ni URL de solicitudes.

Las importaciones leen el archivo JSON que seleccionás. Las exportaciones crean un JSON en tu dispositivo con los valores de las reglas guardadas, que pueden incluir muestras de respuesta sensibles, filtros o credenciales que hayas escrito en esos valores. Vos decidís si compartís esos archivos y con quién. La extensión no puede eliminar copias exportadas o compartidas.

El enlace de donación abre Ko-fi en otra pestaña. Ko-fi y sus proveedores procesan cualquier donación o pago según sus condiciones; Request Recon no incorpora su SDK de pagos ni recibe datos completos de tarjetas mediante la extensión.

## 6. Seguridad y comunicaciones de soporte

Request Recon usa el almacenamiento de extensiones de Chrome y no agrega una capa propia de cifrado a las reglas y preferencias guardadas. Las solicitudes remotas de IA usan HTTPS según lo indicado anteriormente. Ningún almacenamiento o transmisión puede garantizarse completamente seguro.

Si contactás al desarrollador, tu correo y la información que aportes se utilizan para responder y se conservan únicamente mientras sean necesarios para la consulta y las obligaciones legales aplicables. No envíes contraseñas, tokens de API ni tráfico confidencial capturado al solicitar soporte.

## 7. Eliminación y controles disponibles

- **Captura:** detené una sesión o todas desde la ventana emergente. Limpiá la lista por separado para borrar el historial; cerrá DevTools para liberar los datos en memoria del panel.
- **Reglas:** editá, deshabilitá o eliminá las reglas guardadas. Deshabilitar una regla no borra su contenido.
- **Todos los datos persistentes de la extensión:** desinstalá Request Recon. Eliminá los archivos exportados y sus copias por separado.
- **Conexión de IA:** usá **Olvidar conexión guardada** para eliminar las preferencias de conexión y el token de sesión. Cerrá los demás paneles abiertos para liberar sus copias en memoria. Revocá el acceso al host por separado desde la configuración de extensiones de Chrome.
- **Entradas de IA y registros de proveedores:** editá la muestra antes de enviarla, dejá la IA sin usar, cancelá una generación o descartá su vista previa. Generar por sí solo no guarda ni activa una regla. Borrar datos locales o cancelar una solicitud no elimina lo que un proveedor ya recibió; usá sus controles de datos.
- **Solicitudes de privacidad:** escribí a [hurrelltomas.dev@gmail.com](mailto:hurrelltomas.dev@gmail.com?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos%20de%20Request%20Recon), mencionando Request Recon. El desarrollador no puede borrar remotamente datos que existen únicamente en tu dispositivo ni registros que un proveedor mantiene de forma independiente.

## 8. Derechos de privacidad y menores

Según la legislación aplicable, podés tener derechos de acceso, rectificación, eliminación, restricción, copia o portabilidad, oposición a ciertos usos, retiro del consentimiento y reclamo ante una autoridad de protección de datos. Usá el contacto anterior para información en poder del desarrollador. Podemos necesitar verificar una solicitud y conservar información cuando lo exija la ley.

Request Recon es una herramienta para desarrolladores y no está dirigida específicamente a menores. Contactá al desarrollador si tenés una consulta sobre la privacidad de un menor.

## 9. Uso limitado

La información obtenida mediante las API de Chrome se usa únicamente para las funciones de inspección y pruebas de respuestas descritas aquí, conforme a la [Política de Datos de Usuario de Chrome Web Store, incluidos sus requisitos de Uso Limitado](https://developer.chrome.com/docs/webstore/program-policies/user-data-faq#limited-uses-of-user-data).

## 10. Este sitio y cambios futuros

Esta página está alojada en Vercel. Visitarla puede generar registros habituales de alojamiento y seguridad, incluida la dirección IP e información del navegador y de la solicitud. El portfolio guarda tu preferencia de tema claro/oscuro en el almacenamiento local del navegador. Este sitio no recibe tráfico ni reglas capturados por tu extensión. Consultá el [Aviso de Privacidad de Vercel](https://vercel.com/legal/privacy-notice).

La fecha del encabezado identifica la versión de esta política. Los cambios en servicios en la nube, telemetría, cuentas u otras prácticas sustanciales de datos se reflejarán en la política y las declaraciones de Chrome Web Store antes de publicarse, con aviso y consentimiento cuando se requieran.
