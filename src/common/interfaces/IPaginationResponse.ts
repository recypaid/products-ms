export interface IPaginationResponse<T> {
    data: T[];
    meta: {
        totalItems: number;
        currentPage: number;
        lastPage: number;
    }
}