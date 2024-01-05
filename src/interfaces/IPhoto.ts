export interface IPhoto {
    id: string;
    user: {
        username: string;
        instagram_username: string;
    }
    urls: {
        regular: string;
    }
    alt_description: string;
}