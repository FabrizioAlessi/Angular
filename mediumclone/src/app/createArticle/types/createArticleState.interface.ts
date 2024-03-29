import { BackendErrorsInterface } from "src/app/shared/types/backendError.interface"

export interface CreateArticleStateInterface {
  isSubmitting:boolean
  validationErrors: BackendErrorsInterface | null
}
