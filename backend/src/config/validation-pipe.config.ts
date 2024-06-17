import {
  UnprocessableEntityException,
  ValidationPipeOptions,
} from '@nestjs/common';

export const ValidationPipeConfig: ValidationPipeOptions = {
  exceptionFactory: (errors) => {
    const result = errors.map((error) => ({
      property: error.property,
      message: error.constraints[Object.keys(error.constraints)[0]],
    }));
    return new UnprocessableEntityException(result);
  },
  stopAtFirstError: true,
};
