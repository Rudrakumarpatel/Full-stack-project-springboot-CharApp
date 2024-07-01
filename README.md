# ChatApplication
#Backend Development with Spring Boot:

1.Use Spring Boot to create a RESTful API backend that will handle communication between clients, store messages, and manage user authentication.
Define endpoints for functionalities such as user registration, user login, sending messages, fetching message history, etc.
Set up WebSocket support using libraries like Spring WebSockets or Spring Messaging to enable real-time communication between clients.

#Frontend Development with React.js:

1.Use React.js to create a dynamic and interactive user interface for the chat application.
Implement components for functionalities like user authentication (login, registration), chat interface, message input, message display, etc.
Utilize libraries like axios or fetch to make HTTP requests to the backend API for sending and fetching messages.

#User Authentication:

1.Implement user authentication mechanisms such as JWT (JSON Web Tokens).
Allow users to register, login, and logout securely.
Ensure that authenticated users have access to appropriate functionalities and data.

#Real-time Messaging with WebSocket:

Integrate WebSocket support in both frontend and backend to enable real-time messaging.
Use WebSocket connections to send and receive messages instantly without needing to refresh the page.
Implement WebSocket endpoints on the backend to handle message broadcasting and receiving.

Server:
    - Spring boot Websocket

Client
    - ReactJS

## ReactJS screen

To start:
    
### Client
        - npm i
nstall (in the react-client folder)
        - npm start
    
### Server
        - mvn spring-boot:run (in the spring-ws-server)