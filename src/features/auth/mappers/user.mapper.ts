import type { UserModel } from "../models/user.model";
import type { UserResponse } from "../services/contracts/user.contract";

export const mapUser = { toModel, toModels };

function toModels(data: UserResponse[]): UserModel[] {
  return data.map(toModel);
}
function toModel(data: UserResponse): UserModel {
  return {
    id: data.id,
    userName: data.user_name,
    email: data.email,
    psw: data.password,
    profilePicture: data.profile_picture,
  }
}
