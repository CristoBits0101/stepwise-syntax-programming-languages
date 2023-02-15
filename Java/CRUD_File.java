public class Methods_CRUD_File
{
    // Crear un archivo.
    FileCRUD.createFile("archivo.txt");

    // Escribir en un archivo.
    FileCRUD.writeToFile("archivo.txt", "Hola mundo!");

    // Leer un archivo.
    String contenido = FileCRUD.readFile("archivo.txt");

    // Actualizar un archivo.
    FileCRUD.updateFile("archivo.txt", "Nuevo contenido");

    // Eliminar un archivo.
    FileCRUD.deleteFile("archivo.txt");
}