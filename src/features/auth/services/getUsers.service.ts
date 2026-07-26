import { supabase } from "../../../shared";

import { mapUser } from "../mappers/user.mapper";
import type { UserModel } from "../models/user.model";

export async function getUsers(): Promise<UserModel[]> {
  console.log("Fetching users...");
  try {
    const { data, error } = await supabase.from("users").select("*");

    console.log("Fetched users:", data);

    if (error) throw error;
    return mapUser.toModels(data);
  } catch (error) {
    throw new Error("Error fetching users: " + (error as Error).message);
  }
}
