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
| Girar el dedo | Sube o baja por la lista |
| **OK** (centro), un toque | Abre lo seleccionado |
| **ajustes** (arriba), doble toque | Abre los ajustes |
| **❙◀︎◀︎ / ▶︎▶︎❙** (izquierda / derecha), doble toque | Canción anterior / siguiente (atajos, ver paso 3) |
| **▶︎❙❙** (abajo), doble toque | Abre Spotify |

Las opciones de la rueda solo actúan con **doble toque**: con el primero se iluminan y con el segundo se activan.
Así no se disparan sin querer al girar. También puedes tocar directamente cualquier nombre de la lista.

**Color de énfasis:** en ajustes, elige uno de los colores o cualquier otro con el selector.
**Modo ahorro:** en ajustes, botón *Activar modo ahorro ahora* (o la automatización del paso 4).

### Temas (ajustes → Tema)
- **Ámbar:** el diseño propio de la app (pantalla ámbar, rueda giratoria y botones). Encaja en cualquier iPhone.
- **Claro:** como Ámbar, pero con la pantalla blanca, el resaltado en gris oscuro, la hora centrada arriba y la
  rueda gris oscura sin líneas. El **color de fondo** lo eliges en ajustes (plata, negro, rojo, azul, verde, rosa
  o cualquier otro con el selector). Se usa igual que Ámbar.
- **Mi foto:** pon de fondo una imagen con una pantalla arriba y una rueda abajo. La lista aparece dentro de la
  pantalla y la rueda táctil se coloca encima de la dibujada. Pulsa **Elegir foto** y escoge la imagen de tu carrete;
  se guarda solo en tu iPhone. Con este tema, la rueda dibujada funciona así:

| Zona de la rueda | Un toque | Doble toque |
|---|---|---|
| Arriba | Ajustes | — |
| Izquierda / derecha | Anterior / siguiente en la lista | Canción anterior / siguiente |
| Abajo | Modo ahorro | Abre Spotify |
| Centro | Abre lo seleccionado | — |

Para volver al diseño propio: arriba en la rueda → **Ámbar** → Listo.

### Ajustes
- **Cambiar o añadir botones:** pega tal cual un enlace copiado con *Compartir → Copiar enlace*
  (una lista de Spotify, un canal o vídeo de YouTube, un podcast de Podimo). Se abre directamente en su app.
- **Quitar un botón:** la **×** de su derecha.
- **Restaurar:** vuelve a Spotify, YouTube y Podimo.
- **Nombres de los atajos:** solo si les has puesto otro nombre en la app Atajos.
- Pulsa **Listo** (arriba a la derecha) para guardar.

Los ajustes se guardan en el iPhone, separados de Safari: configúralos desde el icono de la app.

---

## 3. Crear los atajos (app Atajos)

Ábrelos en **Atajos → pestaña "Atajos" (abajo) → botón +**. *No* uses la pestaña "Automatización" para esto.
Para renombrar: toca el nombre de arriba → **Renombrar**. Para añadir acciones: escríbelas en **"Buscar acciones"**.

### "Modo iPod" (ajustes → Activar modo ahorro ahora; en el tema Mi foto, abajo en la rueda)
| Acción | Valor | Para qué |
|---|---|---|
| Ajustar modo de bajo consumo | Activar | Es lo que más batería ahorra |
| Ajustar Wi-Fi | Activar | Streaming con menos gasto que con datos |
| Ajustar Bluetooth | Activar | Cascos o altavoz inalámbricos |
| Ajustar datos móviles | Activar | Internet fuera de casa (quítalo si no lo necesitas) |
| Ajustar brillo | 25 % | Menos gasto de pantalla |
| Ajustar concentración | No molestar → Activar | Sin notificaciones que enciendan la pantalla |

### "Siguiente" y "Anterior" (⏭ / ⏮ en la rueda, doble toque)
- **Siguiente:** una sola acción, **Saltar hacia delante**.
- **Anterior:** una sola acción, **Saltar hacia atrás**.

Controlan lo que esté sonando (Spotify, YouTube, Podimo…). Al usarlos se abre Atajos un momento y, a veces,
iOS pregunta "¿Abrir en Atajos?": es una limitación de iOS, ninguna web puede controlar otra app directamente.

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
| El ahorro o ⏮/⏭ no hacen nada | Revisa que los atajos se llaman exactamente "Modo iPod", "Siguiente" y "Anterior" (o cambia los nombres en ajustes). |
| He borrado un botón sin querer | Ajustes → Añadir botón (o Restaurar). |
| Con "Mi foto" la lista o la rueda no encajan | La imagen debe tener la pantalla arriba y la rueda abajo, con proporción parecida a la del iPhone. |
| He perdido la foto de fondo | Se borra si borras el icono o los datos de Safari: vuelve a pulsar **Elegir foto**. |

## Batería
La app no hace nada por su cuenta: sin animaciones continuas, sin conexiones y con el reloj actualizándose una vez
por minuto. iOS la congela en cuanto abres Spotify, YouTube o Podimo.
