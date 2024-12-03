import React from 'react';
import { useQuery } from 'react-query';
import { CheckCircle2, Circle, Loader2 } from 'lucide-react';
import { api } from '../lib/api';
import { Todo } from '../types';

export function TodoList() {
  const { data: todos, isLoading, error } = useQuery<Todo[]>('todos', () =>
    api.get('/todos').then((res) => res.data)
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-800">Error loading todos</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <ul className="divide-y divide-gray-200">
        {todos?.map((todo) => (
          <li key={todo.id} className="px-4 py-4 sm:px-6">
            <div className="flex items-center space-x-4">
              {todo.completed ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
              <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}