import { Subject } from 'rxjs/Subject';

import { Exercise } from './exercise.model';

export class TrainingService {

  exerciseChanged = new Subject<Exercise>();

  availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'mountain-climbers', name: 'Mountain Climbers', duration: 120, calories: 10 },
    { id: 'lunges', name: 'Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  private runningExercise: Exercise;

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  getRunningExercise() {
    return {...this.runningExercise};
  }

}
