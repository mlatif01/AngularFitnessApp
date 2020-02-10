import { TrainingComponent } from "../training/training.component";
import { CurrentTrainingComponent } from "../training/current-training/current-training.component";
import { NewTrainingComponent } from "../training/new-training/new-training.component";
import { PastTrainingComponent } from "../training/past-training/past-training.component";
import { StopTrainingComponent } from "../training/current-training/stop-training.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { TrainingRoutingModule } from "./training-routing.module";
import { StoreModule } from "@ngrx/store";
import { trainingReducer } from "./training.reducer";

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent
  ],
  imports: [
    SharedModule,
    TrainingRoutingModule,
    StoreModule.forFeature("training", trainingReducer)
  ],
  exports: [],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule {}
