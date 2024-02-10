export type PokemonListResult = {
    name: string;
    url: string;
}


export type traerListaPokemonResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListResult[];
}

export type Ability = {
    name: string;
    url: string;
}

export type Type = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export type traerPokemonResponse = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: {
        is_hidden: boolean;
        slot: number;
        ability: Ability;
    }[];
    forms: {
        name: string;
        url: string;
    }[];
    game_indices: any;
    held_items: any;
    location_area_encounters: string;
    moves: any;
    species: any;
    sprites: any;
    stats: any;
    types: Type[];
    past_types: any;
}

export type traerListaPokemonBody = {
    cantidad: number;
}

export type traerPokemonBody = {
    nombre: string;
}