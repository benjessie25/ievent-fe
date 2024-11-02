import type { ICategorieDTO } from '@/types/category/categoryTypes'
import { CategorieField, StatusCategorie } from '@/data/category/categorieEnum'

export const DEFAULT_CATEGORIE_VALUE: ICategorieDTO = {
  [CategorieField.slug]: "",
  [CategorieField.file]: "",
  [CategorieField.status]: StatusCategorie.active,
  [CategorieField.path]: "",
  [CategorieField.name]: "",
};
