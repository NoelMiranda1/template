<!-- @format -->

# Hola , por si nos estan viendo , buenos dias , buenas tardes y buenas noches;

este es un templeate de react native para la empresa HypernovaLabs.

## Aqui encontraran la estructura de folderes por defecto en los proyectos de HNL a partir de la fecha 01-01-23 (aun no se xd)

# Cambios a realizar (Android)

La creacion del template no cambia el package name de la aplicacione en
android tendrian que cambiar el nombre del package para poder publicar a la playstore se realiza de la
siguiente manera:

- "./android/src/main/AndroidManifest.xml" por defecto del template se crea de esta manera
  package="com.template"
  de igual manera pueden cambiar el nombre de las carpetas para que concuerde con el nombre que pongan en el xml
  que seria "./android/src/main/java/com/{nombre del xml package}"
- Modificar aplicationId en "android/app/build.gradle"applicationId "{nombre del xml package}" luego de esto pueden volver

# Modificar nombre de la aplicacion

Se dirige a "android/app/src/main/res/values/strings.xml
ahi encontrara lo siguiente:

```
<resources>
    <string name="app_name">{Nuevo nombte de la aplicacion aqui}</string>
</resources>
```