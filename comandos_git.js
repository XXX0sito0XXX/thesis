* git init 															(crea los archivos git dentro de la carpeta para sincronizar)
* git status 														(para ver en que estado están los archvios)
* git add <fichero> 										(ejemplo git add "fichero A.txt")
* git add . 														(para agregar todo)

/// para utilizar el git commit debemos autenticarnos primero
* git config --global user.email "text@fakeemail.com"
* git config --global user.name "Jorge"

/// ahora recien se puede utilizar Commit
* git commit 														  (se ignresa a vim y se guarda con ESC y !wq)
* git commit -m "descripción del cambio" (sirve para hacer el git commit pero sin entrar al editor vim)
* git log 														   	(historial de cambios)
* git checkout -- "<fichero>"						  (para descartar el cambio de un fichero)
* git diff "<fichero" 									  (sirver para diferencia y comparar el cambio antes y despues de un fichero )

///para evitar ciertas carpetas se crea un archivo .gitignore, dentro de este archivo estará las carpetas o archivos ordenados
///en columna que se ignorarán

* git branch 															(sirve para ver las ramas que tiene el proyecto)
* git branch <nombre_de_la_rama> 					(ejemplo: git branch nuevarama, sirve para cear una nueva rama)
* git checkout nuevarama									(sirve para cambiar de rama)

/// Una vez creado tu usuario y contraseña en github se utilizar este comando para vincular los archivos de tu comptuadora personal al repositorio
* git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY   //clonar un repositorio
* git remote add origin https://github.com/XXX0sito0XXX/cv.git  (Sirve para subir al repostitorio)
* git push -u origin master //subir todo los cambios a nuestro repositorio de github
* git remote -v


// Crear una clave ssh para poder subir los respositorios a github
-  ssh-keygen -t ed25519 -C "betto19.32@gmail.com"
