“Menú Volador”, ha decidido que sólo entregará pedidos a 10 cuadras a la redonda de
su barrio, el cual puede ser representado con un plano cartesiano. En una siguiente
etapa de la implementación se solicitará que se pueda ampliar o reducir este número
dependiendo de los resultados del negocio.
De esta manera, la posición del dron está representada por la combinación de
coordenadas X y Y y una letra que corresponde a uno de los puntos cardinales. Por
simplificación, el barrio puede ser visto como una grilla. Por ejemplo, (0,0,N)
corresponde a la posición del dron en la esquina inferior izquierda de la grilla estando
el dron apuntando en dirección norte.
El dueño de “Menú Volador” será el responsable de escribir los movimientos del
dron para llegar a cada destino de cada uno de los almuerzos en el sistema. Su
deseo es poder usar un archivo de texto donde anotará las rutas de entrega
correspondientes a todos los pedidos del día y así programar las entregas que el
dron deberá realizar en el transcurso del mismo.
Es importante aclarar que el dron es sólo capaz de cargar hasta tres almuerzos por
vez; también es importante aclarar que este número de almuerzos puede ampliarse
o reducirse dependiendo de los resultados del negocio. Por esta razón, y 
aprovechando el profundo conocimiento del barrio, el dueño de “Menú Volador”
será quien defina las rutas de entrega en el archivo de texto.
Un ejemplo del archivo de texto que ingresaría al sistema para las entrega de un día
sería:
AAAAIAA
DDDAIAD
AAIADAD
Donde:
● La letra A corresponde a un movimiento hacia adelante.
● La letra I corresponde a un giro de 90 grados del dron a la izquierda.
● La letra D corresponde a un giro de 90 grados del dron a la derecha.
Aclaraciones
● Cada línea del archivo de texto corresponde a una entrega de un
almuerzo.
● El dron siempre inicia en la posición (0, 0) orientación Norte.
Para el dueño de “Menú Volador” es importante monitorear el estado del dron
siempre, razón por la cual espera que el sistema le entregue información de cada
una de las entregas realizadas. Por esta razón solicita que una vez terminada la
ejecución de las rutas se le entregue un informe en otro archivo de texto de la
posición del dron en el plano cartesiano de cada entrega.
De esta manera, para la primera línea del ejemplo del archivo de texto anterior, se
espera que el informe se presente así:
== Reporte de entregas ==
(-2, 4) dirección Norte
(-3, 3) dirección Sur
(-4, 2) dirección Oriente
El conjunto de rutas de un dron en particular será especificado en un archivo de texto
independiente, a saber: in01.txt, in02.txt, in03.txt, ... , in20.txt donde in01.txt corresponde
a la ruta de entregas del dron 01, in02.txt corresponde a la ruta de entregas del dron 
02 y así sucesivamente.
Así mismo, el resultado de cada uno de los drones deberá quedar en archivos de texto
diferentes así: out01.txt, out02.txt, out03.txt, ... , out20.txt donde out01.txt corresponde
al reporte del dron 01, out02.txt corresponde al reporte del dron 02 y así
sucesivamente