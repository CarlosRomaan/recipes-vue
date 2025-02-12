export interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
  caloriesPerServing: number;
}