import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from '@/utils/nodemailer';


type FormData = {
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

export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
        const body = await req.json();

        const data: FormData = body;

        console.log(data);

        try {
            const serviceSelections = Object.keys(data.services)
                .filter(service => data.services[service as keyof typeof data.services])
                .map(service => service.replace(/([A-Z])/g, ' $1').toLowerCase())
                .join(", ");

            const customMessage = `
                Name: ${data.firstName} ${data.lastName}
                Email: ${data.email}
                Company: ${data.companyName}
                Phone: ${data.countryCode} ${data.phoneNumber}
                Message: ${data.message}
                Services: ${serviceSelections}
            `;

            await transporter.sendMail({
                ...mailOptions,
                from: `"${data.firstName}" <${data.email}>`,
                subject: 'New Contact Form Submission',
                text: customMessage,
            });

            return NextResponse.json({ message: "Email sent Successfully" }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ message: "Failed to Send Message",error}, { status: 500 })
        }
    } else {
        return NextResponse.json({ message: "Method Not Allowed!" }, { status: 405 })
    }
}

export async function GET() {
    return NextResponse.json({ message: "Contact End Point is Working" }, { status: 200 });
}