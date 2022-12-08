import * as yup from 'yup';

export const createProductsSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    category_id: yup.number().required()
})

