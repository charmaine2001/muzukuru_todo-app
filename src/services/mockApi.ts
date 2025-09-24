import { Todo, CreateTodoRequest, UpdateTodoRequest, ApiResponse } from '../types/todo';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
let todos: Todo[] = [
  {
    id: '1',
    title: 'Learn React',
    description: 'Study React fundamentals',
    completed: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-02'),
  },
  {
    id: '2',
    title: 'Build Todo App',
    description: 'Create a todo application with TypeScript',
    completed: false,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03'),
  },
];

let nextId = 3;

export const mockApi = {
  // GET all todos
  getTodos: async (): Promise<ApiResponse<Todo[]>> => {
    await delay(500);
    
    // Simulate random error (10% chance)
    if (Math.random() < 0.1) {
      throw new Error('Failed to fetch todos');
    }
    
    return {
      data: [...todos],
      message: 'Todos fetched successfully',
      success: true,
    };
  },

  // POST new todo
  createTodo: async (todoData: CreateTodoRequest): Promise<ApiResponse<Todo>> => {
    await delay(300);
    
    if (Math.random() < 0.1) {
      throw new Error('Failed to create todo');
    }
    
    const newTodo: Todo = {
      id: nextId.toString(),
      ...todoData,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    todos.push(newTodo);
    nextId++;
    
    return {
      data: newTodo,
      message: 'Todo created successfully',
      success: true,
    };
  },

  // PUT update todo
  updateTodo: async (id: string, updates: UpdateTodoRequest): Promise<ApiResponse<Todo>> => {
    await delay(300);
    
    if (Math.random() < 0.1) {
      throw new Error('Failed to update todo');
    }
    
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
      throw new Error('Todo not found');
    }
    
    const updatedTodo = {
      ...todos[index],
      ...updates,
      updatedAt: new Date(),
    };
    
    todos[index] = updatedTodo;
    
    return {
      data: updatedTodo,
      message: 'Todo updated successfully',
      success: true,
    };
  },

  // DELETE todo
  deleteTodo: async (id: string): Promise<ApiResponse<null>> => {
    await delay(300);
    
    if (Math.random() < 0.1) {
      throw new Error('Failed to delete todo');
    }
    
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
      throw new Error('Todo not found');
    }
    
    todos = todos.filter(todo => todo.id !== id);
    
    return {
      data: null,
      message: 'Todo deleted successfully',
      success: true,
    };
  },
};