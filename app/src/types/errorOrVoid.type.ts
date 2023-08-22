import { ErrorMessageInterface } from '../interfaces/errorMessage.interface';

export type ErrorOrVoid<T> = void | ErrorMessageInterface<T>;
