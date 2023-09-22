import express from "express";
import { deleteUserById, getUsers } from "../db/users";


export const getAllUsers = async(req:express.Request, res: express.Response) =>{
    try{
    const users = await getUsers();
    res.status(200).json(users);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteUsers = async(req:express.Request,res:express.Response) =>{
    try{
    const {id} = req.params;
    const deletedUsers = await deleteUserById(id);
    return res.status(200).json(deleteUsers);
    }
    catch(error){
        console.log(error);
        res.sendStatus(400)
    }
}