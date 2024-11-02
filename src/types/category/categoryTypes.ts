import type { CategorieField, StatusCategorie } from '@/data/category/categorieEnum'

interface Cover {
  _id: string;
  url: string;
  blurDataURL?: string;
}

export interface ICategorieDTO {
  [CategorieField.name]: string;
  [CategorieField.path]: string;
  [CategorieField.blurDataURL]?: string;
  [CategorieField.id]?: string;
  [CategorieField.file]: string;
  [CategorieField.slug]: string;
  [CategorieField.status]: StatusCategorie;
}

export interface ICategorie extends ICategorieDTO {
  [CategorieField.createdAt]: Date;
}
