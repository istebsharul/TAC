import ContactForm from "@/app/contact/page";
import { NextRequest, NextResponse } from "next/server";

type FormData  = {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    message: string;
    countryCode: string;
    services: {
        webDesign: boolean;
        digitalMarketing: boolean;
        customerService: boolean;
        brandDesigning: boolean;
        socialMedia: boolean;
        others: boolean;
    };
}

export async function POST(req:NextRequest){
    if(req.method === 'POST'){
       const body = await req.json();

       const data : FormData = body;

       console.log(data);

       try {
        return NextResponse.json({message:data},{status:200});
       } catch (error) {
        return NextResponse.json({message:"Failed to Send Message",},{status:500})
       }
    }else{
        return NextResponse.json({message:"Method Not Allowed!"},{status:405})
    }
}

export async function GET(){
    return NextResponse.json({message:"Contact End Point is Working"},{status:200});
}