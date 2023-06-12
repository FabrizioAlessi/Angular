import { ArticlesInterface } from "src/app/shared/types/articles.interface"
import { BackendErrorsInterface } from "src/app/shared/types/backendError.interface"

export interface EditArticleStateInterface {
    article: ArticlesInterface | null
    isLoading: boolean
    isSubmitting:boolean
    validationErrors: BackendErrorsInterface | null
}
