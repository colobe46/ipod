# iPod — el iPhone como reproductor de música

Una app web minimalista para usar el iPhone como reproductor: una pantalla con tu lista (Spotify, YouTube,
Podimo y tus favoritos), una rueda para moverte y unos pocos botones. Sin App Store, sin Mac y sin gastar batería.

**Dirección:** https://colobe46.github.io/ipod/

---

## 1. Instalar la app en el iPhone

1. Abre **Safari** (tiene que ser Safari) y entra en `colobe46.github.io/ipod`.
2. Pulsa **Compartir** (el cuadrado con la flecha) → **Añadir a pantalla de inicio**.
3. Comprueba que **"Abrir como app web"** está **activado**. Si está desactivado, se abrirá dentro de Safari con barras.
4. Pulsa **Añadir**.
5. Ábrela siempre **desde ese icono**. Si ves un aviso gris arriba que dice "Estás en Safari", algo de estos pasos falló:
   borra el icono y repítelos.

> La primera vez que abras cada app (Spotify, YouTube, Podimo) puede que iOS pregunte. Si alguna vez se abre la web
> en lugar de la app: mantén pulsado el nombre en la lista → **Abrir en Spotify** (o la que sea). iOS lo recuerda.

---

## 2. Cómo se usa

### Temas Ámbar y Claro
| En la rueda | Qué hace |
|---|---|
| Girar el dedo (vueltas completas si quieres) | Sube o baja por la lista; al llegar al final vuelve al principio |
| **OK** (centro), un toque | Abre lo seleccionado |
| **menú** (arriba), doble toque | Abre el menú |

"menú" funciona con **doble toque** para que no se abra sin querer al girar. También puedes tocar directamente
cualquier nombre de la lista.

**Color de énfasis:** en ajustes, elige uno de los colores o cualquier otro con el selector.
**Modo ahorro:** se activa solo con la automatización del paso 4.

### Temas (ajustes → Tema)
- **Ámbar:** el diseño propio de la app (pantalla ámbar, rueda giratoria y botones). Encaja en cualquier iPhone.
- **Claro:** como Ámbar, pero con la pantalla blanca, el resaltado en gris oscuro, la hora centrada arriba y la
  rueda gris oscura sin líneas. El **color de fondo** lo eliges en ajustes (plata, negro, rojo, azul, verde, rosa
  o cualquier otro con el selector). Se usa igual que Ámbar.
- **Mi foto:** pon de fondo una imagen con una pantalla arriba y una rueda abajo. La lista aparece dentro de la
  pantalla y la rueda táctil se coloca encima de la dibujada. Pulsa **Elegir foto** y escoge la imagen de tu carrete;
  se guarda solo en tu iPhone. Con este tema, la rueda dibujada funciona así:

| Zona de la rueda | Qué hace |
|---|---|
| Arriba | Abre el menú |
| Izquierda / derecha | Anterior / siguiente en la lista |
| Centro | Abre lo seleccionado |

**Descargar fondo de pantalla del tema** (en *Tema y colores*): crea una imagen del tema Ámbar o Claro, con tus
colores y sin opciones ni textos, colocada para que la hora de iOS quede arriba y el Dock no tape la rueda.
- **Pantalla encendida:** la pantalla blanca (Claro) o de color (Ámbar), vacía.
- **Bloqueado:** la pantalla apagada, oscura y con un reflejo suave. Pon el icono de la app iPod dentro de la pantalla
  y parecerá que está encendido en el aparato.

Guárdala en Fotos y ponla de fondo **sin ampliarla** y con el zoom de perspectiva desactivado, para que no se desplace.

Para volver al diseño propio: doble toque en **menú** → **Ámbar** → Listo.

### Menú (doble toque en "menú" de la rueda)
Primero aparece un menú con apartados; toca uno para entrar y **‹ Menú** para volver. **Listo** guarda y cierra.
- **Mi lista:** cambiar, añadir o quitar botones. Pega tal cual un enlace copiado con *Compartir → Copiar enlace*
  (una lista de Spotify, un canal o vídeo de YouTube, un podcast de Podimo). **Restaurar** vuelve a los tres de siempre.
- **Tema y colores:** Ámbar, Claro o Mi foto; color de énfasis (Ámbar) y color de fondo (Claro).
- **Atajos:** botones para instalar los atajos y para qué sirve cada uno.
- **Ayuda:** este documento.

Los ajustes se guardan en el iPhone, separados de Safari: configúralos desde el icono de la app.

---

## 3. Crear los atajos (app Atajos)

### Instalación rápida
Toca cada enlace en el iPhone → **Añadir atajo**. No les cambies el nombre.

