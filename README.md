# Responses starter app

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![NextJS](https://img.shields.io/badge/Built_with-NextJS-blue)
![OpenAI API](https://img.shields.io/badge/Powered_by-OpenAI_API-orange)

This repository contains a NextJS starter app built on top of the [Responses API](https://platform.openai.com/docs/api-reference/responses).
It leverages built-in tools ([web search](https://platform.openai.com/docs/guides/tools-web-search?api-mode=responses) and [file search](https://platform.openai.com/docs/guides/tools-file-search)) and implements a chat interface with multi-turn conversation handling.

----- feature sprint6

#Commit Chatbot setup
Se toma el código inicial para responses api de openAi, se elimina el archivo .env de ejemplo y se crean dos archivos para manejar las variables de producción como de desarrollo. Se agrega un nuevo método para la obtención de productos de la plataforma ecommerce. Adicionalmente, se cambia el mensaje de presentación del bot, el idioma de guia del input de entrada y se oculta el toolpanel. Se da permisos al componente para que funcione como iframe. 

Comunicación del chatbot con el backend mediante el endpoint de obtener productos.
![image](https://github.com/user-attachments/assets/b2ecc971-bbaa-4c0f-b03e-b4fc77b2a8ba)

Prueba de filtrado de productos mediante una categoria.
![image](https://github.com/user-attachments/assets/4896bfeb-f883-49d6-9495-1ae855ede0a5)

#Commit Images added
Se agregan las imagenes que tambien pertenecen al proyecto frontend de la plataforma ecommerce para que puedan ser utilizadas por el bot y sean mostradas al cliente para brindar una mejor experiencia.

Integración de imagenes en las respuestas.
![image](https://github.com/user-attachments/assets/d2647633-0091-4978-bf0b-0029966fdbba)

#Merge feature/sprint6 into main

-----

## Aviso de Uso y Créditos

Este repositorio está basado en la aplicación NextJs de OpenAi. Por lo tanto, contiene código tomado de [Responses API](https://platform.openai.com/docs/api-reference/responses), con modificaciones para propósitos educativos e ilustrativos.  
No reclamo ninguna autoría sobre el código original. Si eres el autor y deseas que lo elimine o acredite de otra manera, por favor contáctame. 

## License

This project is licensed under the MIT License. See the LICENSE file for details.
