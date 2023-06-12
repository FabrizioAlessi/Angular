import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleFormInterface } from './types/articleForm.interface';
import { BackendErrorsInterface } from '../../types/backendError.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.css'],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues!: ArticleFormInterface;
  @Input() isSubmitting: boolean = false;
  @Input() errors: BackendErrorsInterface | null = null;

  @Output() articleSubmit = new EventEmitter<ArticleFormInterface>();

  form = this.formBuilder.group({
    title: '',
    description: '',
    body: '',
    tagList: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.initialValues,  "init nel form")
    this.intializeForm();
  }
  intializeForm(): void {
    //per assegnare i valori ad un form possiamo usare sia setValue che patchValue, la differenza è che in patchValue
    //non dobbiamo rispettare la struttura del form
    if (!this.initialValues) {
      throw new Error('input not provided');
    } else {
      this.form.patchValue({
        title: this.initialValues.title,
        description: this.initialValues.description,
        body: this.initialValues.body,
        tagList: this.initialValues.tagList.join(' '), //usiamo join() perchè ci serve un array di tags
      });
    }
  }
  onSubmit(): void {
    const formValue = this.form.getRawValue();
    const articleFormValues: ArticleFormInterface = {
      ...formValue,
      tagList: formValue.tagList!.split(' '),
    };
    this.articleSubmit.emit(articleFormValues);
  }

}
