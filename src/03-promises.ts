/**
 * Типізація промісів
 */

/***************** 1 *****************/
const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, TypeScript!"), 1000);
  });
};

getData().then((result) => console.log(result)); // "Hello, TypeScript!"

/***************** 2 *****************/
interface User {
  id: number;
  name: string;
}

const userData: User = {
  id: 1,
  name: "Alice",
};

const getUser = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(userData), 1000);
  });
};

getUser().then((user) => console.log(user.name)); // "Alice"

const getUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    }, 1000);
  });
};

getUsers().then((users) => console.log(users[0].name)); // "Alice"

// ==========================================

interface HttpResponse<T> {
  data: T;
  code: number;
  message: string;
}

// GET /user
const getUserResp: HttpResponse<User> = {
  data: { id: 1, name: "Alice" },
  code: 200,
  message: "success!",
};

interface Note {
  id: number;
  content: string;
  completed: boolean;
}

// POST /note
const postNoteResp: HttpResponse<Note> = {
  data: { id: 1, content: "My super note", completed: false },
  code: 201,
  message: "created new note",
};

// GET /username
const getUsernameResp: HttpResponse<string> = {
  data: "Jacob",
  code: 200,
  message: "Here's user name",
};
