/**
 * IMPORTS
 */
import {useState} from 'react';
import {Button, Text, View} from 'react-native';
import axios from 'axios';

interface ITaskDataProps {
  id: string;
  title: string;
}
const Tasks = () => {
  const [tasks, setTasks] = useState<ITaskDataProps[]>([]);

  const [taskLoading, setTaskLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleGetAllTasks = async () => {
    try {
      setTaskLoading(true);
      const responseTasks = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=10',
      );

      setTasks(responseTasks.data);
      setTaskLoading(false);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View>
      <Text>Task De API</Text>
      <Button
        disabled={false}
        title="Buscar atividades"
        onPress={() => handleGetAllTasks()}
      />

      <>
        {taskLoading ? (
          <Text>carregando...</Text>
        ) : (
          <>
            {tasks.length > 0 &&
              tasks.map((task: ITaskDataProps, index) => (
                <Text key={task.id}>{task.title}</Text>
              ))}
          </>
        )}
      </>

      {errorMessage ?? <Text>{errorMessage}</Text>}
    </View>
  );
};

/**
 * EXPORTS
 */
export {Tasks};
