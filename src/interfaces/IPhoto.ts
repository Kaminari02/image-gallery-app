export interface IPhoto {
    id: string;
    user: {
        first_name: string;
        last_name: string;
        instagram_username: string;
        twitter_username: string;
        profile_image: {
            medium: string;
        }
    }
    urls: {
        regular: string;
    }
    alt_description: string;
}