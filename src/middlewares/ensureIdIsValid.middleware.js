import { AppError } from "../errors";

export const verifyCategoryId = (req, resp, next) => {
    const id = req.params.id
    if(isNaN(id)){
        throw new AppError("Invalid status code", 404);
    }
    else
    return  next()
}

export const verifyProductId = (req, resp, next) => {
    const id = req.params.id
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    if(!regexExp.test(id)){
        throw new AppError("invalid input, id must be a valid uuid", 404)
    }
    else
    return next()
}