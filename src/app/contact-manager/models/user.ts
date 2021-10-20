export class User {
    id!: number;
    name!: string;
    avatar?: string;
    bio?: string;
    birthDate?: string;
    notes: string[] = []
}
