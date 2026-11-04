---
layout: ../../../layouts/PrivacyPolicyLayout.astro
title: Watr — Política de privacidad
projectName: Watr
projectHref: /project/watr
lang: es
description: Cómo Watr trata la ubicación, las imágenes de cámara, las suscripciones, el historial local y las solicitudes de eliminación de datos.
translations:
  - label: English
    href: /watr/privacy-policy
    lang: en
  - label: Español
    href: /watr/privacy-policy/es
    lang: es
---

# Watr — Política de privacidad

**Vigencia y última actualización: 4 de noviembre de 2026.**

Watr es desarrollada y operada por **Tomás Hurrell (HurrellT)**. Contacto: [hurrelltomas.dev@gmail.com](mailto:hurrelltomas.dev@gmail.com?subject=Privacidad%20de%20Watr).

Esta política corresponde a la versión actual de Watr para Android (`com.watr.app`), una aplicación de hábitos de hidratación con recordatorios, lugares opcionales, verificación visual y suscripciones. Explica qué información tratan la aplicación y sus proveedores, con qué propósito y qué controles tenés.

## 1. Rutina, lugares guardados e historial de pausas

Watr guarda en tu dispositivo el intervalo de avisos, los días y horarios, el modo de alerta, las pausas, el idioma, las opciones iniciales y la pausa pendiente. Cada lugar incluye el nombre que escribís, sus coordenadas, radio y modo de alerta. El historial contiene fechas y resultados de las pausas y puede incluir el nombre de un lugar o el motivo por el que se suprimió un aviso. Se conservan hasta **1.000 registros de historial**.

Estos datos se usan para programar avisos, aplicar tus preferencias y mostrar el progreso. Watr no envía tu rutina, lugares, coordenadas ni historial de pausas a un servidor propio del desarrollador ni a RevenueCat.

## 2. Ubicación opcional, incluida la ubicación en segundo plano

Los perfiles por lugar son opcionales. Watr solicita ubicación precisa para guardar dónde estás y comprobar si te encontrás dentro de un área guardada. Android también puede proporcionar ubicación aproximada, pero una posición con precisión insuficiente no permite confirmar esa área.

Si activás **«Solo en mis lugares»**, Watr solicita por separado ubicación en segundo plano. Con ese permiso, usa Google Play services para registrar geocercas y consultar tu posición al decidir si corresponde emitir un recordatorio programado, **aunque la aplicación esté cerrada o no esté visible**. Esto permite mantener el silencio fuera de tus lugares y aplicar el modo de alerta de cada uno. Si no se puede confirmar una posición suficientemente reciente y precisa, los recordatorios limitados a lugares permanecen en silencio.

