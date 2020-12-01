export interface Animal {
    id: string,
    pid: string, // provider id
    type: string,
    name: string,
    catBreeds?: string[],
    dogBreeds?: string[],
    weight: number,
    dob: string,
    dobDate?: Date,
    gender: string,
    declawed?: string,
    specialNeeds: string,
    specialNeedsReason?: string,
    hair: string,
    goodWithCats: string,
    goodWithDogs: string,
    goodWithKids: string,
    status: string,
    bio: string,
    images: string[]
}