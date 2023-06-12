import { NgModule } from "@angular/core";
import { ArticleFormComponent } from "./articleForm.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ArticleFormComponent]
})

export class ArticleFormModule {}
