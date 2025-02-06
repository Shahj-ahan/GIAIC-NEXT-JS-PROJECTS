
import {productList} from "../lib/dbs";
import { NextResponse } from "next/server";

export const GET = async () => {
    return NextResponse.json({
        data:productList},{status:200});
};

export const POST = async (request: Response) => {
    const data = await request.json();
    console.log(data);
    return NextResponse.json({data:productList}, {status:200});
    
};