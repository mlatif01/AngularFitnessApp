import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule],
  exports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule]
})
export class SharedModule {}
