import { Exercise } from './exercise.model';

export class TrainingService {
  availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'mountain-climbers', name: 'Mountain Climbers', duration: 120, calories: 10 },
    { id: 'lunges', name: 'Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];
}
