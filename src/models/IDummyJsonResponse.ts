import IUser from './IUser';

export default interface IDummyJsonResponse {
    limit: number;
    skip: number;
    total: number;
    users: IUser[]
}