| Atajo | Enlace |
|---|---|
| **Modo iPod** | [Instalar](https://www.icloud.com/shortcuts/9a1fe8f0be76423487fc017158e67729) |
| **Abrir iPod** | [Instalar](https://www.icloud.com/shortcuts/11135d48c4d24c739f2167c03302dc7b) |
| **Siguiente** | [Instalar](https://www.icloud.com/shortcuts/eb99e8e89d3d4df68795aa5d2d280ad7) |
| **Anterior** | [Instalar](https://www.icloud.com/shortcuts/6def905cf71d438f973a350ffb6a31b2) |
| **Play Pausa** | [Instalar](https://www.icloud.com/shortcuts/90f79e1e5643489580a30c169d2c3427) |

"Abrir iPod" es opcional (ver paso 4). También están en la app: **menú → Atajos**.

### O créalos a mano
Ábrelos en **Atajos → pestaña "Atajos" (abajo) → botón +**. *No* uses la pestaña "Automatización" para esto.
Para renombrar: toca el nombre de arriba → **Renombrar**. Para añadir acciones: escríbelas en **"Buscar acciones"**.

### "Modo iPod" (se activa solo con la automatización del paso 4)
| Acción | Valor | Para qué |
|---|---|---|
| Ajustar modo de bajo consumo | Activar | Es lo que más batería ahorra |
| Ajustar Wi-Fi | Activar | Streaming con menos gasto que con datos |
| Ajustar Bluetooth *(opcional)* | Activar | Solo si usas cascos o altavoz inalámbricos |
| Ajustar datos móviles *(opcional)* | Activar | Solo si tienes datos y quieres internet fuera de casa |
| Ajustar brillo | 25 % | Menos gasto de pantalla |
| Ajustar concentración | No molestar → Activar | Sin notificaciones que enciendan la pantalla |

### "Play Pausa"
Una sola acción: **Reproducir/Pausar**.

### "Siguiente" y "Anterior"
- **Siguiente:** una sola acción, **Saltar hacia delante**.
- **Anterior:** una sola acción, **Saltar hacia atrás**.

Play Pausa, Siguiente y Anterior controlan lo que esté sonando (Spotify, YouTube, Podimo…). Úsalos con el
**toque posterior**: Ajustes → Accesibilidad → Tocar → Toque posterior → por ejemplo **Doble toque → Play Pausa** y
**Triple toque → Siguiente**.

> La app no los lanza desde la rueda: en iOS 26, cuando una web o una app pide ejecutar un atajo, iOS abre la app
> Atajos pero no lo ejecuta. Desde el toque posterior, el Centro de control o la propia app Atajos sí funcionan.

---

## 4. Opcional: que todo sea más automático

### Activar el ahorro solo al abrir la música
**Atajos → Automatización → +** → **App** → elige Spotify, YouTube y Podimo → **Se abre** →
**Ejecutar inmediatamente** → acción **Ejecutar atajo → Modo iPod**.

### Abrir la app con dos golpecitos en la parte de atrás del iPhone
1. Crea un atajo **Abrir iPod** con la acción **Abrir URL** → `https://colobe46.github.io/ipod/`
   (en iOS 26 puedes probar `webapp://colobe46.github.io/ipod/` para abrirla sin barras).
2. **Ajustes → Accesibilidad → Tocar → Toque posterior → Doble toque → Abrir iPod**.

iOS no permite que una app se abra sola al desbloquear: esto es lo más parecido.

### Ver solo la app iPod al desbloquear
Deja el icono solo en una página de la pantalla de inicio. Si quieres, crea una **Concentración** (Ajustes →
Concentración → +) que muestre solo esa página y actívala desde "Modo iPod" con *Ajustar concentración*.

---

## 5. Ajustes del iPhone que conviene cambiar una vez
- **Ajustes → General → Actualización en segundo plano:** solo Spotify, YouTube y Podimo.
- **Ajustes → Datos móviles → Opciones → Voz y datos → 4G** (el 5G gasta más).
- **Ajustes → Notificaciones:** desactiva las que no necesites.
- En Spotify y Podimo, **descarga** con wifi lo que vayas a escuchar: reproducir sin conexión gasta menos.
- **YouTube** solo suena con la pantalla bloqueada si tienes YouTube Premium.

---

## 6. Si algo no va bien

| Problema | Solución |
|---|---|
| No veo la versión nueva | Cierra la app desde el selector de apps y ábrela dos veces. Si sigue igual: Ajustes → Apps → Safari → Avanzado → Datos de sitios web → borra **github.io**. |
| Sale la barra de Safari | Borra el icono y vuelve a añadirlo con **"Abrir como app web"** activado (paso 1). |
| Al tocar una app se abre su web | Mantén pulsado el nombre → **Abrir en …** |
| Podimo se abre en la web | En la app de Podimo, abre un podcast → **Compartir → Copiar enlace**, y pégalo en menú → Mi lista como enlace de Podimo. |
| Un atajo solo abre la app Atajos y no hace nada | Es un fallo de iOS 26 al lanzarlos desde otra app. Úsalos con el toque posterior (paso 3). |
| He borrado un botón sin querer | Ajustes → Añadir botón (o Restaurar). |
| Con "Mi foto" la lista o la rueda no encajan | La imagen debe tener la pantalla arriba y la rueda abajo, con proporción parecida a la del iPhone. |
| He perdido la foto de fondo | Se borra si borras el icono o los datos de Safari: vuelve a pulsar **Elegir foto**. |

## Batería
La app no hace nada por su cuenta: sin animaciones continuas, sin conexiones y con el reloj actualizándose una vez
por minuto. iOS la congela en cuanto abres Spotify, YouTube o Podimo.
