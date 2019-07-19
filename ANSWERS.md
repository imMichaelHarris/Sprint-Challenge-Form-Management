# Answers

- [ ] Why are forms used so often in web applications and software?
      Forms are used often because it is the way we get information from a user. We wouldn't be able to communicate and share custom information withouth forms.

- [ ] What advantages are there by using a forms library like Formik?
      Formik's advantages are that it makes writing forms a bit less tedious. It allows us to have controlled input fields without the tedious functions we would need to write to controll those fields. It handles state and it also makes it easier to customize it's behavior. Formik can be used for simple or complex forms with validations and error handling.

- [ ] What is stateful logic?
      Stateful logic is just logic that handles state in it's simpliest form. Perhaps a function that is designed to alter the state based on whether a condition is true or not.

- [ ] What is a custom hook, and what does it mean to compose hooks together?
      A custom hook is a React hook that helps us share logic between different components. We can specify wheter it'll take any arguements and what it should return. Custom hooks helps us remove duplicate logic that will be shared across components.

- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.
      If we are registering a user typically we send the server some values and if the server accepts those values it will send a token back to the client. This token will be used to verify that the client is a registered user. When trying to access data that is protected we can send the token in a authorization header otherwise the server would reject our request.
