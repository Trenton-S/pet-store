

export interface Pet {
  id: number;
  category: Category
  photoUrls: string[];
  tags: Tag[];
  name: string;
  status: PetStatus;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
};

export type PetStatus = 'available' | 'pending' | 'sold';