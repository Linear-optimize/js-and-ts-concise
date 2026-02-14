import { Injectable } from '@nestjs/common';

let todos = [
    {
        id: 1,
        title: 'Todo 1',
    },
    {
        id: 2,
        title: 'Todo 2',
    },
    {
        id: 3,
        title: 'Todo 3',
    },
];

@Injectable()
export class TodoService {
    findAllTodos() {
        return todos;
    }

    findOneTodo(id: number) {
        return todos.find((todo) => Number(todo.id) === Number(id));
    }

    createTodo(newTodo: { id: number, title: string }) {
        todos.push(newTodo);
        return newTodo;
    }

    updateTodo(id: number, updateTodo: { id: number, title: string }) {
        todos = todos.map((todo) => {
            if (Number(todo.id) == Number(id)) {
                return {
                    ...todo,
                    ...updateTodo,
                };
            }
            return todo;
        });
        return updateTodo;
    }

    deleteTodo(id:number){
        todos=todos.filter((todo)=>Number(todo.id)!==Number(id));
        return true;
    }
}
