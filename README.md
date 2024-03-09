# CLI - Gastos

Proyecto personal de consola app de Gastos con Nodejs + Postgres

# Instrucciones de Uso

```
npx ts-node -- banderas a ejecutar ---
```

```
  -c, --create   Bandera crear un usuario o un gasto [booleano] [defecto: false]
  -l, --list     Bandera para listar todos los gastos[booleano] [defecto: false]
  -u, --update   Bandera para actualizar el usuario  [booleano] [defecto: false]
  -d, --delet    Bandera para borrar usuario         [booleano] [defecto: false]
  -i, --id       Bandera para enviar el id Usuario         [número] [defecto: 1]
  -n, --name     Bandera para enviar el nombre del usuario[cadena de caracteres]
  -m, --money    Bandera para agregar dinero               [número] [defecto: 0]
  -g, --gasto    Bandera para crear gasto            [booleano] [defecto: false]
  -t, --tipo     Tipo de gasto [selección: "alimentacion", "transporte", "ocio"]
```

# Usuario
```
-c -n Jhon -m 5000 // Esto crea un usuario Jhon con un monto de 5000
-i 1 -u -m 45000 // Esto actualiza el id 1 con un nuevo monto de 45000
-i 1 -d // Borra el Usuario 1 y todos sus gastos registrado hasta entonces...
```

# Gasto
```
-g -i 1 -m 245 -t ocio // Crea el gasto del usuario con el id 1 con el monto 245.00 y de tipo ocio
-g -l -t // Muestra todos los gastos registrados por tipo
```