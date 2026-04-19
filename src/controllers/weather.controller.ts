import { Weather } from "../models/weatherModel"
import { Request, Response } from 'express'
import mongoose from "mongoose"

const API_CALL = process.env.API_CALL

const getWeather = async (req: Request, res: Response) => {
  const weathers = await fetch(API_CALL!)
  const data = await weathers.json()
  return res.status(200).json({success: true, data: data})
}

export {getWeather}