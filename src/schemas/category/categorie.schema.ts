import * as Yup from 'yup';

 const CategorySchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),

   path: Yup.string().required('File is required'),
  slug: Yup.string().required('Slug is required'),
});

export default CategorySchema
