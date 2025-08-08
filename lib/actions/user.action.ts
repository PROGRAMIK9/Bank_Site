'use server'
import {createSessionClient} from "../appwrite";
import {createAdminClient} from "../appwrite";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";
export const signIn = async () =>{
    try{

    }catch(err){
        console.error("Error signing in:", err);
    }
}

export const signUp = async (formData : SignUpParams) =>{
    try{
        const { account } = await createAdminClient();
        const {email, password, firstName, lastName} = formData;
        
        const newUserAccount = await account.create(ID.unique(),
        email,
        password,
        `${firstName} ${lastName}`);

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(newUserAccount  );
    }catch(err){
        console.error("Error signing in:", err);
    }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}