Watr no mantiene una base de datos de recorridos ni un historial continuo de ubicación. Las coordenadas guardadas permanecen en el dispositivo; las lecturas actuales se procesan para decidir sobre el aviso. Google Play services gestiona las solicitudes de ubicación y geocercas del dispositivo y puede tratar información asociada según la [Política de Privacidad de Google](https://policies.google.com/privacy?hl=es). Watr no recopila por su cuenta nombres de redes Wi-Fi, identificadores de routers ni contraseñas Wi-Fi.

Podés usar recordatorios sin perfiles por lugar. Para desactivar esa función, desactivá «Solo en mis lugares», eliminá los lugares o revocá la ubicación desde los ajustes de Android. Sin ubicación en segundo plano, los recordatorios limitados a lugares quedan en silencio.

## 3. Cámara y verificación visual en el dispositivo

Watr accede a la cámara únicamente cuando abrís el flujo de cámara de una pausa y concedés el permiso. Procesa imágenes en vivo localmente con MediaPipe y ML Kit para detectar un recipiente y un gesto compatible con beber. Las imágenes y los resultados temporales de detección se mantienen en memoria mientras se necesitan para esa sesión. Watr no guarda fotos ni videos, no sube imágenes de cámara, no accede a tu galería ni solicita acceso al micrófono.

La detección facial ubica una cara; no identifica personas. Watr no registra identidades, no crea un perfil biométrico persistente ni conserva una plantilla facial. La verificación no puede determinar la composición del líquido, la deglución ni el volumen consumido. El resultado guardado de la pausa es independiente de las imágenes temporales.

Podés rechazar o revocar el permiso de cámara. En ese caso no estará disponible la verificación visual, pero siempre podrás silenciar y omitir un aviso.

## 4. Notificaciones, alarmas y funcionamiento en segundo plano

El permiso de notificaciones permite mostrar recordatorios y acciones para abrir u omitir una pausa. El acceso a alarmas exactas permite que Android programe avisos precisos. Un servicio en primer plano, la vibración y un bloqueo breve de activación pueden utilizarse para emitir una alerta de duración limitada; los eventos de reinicio y cambio de hora restauran la programación. Estos permisos no permiten leer notificaciones de otras aplicaciones, contactos, mensajes ni el calendario. Podés controlar las notificaciones, el sonido, la vibración y las alarmas desde Android.

## 5. Compras y RevenueCat

Google Play procesa los pagos y las suscripciones. Watr usa RevenueCat para cargar planes, validar compras, restaurar el acceso y consultar si Pro está activo. El SDK puede contactar a RevenueCat al iniciar la aplicación, antes de una compra. Usa un identificador seudónimo generado y trata tokens de compra, datos de transacciones y suscripciones e información técnica como versiones de aplicación/dispositivo, configuración regional y metadatos de conexión. Watr no le envía imágenes, coordenadas guardadas ni historial de pausas, ni recibe los datos completos de tu tarjeta. Consultá las políticas de [RevenueCat](https://www.revenuecat.com/privacy-policy) y [Google](https://policies.google.com/privacy?hl=es).

## 6. SDK de Google y datos técnicos

Aunque las imágenes de cámara permanecen locales, ML Kit y MediaPipe pueden enviar a Google diagnósticos y métricas de uso: información del dispositivo/aplicación, identificadores de instalación, configuración de API, rendimiento y errores. Se usan para operar y mejorar esos SDK. Consultá la [declaración de datos de ML Kit](https://developers.google.com/ml-kit/android-data-disclosure), el [aviso de privacidad de MediaPipe](https://github.com/google-ai-edge/mediapipe#privacy-notice) y la [Política de Privacidad de Google](https://policies.google.com/privacy?hl=es).

Watr no incluye un SDK de publicidad ni un servicio propio de publicidad o análisis de comportamiento. El desarrollador no vende datos personales ni usa la ubicación, las imágenes de cámara o el historial de pausas para publicidad.

## 7. Almacenamiento, seguridad y conservación

Los registros se guardan en el almacenamiento privado de la aplicación en Android, sin una capa adicional de cifrado administrada por Watr. Watr deshabilita la copia de seguridad de sus datos de aplicación en Android. Las imágenes son temporales; el historial tiene el límite indicado arriba; la rutina y los lugares se conservan hasta que los eliminás o borrás los datos de la aplicación.

La tienda y RevenueCat conservan información de suscripción según sea necesario para el acceso, la restauración, la contabilidad, la prevención de fraude y las obligaciones legales. Desinstalar Watr no elimina por sí solo sus registros ni cancela una suscripción. Estos proveedores pueden tratar información fuera de tu país, incluso en Estados Unidos, conforme a sus condiciones y las garantías aplicables. Sus servicios de red usan conexiones seguras; ningún almacenamiento o transmisión puede garantizarse completamente seguro.

Si contactás al desarrollador, tu correo y la información que aportes se utilizan para atender la consulta y se conservan únicamente mientras sean necesarios para ese propósito y las obligaciones legales aplicables.

## 8. Eliminación y controles disponibles

- **Historial:** abrí la pantalla de privacidad de Watr y elegí **«Borrar historial de este teléfono»**.
- **Lugares:** eliminá cada lugar desde Lugares. También podés desactivar su uso y revocar el permiso de ubicación.
- **Todos los datos locales:** usá **Borrar almacenamiento / Borrar datos** desde Android o desinstalá Watr. El desarrollador no puede borrar remotamente información que existe únicamente en tu dispositivo.
- **Suscripción:** administrala o cancelala desde [Suscripciones de Google Play](https://play.google.com/store/account/subscriptions). Borrar datos o desinstalar no cancela los cobros.
- **Datos de proveedores o solicitudes de privacidad:** escribí a [hurrelltomas@gmail.com](mailto:hurrelltomas@gmail.com?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos%20de%20Watr). Indicá «Watr» e información suficiente para identificar la compra correspondiente, como el número de pedido de Google Play cuando corresponda. Podemos necesitar verificar la solicitud. No envíes contraseñas ni datos completos de tarjetas. Atenderemos las solicitudes de eliminación, incluidos los registros correspondientes en RevenueCat, salvo los requisitos legales de conservación; Google gestiona sus propios registros de cuenta y pagos.

Watr no exige crear una cuenta propia. Según la legislación aplicable, podés tener derechos de acceso, rectificación, eliminación, restricción, copia o portabilidad, oposición a ciertos usos, retiro del consentimiento y reclamo ante una autoridad de protección de datos. Usá el contacto anterior para ejercerlos. Revocar un permiso afecta el acceso futuro y puede deshabilitar la función asociada.

## 9. Menores e información de salud

Watr es una herramienta general de hábitos y no está dirigida específicamente a menores. No solicita historia clínica, medidas corporales ni acceso a Health Connect. Los registros de pausas describen actividad en la aplicación; Watr no mide el volumen de líquido ni da indicaciones médicas. Contactá al desarrollador si tenés una consulta sobre la privacidad de un menor.

## 10. Este sitio y cambios futuros

Esta página está alojada en Vercel. Visitarla puede generar registros habituales de alojamiento y seguridad, incluida la dirección IP e información del navegador y de la solicitud. El portfolio guarda tu preferencia de tema claro/oscuro en el almacenamiento local del navegador. Este sitio no recibe imágenes de cámara, lugares ni historial de Watr. Consultá el [Aviso de Privacidad de Vercel](https://vercel.com/legal/privacy-policy).

La fecha del encabezado identifica la versión de esta política. Si Watr incorpora una versión iOS, análisis remoto de imágenes o video, cuentas u otras prácticas de datos sustancialmente diferentes, las declaraciones correspondientes se actualizarán antes de publicar esos cambios, con aviso y consentimiento cuando se requieran.
