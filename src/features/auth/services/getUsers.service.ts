import { supabase } from "@/shared";

import { mapUser } from "../mappers/user.mapper";
import type { UserModel } from "../models/user.model";

export async function getUsers(): Promise<UserModel[]> {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) throw error;

    return mapUser.toModels(data);
  } catch (error) {
    throw new Error("Error fetching users: " + (error as Error).message);
  }
}
