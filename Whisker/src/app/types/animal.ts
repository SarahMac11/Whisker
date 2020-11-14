export interface Animal {
    type: string,
    breed: string[],
    weight: number,
    dob: Date,
    gender: string,
    declawed: boolean,
    specialNeeds: boolean,
    specialNeedsReason: string,
    hairLength: string,
    goodWithCats: boolean,
    goodWithDogs: boolean,
    goodWithKids: boolean,
    status: string
    added: Date,
    provider: string
}
