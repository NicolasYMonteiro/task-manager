'use client';

import { useState } from 'react';
import TaskCard, { Task } from '@components/card/task-card';
import CreateTaskModal from '@components/modal/create-task-modal';

const Page = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Estudar algoritmos',
      description: 'Ler sobre listas encadeadas e resolver 3 exercícios no LeetCode.',
      date: new Date(2025, 4, 24),
      interval: 2,
      sequence: 1,
      emergency: true,
      status: 'pending',
    },
    {
      id: 2,
      title: 'Praticar JavaScript',
      description: 'Refatorar funções com ES6 e usar map/filter/reduce em exercícios práticos.',
      date: new Date(2025, 4, 24),
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'Aula de Estatística',
      description: 'Assistir à aula sobre distribuições de probabilidade e revisar anotações.',
      date: new Date(2025, 4, 24),
      status: 'completed',
    },
    {
      id: 4,
      title: 'Atualizar portfólio',
      description: 'Adicionar projeto do ToDo com autenticação e deploy no Vercel.',
      date: new Date(2025, 4, 25),
      status: 'pending',
    },
    {
      id: 5,
      title: 'Enviar currículo',
      description: 'Aplicar para 3 vagas no LinkedIn com foco em frontend/React.',
      date: new Date(2025, 4, 25),
      emergency: true,
      status: 'pending',
    },
    {
      id: 6,
      title: 'Revisar Git e GitHub',
      description: 'Praticar comandos git rebase, merge e resolução de conflitos.',
      date: new Date(2025, 4, 26),
      status: 'cancelled',
    },
    {
      id: 7,
      title: 'Fazer exercício físico',
      description: 'Caminhar 30 minutos para manter a saúde física e mental.',
      date: new Date(2025, 4, 26),
      interval: 1,
      sequence: 45,
      status: 'pending',
    },
    {
      id: 10,
      title: 'Codar projeto pessoal',
      description: 'Trabalhar na tela de login com validação e autenticação via JWT.',
      date: new Date(2025, 4, 27),
      status: 'cancelled',
    },
  ]);

  const toggleStatus = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
            ...task,
            status: task.status === 'completed' ? 'pending' : 'completed',
          }
          : task
      )
    );
  };

  return (
    <div className="relative min-h-screen px-4 py-8">
      <div className="md:absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none md:bg-[url('/greciaFundo.png')]" />

      <div className="relative z-10 md:w-5/6 bg-white/80 backdrop-blur-md p-6 md:rounded-xl md:shadow-xl md:border md:border-blue-700 mx-auto">
        <h1 className="text-4xl font-serif font-bold text-blue-900 text-center mb-6 tracking-wide">
          Tarefas do dia
        </h1>

        <div className={`grid gap-6 grid-cols-1 ${tasks.length >= 7 ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2'}`}>

          <div className="h-full w-full flex justify-center items-center">
            <CreateTaskModal />
          </div>

          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} onToggle={toggleStatus} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 italic">
              Nenhuma tarefa encontrada. Adicione uma tarefa para começar!
            </div>
          )}
        </div>
      </div>
    </div>
  );


};

export default Page;
