import http from '@/services/http'
import type { ICategorieDTO } from '@/types/category/categoryTypes'

export const getCategoriesByAdmin = async (page:any, search:any) => {
  const { data } = await http.get(`/admin/categories?search=${search}&page=${page}`);

return data;
};

export const getCategoryByAdmin = async (slug: string) => {
  const { data } = await http.get(`/admin/categories/${slug}`)


return data
}

export const deleteCategoryByAdmin = async (slug:string) => {
  const { data } = await http.delete(`/admin/categories/${slug}`);


return data;
};

export const addCategoryByAdmin = async (payload: any) => {
  const { data } = await http.post(`/admin/categories`, payload)

  return data
}

// @ts-ignore
export const updateCategoryByAdmin = async ({ currentSlug, ...payload }) => {
  const { data } = await http.put(`/admin/categories/${currentSlug}`, payload);


return data;
};

export const getAllCategoriesByAdmin = async () => {
  const { data } = await http.get(`/admin/all-categories`);


return data;
};
