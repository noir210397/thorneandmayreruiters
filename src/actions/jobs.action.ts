"use client"
import { Job } from "@/types/job.types"
import axios from "../config/axios"
export async function getJobs() {
    console.log(axios.defaults.baseURL)
    const res = await axios.get("job")
    return res.data as Job[]
}